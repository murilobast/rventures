/**
 *
 * Reducers definition
 *
 */

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import _, { includes, indexOf } from 'lodash'
import * as types from '../actions/types'


/* Initial state */
const initialState = {
	bestSellers: [],
	releases: [],
	loading: true,
	cartItems: [],
	cartLength: 0,
	cartTotal: '0',
	isOpen: false,
	filter: [
		{
			filterType: 'canoAlto',
			name:'Cano alto',
			checked: false,
			id: 'cano-alto'
		},
		{
			filterType: 'canoBaixo',
			name:'Cano baixo',
			checked: false,
			id: 'cano-baixo'
		},
		{
			filterType: 'futebolCampo',
			name:'Futebol Campo',
			checked: false,
			id: 'futebol-campo'
		},
		{
			filterType: 'futebolSociety',
			name:'Futebol Society',
			checked: false,
			id: 'futebol-society'
		}
	]
}

const rventures = (state = initialState, action) => {
	switch (action.type) {
		/*===========================================
		=            Add to cart reducer            =
		===========================================*/
		case types.ADD_TO_CART:
			let cartItems = [].concat(state.cartItems)
			let product = action.product
			let productIndex = indexOf(cartItems, product)
			let amount = action.amount
			let cartTotal = parseFloat(state.cartTotal)
			let cartLength = state.cartLength

			cartTotal += amount * product.price
			cartTotal = cartTotal.toFixed(2)
			cartLength += amount

			if (productIndex > -1)
				cartItems[productIndex].amount += amount

			else {
				product.amount = amount
				cartItems.push(action.product)
			}

			return {
				...state,
				cartItems,
				cartTotal,
				cartLength
			}

		/*===========================================
		=            Toggle cart reducer           =
		===========================================*/
		case types.TOGGLE_CART:
			let isOpen = state.isOpen

			return {
				...state,
				isOpen: !isOpen
			}

		/*===========================================
		=            Remove from cart reducer       =
		===========================================*/
		case types.REMOVE_FROM_CART:
			let _cartItems = [].concat(state.cartItems)
			let _product = action.product
			let _productIndex = indexOf(_cartItems, _product)
			let _amount = action.amount
			let _cartTotal = parseFloat(state.cartTotal)
			let _cartLength = state.cartLength

			_cartTotal = _cartTotal - (_product.amount * _product.price)
			_cartTotal = _cartTotal.toFixed(2)
			_cartLength -= _amount

			_cartItems.splice(_productIndex, 1)

			return {
				...state,
				cartItems: _cartItems,
				cartTotal:  _cartTotal,
				cartLength: _cartLength
			}


		/*===========================================
		=            Filter by reducer              =
		===========================================*/
		case types.FILTER_BY:
			let filter = [].concat(state.filter)
			let filterItem = _.find(filter, (obj) => {
				return obj.filterType === action.filterType 
			})

			let index = _.indexOf(state.filter, filterItem)

			filter[index].checked = action.value

			return {
				...state,
				filter
			}

		/*===========================================
		=            Get products reducer           =
		===========================================*/
		case types.GET_PRODUCTS:
			return {
				...state,
				loading: false,
				bestSellers: [].concat(...action.bestSellers),
				releases: [].concat(...action.releases),
			}

		/*===============================================================
		=            Default case. Returns the initial store            =
		===============================================================*/
		default:
			return state		
	}
}


const rootReducer = combineReducers({
	rventures,
	routing
})

export default rootReducer