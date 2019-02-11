import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SurveyQuestion.css';

class SurveyQuestion extends Component {
	render() {
		let answers = {}

		switch(this.props.type) {
			case('text'): 
				answers = <input type="text" className="form-control" />
				break;
			default: 
				answers = null
		}

		return (
			<div className="survey-question">
				{this.props.question}
				{answers}
			</div>
		);
	}
}

SurveyQuestion.propTypes = {
	type: PropTypes.string.isRequired,
	question: PropTypes.string.isRequired,
	options: PropTypes.array,
}

export default SurveyQuestion