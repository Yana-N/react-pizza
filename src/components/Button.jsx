import React from 'react'
import classNames from 'classnames'

const Button = ({children, className, onClick}) => {
	return (
		<button className={classNames('button', className)}>
			{children}
		</button>
	)
}

export default Button
