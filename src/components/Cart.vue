<template>
  <div class="cart-container">
    <ul class="cart-products">
      <div class="cart-header">
        <button class="close-button" v-on:click="closeCart">Close</button>
        <h1>Cart</h1>
        <div class="close-button"></div>
      </div>
      <p v-if="products.length === 0">Your cart is empty</p>
      <CartProduct v-for="product in products" :product="product" v-bind:key="product.id" />
    </ul>
  </div>
</template>

<script>
import CartProduct from "./CartProduct";

export default {
  name: "Cart",
  components: { CartProduct },
  props: ["closeCart"],
  computed: {
    products() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style>
.cart-container {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  margin: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
  border: var(--border);
}

.cart-products {
  display: block;
}

.cart-header {
  display: flex;
  justify-content: space-evenly;
}

.close-button {
  width: 50px;
  background-color: transparent;
  border: none;
  font-size: 12px;
}
</style>