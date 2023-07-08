import React from 'react'
import { Box } from '@mui/material'


const ProgressCircle = (props) => {

	const angle = props.progress * 360

	return (
		<Box 
		sx = {{
			background: `radial-gradient(#121B28 55%, transparent 56%),
				conic-gradient(transparent 0deg ${angle}deg, #843ba1 ${angle}deg 360deg),
				#9CFCD8`,
			borderRadius: '50%',
			width: '40px',
			height: '40px'
		}}
		/>
	)
}

export default ProgressCircle