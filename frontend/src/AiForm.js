import React, {useState} from "react";

export default function AiForm({ input, setInput, handleSubmit }) {

	const [length, setLength] = useState(10);

	return (
		<form className="ai-form" onSubmit={e => handleSubmit(e, length)}>
			<label className="textarea-label" htmlFor="text-input">
				Enter a question or prompt:
			</label>
			<textarea
				className="textarea-input"
				id="text-input"
				onChange={(e) => setInput(e.target.value)}
				defaultValue={input}
			></textarea>
			<label className="range-label" htmlFor="slider">Response length: {length}</label>
			<input type="range" id="slider" className="slider" min="5" max="50" value={length} onChange={(e)=>setLength(e.target.value)} />
			<input className="submit-btn" type="submit" value="Ask" />
		</form>
	);
}
