export const getProduct = (state) => (id) => {
    let data = state.products.filter((data) => data.id == id);
    return data
}
export const getProducts = state => {
    return state.products;
}

// export const getProductsaCategory = state =>{
//     let categories = [];
    
//         state.products.forEach(product => {
//             if(categories.length ==0 )
//         });
  
// }