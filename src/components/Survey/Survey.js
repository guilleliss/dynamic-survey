import React, { Component } from 'react';
import './Survey.css'

import SurveyQuestion from '../SurveyQuestion/SurveyQuestion'
import SurveyNavigation from '../SurveyNavigation/SurveyNavigation'
import SurveySummary from '../SurveySummary/SurveySummary'
import ProgressBar from '../ProgressBar/ProgressBar'

class Survey extends Component {
	state = {
		currentPage: 0,
		questions: [{
			type: 'text',
			question: 'All good?'
		},
		{
			type: 'select',
			question: 'Everything allright?',
			options: [
				'Great',
				'Awesome'
			]
		},
		{
			type: 'radio',
			question: 'What are you upto?',
			options: [
				'Sleeping',
				'Just hanging'
			]
		},		
		{
			type: 'text',
			question: 'Another one'
		}]
	}

	backClickHandler = () => {
		let currentPage = this.state.currentPage
		if(currentPage > 0)
			this.setState({ currentPage: currentPage - 1 });
	}

	nextClickHandler = () => {
		let currentPage = this.state.currentPage
		if(currentPage < this.state.questions.length - 1)
			this.setState({ currentPage: currentPage + 1 });
	}	

	render() {
		let questions = this.state.questions.map(q => (
			<SurveyQuestion type={q.type} question={q.question} options={q.options}/>
		))[this.state.currentPage]

		return (
			<div className="survey">
				<ProgressBar totalPages={this.state.questions.length}
					currentPage={this.state.currentPage} />
				{questions}
				<SurveySummary />
				<SurveyNavigation 
					backClicked={this.backClickHandler} 
					nextClicked={this.nextClickHandler}
					totalPages={this.state.questions.length}
					currentPage={this.state.currentPage} />
			</div>
		);
	}
}

export default Survey