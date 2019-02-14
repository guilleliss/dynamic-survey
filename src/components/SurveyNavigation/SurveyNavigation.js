import React from 'react';
import { Link } from 'react-router-dom'
import './SurveyNavigation.css'

const SurveyNavigation = props => (
	<div className="survey-navigation mt-5 pt-3">
		<Link to={{ pathname: "/question/"+(props.currentPage - 1) }}>
			<button className="btn btn-primary"
			onClick={props.backClicked}
			disabled={props.currentPage === 1 ? "disabled" : null}>
				back
			</button>	
		</Link>
		<Link to={props.currentPage === props.totalPages ? "/summary" : { pathname: "/question/"+(props.currentPage + 1) }}>
			<button  
				className="btn btn-primary" 
				onClick={props.nextClicked}
				disabled={props.currentPage === props.totalPages + 1 || !props.nextStepEnabled}>
					{props.currentPage === props.totalPages ? "finish" : "next"}
			</button>
		</Link>
	</div>
)

export default SurveyNavigation