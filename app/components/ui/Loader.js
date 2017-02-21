import React, { PureComponent, PropTypes } from 'react'
// Local imports
import loaderStl from '../../styles/loader.styl'

export default class Loader extends PureComponent {
	render() {
		return (
			<section className="loader">
				<img
					src="http://www.nhacnhoc.com.br/wp-content/themes/nhacnhoc/assets/img/content/loader.gif"
					className="loader__image"
					alt="Carregando..."
					title="Carregando..." />
			</section>
		)
	}
}