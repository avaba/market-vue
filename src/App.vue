<template>
  <component :is="currentPageCompoment" :page-params="currentPageParams" />
</template>

<script>
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import eventBase from './eventBase';

const routes = {
  main: 'MainPage',
  product: 'ProductPage'
};

export default {
  data () {
    return {
      currentPage: 'main',
      currentPageParams: {}
    };
  },
  components: {NotFoundPage, MainPage, ProductPage},
  methods: {
    goToPage (pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    }
  },
  computed: {
    currentPageCompoment() {
      return routes[this.currentPage] || 'NotFoundPage'
    }
  },
  created () {
    eventBase.$on('goToPage', (pageName, pageParams) => {
      this.goToPage(pageName, pageParams)
    })
  }
};
</script>
