<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title"/>
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽ </span>

    <ProductColor :color-value="colorValue" :product-color="product" :class-ul="'colors--black'"/>

  </li>
</template>

<script>
import ProductColor from './ProductColor'

export default {
  components: {ProductColor},
  props: ['product', 'colorValue'],
}
</script>
