<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'

import { useItemComparison } from './composables/itemComparison'

const { fetchProducts, selectedProducts } = useItemComparison()

fetchProducts()
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect number="0" />
      <ItemSelect number="1" />
    </div>
    <ComparisonSummary v-if="selectedProducts.length === 2" />
  </div>
</template>
