<script setup>
import { ref, watch } from 'vue'

import { useItemComparison } from '../composables/itemComparison'
const { products, selectedProducts } = useItemComparison()

const { number } = defineProps(['number'])

const selected = ref()
watch(selected, value => (selectedProducts.value[number] = value))
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="product in products" :value="product">
      {{ product.title }}: {{ product.price }}$
    </option>
  </select>
</template>
