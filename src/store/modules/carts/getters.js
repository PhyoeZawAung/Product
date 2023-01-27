import productstate from '../products/state'
export const getCarts = state => {
    let data = [];
    for (let i = 0; i < state.cart.length; i++) {
        let product = productstate.products.filter((data) => data.id == state.cart[i].productId)
        let cartData = { ...product[0], quantity: state.cart[i].quantity }
        data.push(cartData)
    }
    return data;
}
export const getCartCount = state => {
    return state.cart.length;
}