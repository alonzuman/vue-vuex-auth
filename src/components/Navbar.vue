<template>
  <nav>
    <ul>
      <li class="nav-item">Logo</li>
      <button v-on:click="toggleCart" class="cart-button">Cart ({{cart.length}})</button>
      <Cart :closeCart="toggleCart" v-if="openCart" />
    </ul>
  </nav>
</template>

<script>
import Cart from "./Cart";

export default {
  name: "Navbar",
  components: { Cart },
  data() {
    return {
      openCart: false
    };
  },
  methods: {
    toggleCart: function() {
      return (this.openCart = !this.openCart);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style>
nav {
  padding: 8px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: var(--border);
  background-color: white;
  box-shadow: 0px 1px 10px #00000025;
}

nav ul {
  display: flex;
  justify-content: space-evenly;
}

.cart-button {
  background-color: transparent;
  border: none;
  font-size: 14px;
}
</style>