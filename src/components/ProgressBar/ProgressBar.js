import React from 'react';
import './ProgressBar.css'

const ProgressBar = props => (
	<div className="progressbar mb-5">
		<div className="progress-bar-inner" 
			style={{'width': 100 * (props.currentPage / props.totalPages) + '%'}}></div>
	</div>
)

export default ProgressBar