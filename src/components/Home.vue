<template>
  <div class="products">
    <div>
      <h1>Products:</h1>
      <ul class="products-list">
        <Product v-for="product in products" :product="product" v-bind:key="product.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Home",
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
</script>

<style>
li {
  list-style: none;
}

.products {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.products-list {
  min-width: 300px;
}
</style>