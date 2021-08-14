<template>
  <ul class="catalog__list">
    <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        :color-value="colorValue"
    />
  </ul>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  props: ['products', 'colorValue'],
  components: {ProductItem},
}
</script>
