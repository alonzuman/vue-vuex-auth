<template>
  <li class="product">
    <h1>{{product.name}}</h1>
    <span>${{product.price}}</span>
    <br />
    <button v-on:click="addToCart(product.id)" class="secondary-button">Add to Cart</button>
  </li>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  methods: {
    addToCart: function(id) {
      this.$store.dispatch("addToCart", id);
    }
  }
};
</script>

<style>
li h1 {
  font-size: 16px;
}

.product {
  border: var(--border);
  border-radius: 1rem;
  margin: 8px 0px;
  padding: 8px 0px;
  background-color: var(--light);
}
</style>