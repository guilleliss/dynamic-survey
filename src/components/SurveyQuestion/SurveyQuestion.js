import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SurveyQuestion.css';

class SurveyQuestion extends Component {

	render() {
		let answers = {}

		switch(this.props.type) {
			case('text'): 
				answers = <input type="text" 
					className="form-control"
					placeholder={this.props.placeholder}
					value={this.props.answer}
					onChange={event => this.props.inputChanged(event, this.props.index)} />
				break;
			case('select'):
				answers = (
					<select className="form-control"
						onChange={event => this.props.inputChanged(event, this.props.index)}
						defaultValue={this.props.answer} >
						{this.props.options.map((option, i) => 
							<option key={i} value={option}>
								{option}
							</option>
						)}
					</select>
				)
				break;
			case('radio'):
				answers = this.props.options.map(option => (
					<div key={option} className="form-check">
						<input value={option} 
							onChange={event => this.props.inputChanged(event, this.props.index)}
							checked={option === this.props.answer}
							id={option}  
							type="radio" 
							name="customRadio" 
							className="form-check-input" />
						<label className="form-check-label" htmlFor={option}>{option}</label>
					</div>
				))
				break;
			default: 
				answers = null
		}

		return (
			<div className="survey-question">
				<div className="form-group">
					<label>{this.props.question}</label>
					{answers}
				</div>
			</div>
		)
	}
}

SurveyQuestion.propTypes = {
	index: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	question: PropTypes.string.isRequired,
	options: PropTypes.array,
	inputChanged: PropTypes.func
}

SurveyQuestion.defaultProps = {
	placeholder: "Type here"
}

export default SurveyQuestion