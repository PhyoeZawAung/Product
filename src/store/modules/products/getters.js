export const getProduct = (state) => (id) => {
    let data = state.products.filter((data) => data.id == id);
    return data
}
export const getProducts = state => {
    return state.products;
}

