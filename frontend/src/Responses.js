import React, { useEffect, useState } from "react";

export default function Responses({
	questionsAndAnswers,
	setQuestionsAndAnswers,
	loading,
}) {
	const [robots, setRobots] = useState(1);
	useEffect(() => {
		const interval = setInterval(() => {
			setRobots(robots < 10 ? robots + 1 : 1);
		}, 500);
		return () => clearInterval(interval);
	}, [robots]);

	return (
		<table className="results-table">
			<thead>
				<tr>
					<th className="q-header">Question</th>
					<th className="a-header">Answer</th>
				</tr>
			</thead>
			<tbody>
				{loading ? (
					<tr>
						<td>
							<div className="loading">{"🤖".repeat(robots)}</div>
						</td>
					</tr>
				) : (
					""
				)}

				{questionsAndAnswers.map((questionAndAnswer, index) => (
					<tr className="question-answer" key={index}>
						<td className="delete">
							<button
								className="delete-btn"
								onClick={() => {
									setQuestionsAndAnswers(
										questionsAndAnswers.filter(
											(item, i) => i !== index
										)
									);
								}}
							>
								X
							</button>
						</td>
						<td className="question">
							{questionAndAnswer.question}
						</td>
						<td className="answer">{questionAndAnswer.answer}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
