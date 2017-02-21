import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
// Local imports
import personalizeImage from '../../assets/images/personalize.jpg'

export default class ProductListSliderItem extends Component {
	static propTypes = {
		product: PropTypes.object,
		addToCart: PropTypes.func
	}

	render() {
		const { product, addToCart } = this.props
		const highTop = product['high-top'] ? 'Cano Alto' : 'Cano baixo'
		const installments = `ou ${product.installments.number}X de ${product.installments.value.toFixed(2).replace('.', ',')} sem juros`

		return (
			<div className='catalog__item'>
				<img src={product.image} alt={product.title} title={product.title} className="catalog__image" />
				<div className="catalog__personalize">
					<img src={personalizeImage} alt="Personalize" title="Personalize" />
					<span>Personalize</span>
				</div>
				<div className="catalog__info">
					<p className="catalog__name">{product.title}</p>
					<p className="catalog__high-top">{highTop}</p>
					<p className="catalog__price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
					<p className="catalog__installments">{installments}</p>
				</div>
				<button
					className="catalog__buy button button--inverted"
					onClick={() => addToCart(product, 1)}
				>
					Comprar
				</button>
			</div>
		)
	}
}