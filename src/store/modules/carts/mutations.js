export const ADD_TO_CART = (state, { id, quantity }) => {
    console.log("Add to cart mutation")
    if (state.cart.length == 0) {
        state.cart.push({ productId: id, quantity: quantity });
        localStorage.setItem("carts", JSON.stringify(state.cart));
        console.log("card empty");
        return;
    }
    // i want to fix this 

    // if (state.cart.find((data) => data.productId == id)) {
    //     let index = state.cart.findIndex((data) => data.productId == id)
    //     state.cart[index].quantity += quantity;
    //     localStorage.setItem("carts", JSON.stringify(state.cart));
    //     return;
    // }


    let data = state.cart.find((data)=>data.productId == id);
    if(data){ data.quantity += quantity; 
        console.log("already exists");
        return;}


    state.cart.push({ productId: id, quantity: quantity });
    console.log("Car add");
    localStorage.setItem("carts", JSON.stringify(state.cart));

}
export const REOMVE_FROM_CART = (state, id) => {
    state.cart = state.cart.filter((data) => data.productId != id);
    localStorage.setItem("carts", JSON.stringify(state.cart));
}
export const CLEAR_CART = (state,) => {
    state.cart = [];
    localStorage.clear();
}
export const GET_CART_FROM_STORAGE = (state, carts) => {
    if (carts == null) {
        return;
    }
    state.cart = carts;
}