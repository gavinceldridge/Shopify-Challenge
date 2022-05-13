import "./App.css";
import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import AiForm from "./AiForm";
import Responses from "./Responses";

function App() {
	const configuration = new Configuration({
		organization: "org-pp0wWrYEeCmUJsgTrkk7ub6f",
		apiKey: "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",
	});

	const [input, setInput] = useState("");
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

	const openai = new OpenAIApi(configuration);
	const askAi = async (length) => {
		await openai.listEngines();

    console.log(input);
		if (input.length === 0) return;

		const response = await openai.createCompletion("text-curie-001", {
			prompt: input,
			max_tokens: length,
		});
    console.log(response.data);
		return response.data.choices;
	};

	const handleSubmit = async (e, length) => {
		e.preventDefault();
    const res = await askAi(length);
    console.log(res);
    setQuestionsAndAnswers([{question: input, answer: res[0].text}, ...questionsAndAnswers]);
	};

	return (
		<div className="App">
			<AiForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <Responses questionsAndAnswers = {questionsAndAnswers} />
		</div>
	);
}

export default App;
