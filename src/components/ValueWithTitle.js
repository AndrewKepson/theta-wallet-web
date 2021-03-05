import React from 'react'
import './ValueWithTitle.css'

const ValueWithTitle = props => {
	const { title, value } = props
	return (
		<div className='ValueWithTitle'>
			<div className='ValueWithTitle__title'>{title}</div>
			<div className='ValueWithTitle__value'>{value}</div>
		</div>
	)
}

export default ValueWithTitle
