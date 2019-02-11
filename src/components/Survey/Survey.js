import React, { Component } from 'react';
import SurveyQuestion from '../SurveyQuestion/SurveyQuestion'

class Survey extends Component {
	render() {
		return (
			<div className="survey">
				<SurveyQuestion type="text" question="All good?" />
			</div>
		);
	}
}

export default Survey