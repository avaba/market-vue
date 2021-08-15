<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#" @click.prevent="goToPage('product', {id: product.id})">
      <img :src="product.image" :alt="product.title"/>
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price | numberFormat }} ₽ </span>

    <ProductColor :color-value="colorValue" :product-color="product" :class-ul="'colors--black'"/>

  </li>
</template>

<script>
import ProductColor from '@/components/ProductColor'
import goToPage from '@/helpers/goToPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: {ProductColor},
  props: ['product', 'colorValue'],
  filters: {
    numberFormat
  },
  methods: {
    goToPage
  },
}
</script>
