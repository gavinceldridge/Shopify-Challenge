import React from "react";

export default function Responses({ questionsAndAnswers }) {
	return (
		<table className="results-table">
			<thead >
				<tr>
					<th className="q-header">Question</th>
					<th className="a-header">Answer</th>
				</tr>
			</thead>
			<tbody>
				{questionsAndAnswers.map((questionAndAnswer) => (
					<tr className="question-answer" key={questionAndAnswer.question}>
						<td className='question'>{questionAndAnswer.question}</td>
						<td className='answer'>{questionAndAnswer.answer}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
