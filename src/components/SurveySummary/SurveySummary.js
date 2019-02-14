import React from 'react';

const SurveySummary = props => (
	<div className="survey-summary">
		<h2>Summary</h2>
		{props.data.map((question, index) => (
			<div className="card mt-4" key={index}>
				<label>{question.question}</label>
				<p className="card-text">{question.answer}</p>
			</div>
		))}
	</div>
)

export default SurveySummary