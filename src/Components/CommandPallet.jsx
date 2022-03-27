import { useEffect, useState, useRef } from "react";
import styles from "../stylesheets/CommandPallet.module.css";
import { options } from "./Header";
import { useDispatch } from "react-redux";
import { setTime, setType } from "../store/actions";

export default function CommandPallet(props) {
  const [palletText, setPalletText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedOption, setHighlightedOption] = useState(0);
  const [commandList, setCommandList] = useState([]);
  const dispatch = useDispatch();
  const palletTextBox = useRef(null);

  useEffect(() => {
    if (!selectedOption) {
      setCommandList(
        Object.keys(options).filter((option) =>
          option.includes(palletText.toLowerCase())
        )
      );
    } else {
      const commands = options[selectedOption].map((o) => o.toString());
      setCommandList(
        commands.filter((option) => option.includes(palletText.toLowerCase()))
      );
    }
    setHighlightedOption(0);
  }, [palletText, selectedOption]);

  const handleCommandSelection = (command) => {
    setPalletText("");
    if (!command) return;
    if (!selectedOption) {
      setSelectedOption(command);
      return;
    }
    switch (selectedOption) {
      case "time":
        dispatch(setTime(+command));
        break;
      case "type":
        dispatch(setType(command));
        break;
      default:
        console.log(selectedOption, command);
    }
    props.setShowPallet(false);
  };

  const handlePalletKeys = (e) => {
    if (e.key === "ArrowUp") {
      setHighlightedOption((op) => (op > 0 ? op - 1 : op));
    } else if (e.key === "ArrowDown") {
      setHighlightedOption((op) => (op < commandList.length - 1 ? op + 1 : op));
    } else if (e.key === "Enter") {
      const command = commandList[highlightedOption];
      handleCommandSelection(command);
    } else if (e.key === "Escape") {
      props.setShowPallet(false);
    }
    e.stopPropagation();
  };

  return (
    <div className={styles.commandPallet} onKeyDown={handlePalletKeys}>
      <input
        ref={palletTextBox}
        type="text"
        className={styles.commandInput}
        placeholder="Type to search"
        onBlur={() => props.setShowPallet(false)}
        value={palletText}
        autoFocus
        onChange={(e) => setPalletText(e.target.value)}
      />
      <div className={styles.commandList}>
        {commandList.map((option, idx) => (
          <div
            className={`${styles.command} ${
              highlightedOption === idx && styles.highlighted
            }`}
            key={idx}
            onClick={() => handleCommandSelection(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
