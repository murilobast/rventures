import React, { Component, PropTypes } from 'react'
import cartStl from '../styles/cart.styl'

export default class Cart extends Component {
	static propTypes = {
		cartItems: PropTypes.array,
		cartTotal: PropTypes.string,
		removeFromCart: PropTypes.func,
		isOpen: PropTypes.bool
	}

	render() {
		const { cartItems, cartTotal, removeFromCart, isOpen } = this.props
		let className = isOpen ? 'cart is-open' : 'cart'

		if (!cartItems.length) 
			return <div className={ className }>
				<div className="cart__content">
					<p className="cart__text">O seu carrinho está vazio :(</p>
				</div>
			</div>

		return <div className={ className }>
			<div className="cart__content">
				<div className="cart__title">
					<h3><b>Total</b>  ${ cartTotal }</h3>
				</div>
				<ul className="cart__items">
					{cartItems.map((item, i) => 
						<li className="cart__item" key={ `crt-${i}` }>
							<div className="cart__image">
								<button
									className="cart__delete fa fa-trash-o"
									onClick={ () => removeFromCart(item, 1)}
								/>
								<img src={ item.image }/>
								<span className="cart__name">{ item.title }</span>
								<span className="cart__amount">{ item.amount }</span>
							</div>
							<div className="cart__price">R$ { item.price.toFixed(2).replace('.', ',') }</div>
						</li>
					)}
				</ul>
			</div>
		</div>
	}
}