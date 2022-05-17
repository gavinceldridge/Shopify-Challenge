import React, { useEffect, useState } from "react";

import Response from "./Response";

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
					<Response
						key={index}
						questionAndAnswer={questionAndAnswer}
						setQuestionsAndAnswers={setQuestionsAndAnswers}
						index={index}
						questionsAndAnswers={questionsAndAnswers}
					/>
				))}
			</tbody>
		</table>
	);
}
