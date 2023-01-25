import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {

        products: [
            { id: 1, title: "product 1", price: 30, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 2, title: "product 2", price: 40, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 3, title: "product 3", price: 50, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 4, title: "product 4", price: 60, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 5, title: "product 1", price: 30, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 6, title: "product 2", price: 40, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 7, title: "product 3", price: 50, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
            { id: 8, title: "product 4", price: 60, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia, nemo harum in, illo accusantium repellendus iure, aut itaque cumque quae saepe omnis beatae eligendi deleniti aspernatur! Eos, accusantium molestiae." },
        ],
        cart: [],
        notification:[],

    },
    getters: {
        getProducts: state => {
            return state.products;
        },
        getCarts: state => {
            let data = [];
            for (let i = 0; i < state.cart.length; i++) {
                let product = state.products.filter((data) => data.id == state.cart[i].productId)

                let cartData = { ...product, quantity: state.cart[i].quantity }
                data.push(cartData)
            }
            return data;
        },
        getCartCount: state => {
            return state.cart.length;
        },
        getProduct: (state) => (id) => {
            let data = state.products.filter((data) => data.id == id);
            console.log(data)
            return data
        }

    },
    mutations: {
        ADD_TO_CART(state, { id, quantity }) {
            if (state.cart.length == 0) {
                state.cart.push({ productId: id, quantity: quantity });
                return;
            }
            // i want to fix this 
            if (state.cart.find((data) => data.productId == id)) {
                let index = state.cart.findIndex((data) => data.productId == id)
                state.cart[index].quantity += quantity;
                return;
            }
            state.cart.push({ productId: id, quantity: quantity });
            notification.push({title:`Cart Added`,type:'success'}) 
        },
        REOMVE_FROM_CART(state, id) {
            state.cart = state.cart.filter((data) => data.productId != id);
        },
        CLEAR_CART(state) {
            state.cart = [];
        }
    },
    actions: {
        addToCart({ commit }, { id, quantity }) {
            commit('ADD_TO_CART', { id, quantity })
        },
        removeCart({ commit }, id) {
            commit('REOMVE_FROM_CART', id)
        },
        clearCart({ commit }) {
            commit('CLEAR_CART');
        }
    }
});

export default store;