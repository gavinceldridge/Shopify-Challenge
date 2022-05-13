import "./App.css";
import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import AiForm from "./AiForm";
import Responses from "./Responses";

function App() {
	// console.log(process.env.REACT_APP_OPEN_AI_SK);

	const configuration = new Configuration({
		organization: process.env.REACT_APP_OPEN_AI_ORG,
		apiKey: process.env.REACT_APP_OPEN_AI_SK,
	});

	const [input, setInput] = useState("");
	const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

	const askAi = async (length) => {
    const openai = new OpenAIApi(configuration);
		const engines = await openai.listEngines();
		console.log(engines);
		console.log(input);
		if (input.length === 0) return;
		try {
			const response = await openai.createCompletion("text-curie-001", {
				prompt: input,
				max_tokens: length,
			});
			console.log(response.data);
			return response.data.choices;
		} catch (e) {
			console.log(e);
			return false;
		}
	};

	const handleSubmit = async (e, length) => {
		e.preventDefault();
		const res = await askAi(length);
		if (res) {
			console.log(res);
			setQuestionsAndAnswers([
				{ question: input, answer: res[0].text },
				...questionsAndAnswers,
			]);
		}
	};

	return (
		<div className="App">
			<AiForm
				input={input}
				setInput={setInput}
				handleSubmit={handleSubmit}
			/>
			<Responses questionsAndAnswers={questionsAndAnswers} />
		</div>
	);
}

export default App;
