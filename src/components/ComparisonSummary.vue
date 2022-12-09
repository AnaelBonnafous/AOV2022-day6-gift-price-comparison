<script setup>
import { toRefs, computed } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const { selectedProducts } = useItemComparison()

const productsSortedByPrice = computed(() =>
  selectedProducts.value.sort((a, b) => a.price - b.price)
)

const cheaper = computed(() => productsSortedByPrice.value[0])
const mostExpensive = computed(() => productsSortedByPrice.value[1])

const diff = computed(() =>
  Math.round(mostExpensive.value.price / cheaper.value.price)
)
</script>

<template>
  <p class="mx-5 text-center">
    <template v-if="cheaper.id === mostExpensive.id">
      These are the same items
    </template>
    <template v-else>
      You can get <strong>{{ diff }}</strong> <em>{{ cheaper.title }}</em> for
      about the same price as a single <em>{{ mostExpensive.title }}</em>
    </template>
  </p>
</template>
