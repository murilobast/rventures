import React, { PureComponent, PropTypes } from 'react'
import Carousel from 'nuka-carousel'
// Local imports
import ProductListSliderDots from './ProductListSliderDots'
import ProductListSliderItem from './ProductListSliderItem'

let wait = false

const options = {
	dragging: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	decorators: [{
		component: ProductListSliderDots,
		position: 'BottomCenter'
	}]
}

export default class ProductListSlider extends PureComponent {
	static propTypes = {
		products: PropTypes.array,
		filter: PropTypes.array,
		addToCart: PropTypes.func
	}

	constructor(props) {
		super(props)

		this.state = {
			products: props.products
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if (this.props.filter !== nextProps.filter)
			this.filterItems()
	}

	filterItems() {
		if (this.chekAllfalse()) {
			let filtered = this.props.products.filter((product) => {
				let show = false

				this.props.filter.forEach((filterItem) => {
					if (filterItem.checked)
						switch (filterItem.filterType) {
							case 'canoBaixo':
								if (product['high-top'] === false)
									show = true

								return

							case 'canoAlto':
								if (product['high-top'] === true)
									show = true

								return

							case 'futebolSociety':
								if (product.category === 'society')
									show = true

								return

							case 'futebolCampo':
								if (product.category === 'campo')
									show = true

								return
						}
				})

				return show
			})
			
			this.setState({ products: filtered })

			return
		}

		this.setState({ products: this.props.products })
	}

	chekAllfalse() {
		let checked = false

		this.props.filter.forEach((filterItem) => {
			if (filterItem.checked) {
				checked = true
			}
		})

		return checked
	}

	getSlidesToShow() {
		const viewPortWidth = window.innerWidth

		if (viewPortWidth > 1200)
			return 4

		else if (viewPortWidth > 960)
			return 3

		else if (viewPortWidth > 640)
			return 2

		else
			return 1
	}

	render() {
		const { addToCart } = this.props
		const { products } = this.state
		const slidesToShow = this.getSlidesToShow()
		
		options.slidesToShow = slidesToShow
		options.slidesToScroll = slidesToShow

		return (
			<Carousel {...options}>
				{products.map((product, i) => (
					<ProductListSliderItem
						/*
							A utilização do indice (i), não é recomendada,
							mas como não temos nenhum "id" unico no objeto "product",
							estou utilizando um prefixo concatenado com o indice.
						*/
						key={'pdct-' + i}
						product={product}
						addToCart={addToCart}
					/>
				))}
			</Carousel>
		)
	}
}