import { useSelector } from "react-redux";
import "../stylesheets/Footer.css";

export default function Footer() {
	const { timerId } = useSelector((state) => state.time);

	return (
		<div className={`bottom-area ${timerId ? "hidden" : ""}`}>
			<span className="hint">
				<kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
			</span>
			<span className="hint">
				<kbd>Tab</kbd> to restart test
			</span>
		</div>
	);
}
