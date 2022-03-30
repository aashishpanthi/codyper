import { setTimerId, setWordList, timerSet } from "../store/actions";
import { store } from "../store/store";
import axios from "axios";

export const resetTest = async () => {
	const { dispatch, getState } = store;
	const {
		time: { timerId },
		preferences: { timeLimit, type },
	} = getState();
	document
		.querySelectorAll(".wrong, .right")
		.forEach((el) => el.classList.remove("wrong", "right"));
	if (timerId) {
		clearInterval(timerId);
		dispatch(setTimerId(null));
	}
	switch (type) {
		case "keywords":
		  import(`../wordlists/keywords.json`).then((words) =>
			dispatch(setWordList(words.default))
		  );
		  break;

		case "code":
		  const codeLimit = Math.floor(Math.random() * 3) + 1 ;
		  const codeOffset = Math.floor(Math.random() * 35) ;
		  try {
			const response = await axios.get(
			  `https://type-to-learn.hasura.app/api/rest/get-code-with-offset/${codeLimit}/${codeOffset}`
			);

			const code_snippet =
			  response.data.code_snippet[
				parseInt(Math.random() * codeLimit)
			  ].code.toString();
			console.log(code_snippet);
			dispatch(setWordList([code_snippet]));
		  } catch (e) {
			console.log(e);
		  }
		  break;
	  }
	dispatch(timerSet(timeLimit));
};
