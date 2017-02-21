/**
 *
 * Action builder
 *
 */
import * as types from './types'

// Cart actions
export function toggleCart() {
	return {
		type: types.TOGGLE_CART
	}
}

export function addToCart(product, amount) {
	return {
		type: types.ADD_TO_CART,
		product, // Product object
		amount, // Amount of the same product to be added
	}
}

export function removeFromCart(product, amount) {
	return {
		type: types.REMOVE_FROM_CART,
		product, // Product object
		amount, // Amount of the same product to be added
	}
}

// Filter actions
export function filterBy(filterType, value) {
	return {
		type: types.FILTER_BY,
		filterType, // Type of filter
		value // Checked (boolean)
	}
}

// Product actions
function getProducts({ bestSellers, releases }) {
	return {
		type: types.GET_PRODUCTS,
		bestSellers, // List of best sellers products
		releases // list of newest releases
	}
}

export function fetchProducts() {
	const restURL = 'http://www.raphaelfabeni.com.br/rv/data.json'

	return  function (dispatch) {
		return fetch(restURL)
			.then((res) => res.json())
			.then((data) => {
				const parsedData = {
					bestSellers: data['best-sellers'],
					releases: data.releases
				}

				dispatch(getProducts(parsedData))
			})
	}
}