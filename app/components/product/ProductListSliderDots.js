import React, { PureComponent, PropTypes } from 'react'
import dotsStl from '../../styles/dots.styl'

export default class ProductListSlider extends PureComponent {
		static propTypes = {
		slideCount: PropTypes.number,
		currentSlide: PropTypes.number,
		currentSlide: PropTypes.number,
		goToSlide: PropTypes.func
	}

	render() {
		const { slideCount, slidesToScroll, currentSlide, goToSlide } = this.props
		const indexes = this.getIndexes(slideCount, slidesToScroll)

		return (
			<ul className="dots">
				{indexes.map((index) => (
					<li className="dots__dot" key={index}>
						<button
							className={this.getClassName(currentSlide === index)}
							onClick={() => goToSlide(index)}
						>
							<span className="dots__inner"></span>
						</button>
					</li>
				))}
			</ul>
		)
	}

	getIndexes(count, inc) {
		let arr = []

		for (var i = 0; i < count; i += inc) {
			arr.push(i);
		}

		return arr
	}

	getClassName(active) {
		let className = 'dots__button'

		if (active)
			className += ' dots__button--active'

		return className
	}
}