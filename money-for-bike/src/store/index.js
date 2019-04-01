import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations /*, userMutations*/} from './mutations';
import { productActions, manufacturerActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
    currentUser: null,
  },
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations/*, userMutations*/),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions),
});