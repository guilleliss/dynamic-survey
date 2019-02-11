import React from 'react';
import './SurveyNavigation.css'

const SurveyNavigation = props => (
	<div className="survey-navigation mt-5 pt-3">
		<button className="btn btn-primary" 
			onClick={props.backClicked}
			disabled={props.currentPage === 0}>back</button>
		<button className="btn btn-primary" 
			onClick={props.nextClicked}
			disabled={props.currentPage === props.totalPages}>next</button>
	</div>
)

export default SurveyNavigation