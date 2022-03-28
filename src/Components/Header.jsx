import { resetTest } from "../helpers/resetTest";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setTime,
	setType,
	setWordList,
	timerSet,
} from "../store/actions";
import { State } from "../store/reducer";
import "../stylesheets/Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const options = {
	time: [15, 30, 45, 60, 75],
	type: ["keywords", "code"],
};

export default function Header() {
	const {
		preferences: { timeLimit, type },
		time: { timerId },
	} = useSelector((state) => state);

	const dispatch = useDispatch();

	const getWords = async (type) => {
		switch(type) {
			case "keywords":
				import(`../wordlists/keywords.json`).then((words) =>
						dispatch(setWordList(words.default))
					);
					break;
			case "code":
				const codeLimit = 2;
				try{
					const response  = await axios.get(`https://type-to-learn.hasura.app/api/rest/get-random/${codeLimit}`);
					console.log(response)
				}catch(e){
					console.log(e);
				}
				break;
	}
}

	useEffect(() => {
		const type = localStorage.getItem("type") || "keywords";
		const time = parseInt(localStorage.getItem("time") || "60", 10);

		getWords(type);

		dispatch(timerSet(time));
		dispatch(setType(type));
		dispatch(setTime(time));
	}, [dispatch]);

	// Set Time
	useEffect(() => {
		if (timeLimit !== 0) {
			document.querySelector(".time")?.childNodes.forEach((el) => {
				if (el instanceof HTMLButtonElement)
					el.classList.remove("selected");
			});
			document
				.querySelector(`button[value="${timeLimit}"]`)
				?.classList.add("selected");
			dispatch(setTime(timeLimit));
			localStorage.setItem("time", `${timeLimit}`);
			resetTest();
		}
	}, [dispatch, timeLimit]);

	// Set Type
	useEffect(() => {
		if (type !== "") {
			document.querySelector(".type")?.childNodes.forEach((el) => {
				if (el instanceof HTMLButtonElement)
					el.classList.remove("selected");
			});
			document
				.querySelector(`button[value="${type}"]`)
				?.classList.add("selected");
			dispatch(setType(type));
			localStorage.setItem("type", type);
			resetTest();
		}
	}, [dispatch, type]);

	const handleOptions = async ({ target, clientX, clientY }) => {
		if (target instanceof HTMLButtonElement && target.dataset.option) {
			if (target.value === timeLimit) {
				target.blur();
				return;
			}
			switch (target.dataset.option) {
				case "time":
					dispatch(setTime(+target.value));
					break;
				case "type":
					console.log(target.value);
					switch(target.value){
						case "keywords":
							import(`../wordlists/keywords.json`).then((words) =>
								dispatch(setWordList(words.default))
							);
							break;

						case "code":
							const codeLimit = 2;
							try{
								const response  =await axios.get(`https://type-to-learn.hasura.app/api/rest/get-random/${codeLimit}`);
								
								const code_snippet = response.data.code_snippet[parseInt(Math.random(0,codeLimit))].code.toString();
								console.log(code_snippet)
								dispatch(setWordList([code_snippet]))
							}catch(e){
								console.log(e);
							}
							break;
					}
			}
			target.blur();
		}
	};

	return (
		<header className={`${timerId ? "hidden" : undefined} type-header`}>
			<Link to="/" className="brand">
				Codyper
			</Link>
			<div className="buttons">
				{Object.entries(options).map(([option, choices]) => (
					<div key={option} className={option}>
						{option}:
						{choices.map((choice) => (
							<button
								className="mini"
								key={choice}
								data-option={option}
								value={choice}
								onClick={(e) => handleOptions(e)}>
								{choice}
							</button>
						))}
					</div>
				))}
			</div>
		</header>
	);
}
