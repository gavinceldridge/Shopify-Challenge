import React from "react";

export default function Response({
	questionAndAnswer,
	setQuestionsAndAnswers,
	index,
	questionsAndAnswers,
}) {
	return (
		<tr className="question-answer" key={index}>
			<td className="delete">
				<button
					className="delete-btn"
					onClick={() => {
						setQuestionsAndAnswers(
							questionsAndAnswers.filter((item, i) => i !== index)
						);
					}}
				>
					X
				</button>
			</td>
			<td className="question">{questionAndAnswer.question}</td>
			<td className="answer">{questionAndAnswer.answer}</td>
		</tr>
	);
}
