import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import './Survey.css'

import SurveyQuestion from '../SurveyQuestion/SurveyQuestion'
import SurveyNavigation from '../SurveyNavigation/SurveyNavigation'
import SurveySummary from '../SurveySummary/SurveySummary'
import ProgressBar from '../ProgressBar/ProgressBar'

class Survey extends Component {
	state = {
		currentPage: 1,
		nextStepEnabled: false,
		questions: [{
			type: 'text',
			question: 'All good? (1)',
			answer: '',
			placeholder: 'Answer here'
		},
		{
			type: 'select',
			question: 'Everything allright? (2)',
			answer: '',
			options: [
				'Great',
				'Awesome',
				'Been better'
			]
		},
		{
			type: 'radio',
			question: 'What are you upto? (3)',
			answer: '',
			options: [
				'Sleeping',
				'Just hanging'
			]
		},		
		{
			type: 'text',
			question: 'Another one (4)',
			answer: ''
		}]
	}

	backClickHandler = () => {
		let currentPage = this.state.currentPage
		if(currentPage > 1)
			this.setState({ currentPage: currentPage - 1 });
		this.setState({ nextStepEnabled: true })
	}

	nextClickHandler = () => {
		let currentPage = this.state.currentPage
		if(currentPage < this.state.questions.length + 1)
			this.setState({ currentPage: currentPage + 1 })
		this.setState({ nextStepEnabled: false })
	}

	handleInputChange = (event, index) => {
		let questions = this.state.questions.map(q => q)
		questions[index].answer = event.target.value

		let nextStepEnabled = event.target.value !== ""

		this.setState({ 
			questions: questions,
			nextStepEnabled: nextStepEnabled
		})
	}

	render() {
		let questions = this.state.questions.map((step, index) => (
			<Route key={index} exact path={"/question/" + (index + 1)} 
				render={() => (index + 1) !== this.state.currentPage ?
				(<Redirect to={{ pathname: "/question/"+this.state.currentPage }} />) : 
				(<SurveyQuestion index={index}
					{ ...step }
					inputChanged={this.handleInputChange} />)
			} />
		))

		return (
			<div className="survey col-8 offset-2 my-5">
				<ProgressBar totalPages={this.state.questions.length}
					currentPage={this.state.currentPage} />
				{questions}
				<Route exact path="/" component={() => (
					<div className="text-center">
						<h2>Welcoming message</h2>
						<p>Welcoming text</p>
						<Link className="btn btn-primary" to="/question/1">Start Survey!</Link>
					</div>
				)} />
				<Route exact path="/summary" 
					component={() => (this.state.currentPage < this.state.questions.length) ? 
						(<Redirect to={{ pathname: "/question/"+this.state.currentPage }} />) :
						(<SurveySummary data={this.state.questions}/>)
				} />
				<Route path="/question/" component={() => (
				<SurveyNavigation 
					backClicked={this.backClickHandler} 
					nextClicked={this.nextClickHandler}
					totalPages={this.state.questions.length}
					currentPage={this.state.currentPage}
					nextStepEnabled={this.state.nextStepEnabled} />
				)} />
			</div>
		);
	}
}

export default Survey