import React, { Component, PropTypes } from 'react'
// Local imports
import logoImage from '../../assets/images/nike-logo.png'
import cartImage from '../../assets/images/cart.png'
import headerStl from '../../styles/header.styl'

export default class Header extends Component {
	static propTypes = {
		cartLength: PropTypes.number,
		toggleCart: PropTypes.func
	}

	toggleNavbar() {
		this.nav.classList.toggle('m--show')
	}

	render() {
		const { cartLength, toggleCart } = this.props
		// Não exibe o contador se não houverem itens no carrinho
		const cartCounter = cartLength ? <span className="header__counter">{cartLength}</span> : null

		return (
			<header className="header">
				<div className="header__content">
					<a
						role="button"
						className="header__menu fa fa-bars"
						onClick={() => this.toggleNavbar()}
						title="Menu"
					/>
					<div className="header__brand">
						<h3 className="header__name">
							<img src={logoImage} alt="Nike" title="Nike" className="header__logo" />
						</h3>
					</div>
					<ul className="header__nav" ref={(nav) => this.nav = nav}>
						<li className="header__link">
							<a href="#">Masculino</a>
						</li>
						<li className="header__link">
							<a href="#">Feminino</a>
						</li>
						<li className="header__link">
							<a href="#">Menino</a>
						</li>
						<li className="header__link">
							<a href="#">Menina</a>
						</li>
					</ul>
					<button className="header__cart" onClick={() => toggleCart()}>
						<img src={cartImage}
							alt="Carrinho de compras"
							title="Carrinho de compras"
						/>
						{cartCounter}
					</button>	
				</div>
			</header>
		)
	}
}