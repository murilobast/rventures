import React, { Component, PropTypes } from 'react'
import filterStl from '../styles/filter.styl'
// Local imports
import ProductFilterItem from './ProductFilterItem'

let wait = true

export default class ProductFilter extends Component {
	static propTypes = {
		filterBy: PropTypes.func,
		filter: PropTypes.array
	}

	render() {
		const { filter, filterBy } = this.props

		return (
			<div className="filter">
				<div className="filter__content">
					<h3 className="filter__title">Chuteiras HyperVenom</h3>
					{filter.map((props) => (
						<ProductFilterItem
							key={props.filterType}
							{...props}
							onChangeHanlder={(filterType, filter) => filterBy(filterType, filter)}
						/>
					))}
					<a href="#" className="filter__more button">Todos os produtos</a>
				</div>
			</div>
		)
	}
}