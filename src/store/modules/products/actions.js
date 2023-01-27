import product from "@/Apis/product";
export const getProductAPI = ({ commit }) => {
    product.all().then(response => {
            console.log(response.data)
            commit('GET_PRODUCT_API', response.data);
        })
        .catch(error => {
            console.log(error)
        })
}