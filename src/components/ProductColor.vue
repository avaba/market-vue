<template>
  <ul class="colors" :class="classUl">
    <li class="colors__item" v-for="color in productColor.color" :key="color">
      <label class="colors__label">
        <input
            class="colors__radio sr-only"
            type="radio"
            :name="productColor.id"
            :value="color"
        />
        <span class="colors__value" :style="{backgroundColor: colorValue(color)}"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductColor',
  props: ['colorValue', 'productColor', 'classUl'],
}
</script>
