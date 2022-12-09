import { ref } from 'vue'

const products = ref([])
const selectedProducts = ref([])

export const useItemComparison = () => {
  const fetchProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => (products.value = data.products))
  }

  return { products, selectedProducts, fetchProducts }
}
