<template>
  <ul class="colors">
    <li class="colors__item" v-for="color in productColor.color" :key="color">
      <label class="colors__label">
        <input
            class="colors__radio sr-only"
            type="radio"
            :name="productColor.id"
            :value="color"
            @change="emitColor"
            v-model="currentColorsFilter"
        />
        <span class="colors__value" :style="{backgroundColor: colorValue(color)}"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductFilterColor',
  props: ['colorValue', 'productColor', 'colorsFilter'],
  data() {
    return {
      currentColorsFilter: ''
    }
  },
  methods: {
    emitColor() {
      this.$emit('update:colorsFilter', this.currentColorsFilter)
    }
  },
  watch: {
    colorsFilter (value) {
      this.currentColorsFilter = value
    }
  }
}
</script>
