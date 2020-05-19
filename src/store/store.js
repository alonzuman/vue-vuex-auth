import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { id: 1, name: "Banana Skin", price: 20 },
      { id: 2, name: "Orange Star", price: 27 },
      { id: 3, name: "Shoe Laces", price: 33 },
      { id: 4, name: "Boots", price: 49 },
      { id: 5, name: "Dragon Skin", price: 25 }
    ],
    cart: (JSON.parse(localStorage.getItem('cart'))) || []
  },
  getters: {},
  mutations: {
    addToCart: (state, payload) => {
      let product = state.products.find(product => product.id === payload);
      product.qty = 1;
      if (!state.cart.includes(product)) {
        state.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(state.cart))
      } else {
        let productToChange = state.cart.find(cartProduct => cartProduct.id === product.id)
        productToChange.qty = productToChange.qty + 1;
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    removeFromCart: (state, payload) => {
      state.cart = state.cart.filter(product => product.id !== payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload);
    },
    removeFromCart: (context, payload) => {
      context.commit('removeFromCart', payload);
    }
  }
})