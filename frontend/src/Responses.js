import React from "react";

export default function Responses({ questionsAndAnswers, setQuestionsAndAnswers }) {
	return (
		<table className="results-table">
			<thead >
				<tr>
					<th className="q-header">Question</th>
					<th className="a-header">Answer</th>
				</tr>
			</thead>
			<tbody>
				{questionsAndAnswers.map((questionAndAnswer, index) => (
					<tr className="question-answer" key={index}>
						<td className="delete"><button className="delete-btn" onClick={()=>{
							
							setQuestionsAndAnswers(questionsAndAnswers.filter((item, i) => i !== index));

						}}>X</button></td>
						<td className='question'>{questionAndAnswer.question}</td>
						<td className='answer'>{questionAndAnswer.answer}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
