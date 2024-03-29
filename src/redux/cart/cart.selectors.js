import {createSelector} from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItems)=> acc + cartItems.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItems)=> acc + (cartItems.price * cartItems.quantity), 0 )
)