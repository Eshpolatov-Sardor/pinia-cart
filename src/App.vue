<script setup lang="ts">
import {ref, computed} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter';

const cartItemCount = computed(() => store.cart.length);
const store = useCounterStore()

</script>

<template>
      <header style="display: flex; justify-content: center;">
        <nav style="display: flex; text-align: center;  justify-content: space-between; padding: 24px 0 0 0; width: 250px; align-items: center;">
          <RouterLink to="/" style="display: flex; text-decoration: none; color: blue; font-size: 25px;">Home</RouterLink>
          <RouterLink to="/about" style="display: flex; text-decoration: none; color: blue; font-size: 25px;"><img style="width: 50px;" src="https://thumbs.dreamstime.com/b/shop-cart-icon-buy-symbol-shopping-basket-sign-%C3%A2%E2%82%AC-vector-142876366.jpg" alt=""> {{ cartItemCount   }}</RouterLink>
        </nav>
      </header>

  <RouterView />
</template>

<style scoped>
</style>
