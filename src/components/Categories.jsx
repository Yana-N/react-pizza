import React, {memo, useState} from 'react'
import PropTypes from 'prop-types'

const Categories = memo(({items, onClickItem}) => {

	const [activeItem, setActiveItem] = useState(null)

	const onSelectItem = (index) => {
		setActiveItem(index)
		onClickItem(index)
	}

	return (
		<div className="categories">
			<ul>
				<li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
				{items && items.map((item, index) => <li
					className={activeItem === index ? 'active' : ''}
					onClick={() => onSelectItem(index)}
					key={item}>{item}</li>)}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickItem: PropTypes.func.isRequired,
}

Categories.defaultProps = {activeItem: null, items: []}

export default Categories