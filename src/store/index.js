import Vuex from 'vuex'
import Vue from 'vue'


import state from './state'
import  * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

import product from './modules/products';
import carts from './modules/carts'
Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
    product,
    carts
   }
});

export default store;