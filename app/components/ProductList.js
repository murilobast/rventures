import React, { Component, PropTypes } from 'react'
import catalogStl from '../styles/catalog.styl'
import ProductListSlider from './product/ProductListSlider'
import Loader from './ui/Loader'

export default class ProductList extends Component {
	static propTypes = {
		bestSellers: PropTypes.array,
		releases: PropTypes.array,
		filter: PropTypes.array,
		loading: PropTypes.bool
	}

	componentDidMount() {
		this.props.fetchProducts()
	}

	render() {
		const { bestSellers, releases, addToCart, loading, filter } = this.props

		if (loading)
			return <Loader />

		return <section className="catalog">
			<div className="catalog__content">
				<h3 className="catalog__title">Mais vendidos</h3>
				<ProductListSlider
					products={bestSellers}
					addToCart={addToCart}
					filter={filter}
				/>
			</div>
			<div className="catalog__content">
				<h3 className="catalog__title">Lançamentos</h3>
				<ProductListSlider
					products={releases}
					addToCart={addToCart}
					filter={filter}
				/>
			</div>
		</section>
	}
}