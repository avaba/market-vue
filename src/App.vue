<template>

  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>
    <div class="content__catalog">

      <ProductFilter :price-from.sync="filterPriceFrom"
                     :price-to.sync="filterPriceTo"
                     :category-id.sync="filterCategoryId"
                     :colors-filter.sync="filterColors"
                     :product-color="colors"
                     :color-value="colorValue"/>

      <section class="catalog">
        <ProductList
            :products="products"
            :color-value="colorValue"/>
        <BasePagination
            v-model="page"
            :count="countProducts"
            :per-page="productsPerPage"
        />
      </section>
    </div>

  </main>
</template>

<script>
import products from './data/products'
import ProductList from './components/ProductList'
import BasePagination from './components/BasePagination'
import ProductFilter from './components/ProductFilter'
import colors from './data/colors'

export default {
  name: 'App',
  components: {ProductFilter, ProductList, BasePagination},
  data () {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColors: '',

      colors,
      page: 1,
      productsPerPage: 3,
    }
  },
  computed: {
    filteredProducts () {
      let filterProducts = products

      if (this.filterPriceFrom > 0) {
        filterProducts = filterProducts.filter(product => product.price > this.filterPriceFrom)
      }
      if (this.filterPriceTo > 0) {
        filterProducts = filterProducts.filter(product => product.price < this.filterPriceTo)
      }
      if (this.filterCategoryId) {
        filterProducts = filterProducts.filter(product => product.categoryId === this.filterCategoryId)
      }
      if (this.filterColors) {
        filterProducts = filterProducts.filter(product => product.color.some(color => color === this.filterColors))
      }

      return filterProducts
    },
    products () {
      const offset = (this.page - 1) * this.productsPerPage
      return this.filteredProducts.slice(offset, offset + this.productsPerPage)
    },
    countProducts () {
      return this.filteredProducts.length
    },
  },
  methods: {
    colorValue (color) {
      switch (color) {
        case 'blue':
          return '#73B6EA'
        case 'yellow':
          return '#FFBE15'
        case 'gray':
          return '#939393'
        case 'green':
          return '#8BE000'
        case 'orange':
          return '#FF6B00'
        case 'white':
          return '#FAFAFA'
        case 'black':
          return '#000000'
        default:
          return ''
      }
    }
  }
}
</script>
