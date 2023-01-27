
export const addToCart = ({ commit, dispatch }, { id, quantity }) => {
    console.log("Add to cart.");
    
    commit('ADD_TO_CART', { id, quantity })

    dispatch('addNotification', {
        message: "Product add to Cart",
        type: 'success'
    })
}
export const removeCart = ({ commit, dispatch }, id) => {
    commit('REOMVE_FROM_CART', id);
    dispatch('addNotification', {
        message: 'Remove product from cart',
        type: "warning"
    })
}
export const clearCart = ({ commit, dispatch,getters }) => {
    
    if(getters.getCartCount == 0){
        dispatch('addNotification', {
            message: 'Card Already Clear',
            type: "danger"
        })  
    }
    else{
        commit('CLEAR_CART');
        dispatch('addNotification', {
            message: 'Clear All the Cart',
            type: "primary"
        })
    } 
}
export const getCartsFromStorage = ({ commit }) => {
    let carts = JSON.parse(localStorage.getItem('carts'));
    commit('GET_CART_FROM_STORAGE', carts)
}