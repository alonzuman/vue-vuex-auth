<template>
  <div class="cart-product-container">
    <h4>{{product.name}}</h4>
    <p>${{product.price}}</p>
    <p>qty: {{product.qty}}</p>
    <button v-on:click="removeFromCart(product.id)" class="primary-button">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: ["product"],
  methods: {
    removeFromCart: function(id) {
      this.$store.dispatch("removeFromCart", id);
    }
  }
};
</script>

<style>
.cart-product-container {
  margin-top: 1rem;
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
}
</style>