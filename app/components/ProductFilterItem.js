import React, { PureComponent, PropTypes } from 'react'

export default class ProductFilterItem extends PureComponent {
	static propTypes = {
		onChangeHanlder: PropTypes.func,
		filterType: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.string,
		checked: PropTypes.bool,
	}

	render() {
		const { filterType, name, checked, onChangeHanlder, id } = this.props

		return (
			<div className="filter__checkbox">
				<input
					onChange={(e) => onChangeHanlder(filterType, e.target.checked)}
					// onChange={(e) => console.log(e.target.checked)}
					type="checkbox"
					id={id}
					checked={checked}
				/>
				<label htmlFor={id}>{name}</label>
			</div>
		)
	}
}