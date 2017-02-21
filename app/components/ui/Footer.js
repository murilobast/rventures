import React, { PureComponent, PropTypes } from 'react'
// Local imports
import footerImage from '../../assets/images/footer.jpg'
import footerStl from '../../styles/footer.styl'

export default class Footer extends PureComponent {
	render() {
		return (
			<section className="footer">
				<img src={footerImage} className="footer__image" alt="Nike finish" title="Nike finish" />
				<div className="footer__content">
					<div className="footer__title">Just do it.</div>
					<a href="#" className="footer__button button">Todos os produtos</a>
				</div>
				<div className="footer__copy">
					<p className="footer__text">Nike Copyright 2017 - all rights reserved</p>
				</div>
			</section>
		)
	}
}