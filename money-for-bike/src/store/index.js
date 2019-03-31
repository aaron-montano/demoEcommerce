import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

Vue.use(Vuex);

const manufacturers = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Sony'
  },
  {
    id: 3,
    name: 'Samsung'
  }
]

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
  },
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions),
});