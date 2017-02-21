import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as allActions from '../actions'
import Cart from '../components/Cart'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'
import Banner from '../components/ui/Banner'

@connect(state => ({
	bestSellers: state.rventures.bestSellers,
	releases: state.rventures.releases,
	cartItems: state.rventures.cartItems,
	cartTotal: state.rventures.cartTotal,
	isOpen: state.rventures.isOpen,
	loading: state.rventures.loading,
	filter: state.rventures.filter,
}))

export default class Home extends Component {
	static propTypes = {
		bestSellers: PropTypes.array,
		releases: PropTypes.array,
		cartItems: PropTypes.array,
		cartTotal: PropTypes.string,
		filter: PropTypes.array,
		isOpen: PropTypes.bool,
		loading: PropTypes.bool,
		dispatch: PropTypes.func
	}

	render() {
		const {
			bestSellers,
			releases,
			cartItems,
			cartTotal,
			filter,
			isOpen,
			loading,
			dispatch
		} = this.props

		const actions = bindActionCreators(allActions, dispatch)

		return <div>
			<Cart
				cartItems={cartItems}
				removeFromCart={actions.removeFromCart}
				isOpen={isOpen}
				cartTotal={cartTotal}
			/>
			<Banner/>
			<ProductFilter filterBy={actions.filterBy} filter={filter} />
			<ProductList
				loading={loading}
				bestSellers={bestSellers}
				releases={releases}
				addToCart={actions.addToCart}
				fetchProducts={actions.fetchProducts}
				filter={filter}
			/>
		</div>
	}
}