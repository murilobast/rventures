import React, { PureComponent, PropTypes } from 'react'
// Local imports
import bannerImage from '../../assets/images/banner.png'
import bannerStl from '../../styles/banner.styl'

export default class Banner extends PureComponent {
	render() {
		return (
			<section className="banner">
				<img src={bannerImage} className="banner__image" alt="Nike finish" title="Nike finish" />
			</section>
		)
	}
}