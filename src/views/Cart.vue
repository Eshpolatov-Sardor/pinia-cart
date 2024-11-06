<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

interface Post {
  id: number;
  title: string;
  url: string;
  description: string;
  price: number;
}

const store = useCounterStore()

function deleteItem(index: number) {
  store.cart.splice(index, 1);
}
</script>

<template>
    <main>
      <ul style="display: flex; flex-wrap: wrap; justify-content: center; padding: 10px 0 25px 0; gap:16px;">
        <li v-for="(item, index) in store.cart" :key="item.id" style="list-style-type: none; width: 325px; display: flex; justify-content: space-between; flex-direction: column; border: 1px solid black; text-align: center; border-radius: 20px;">
          <img :src="item.url" :alt="item.title" width="100%" height="300" style="border-radius: 20px;" />
          <span style="text-align: center; display: flex; justify-content: space-evenly; padding: 10px; align-items: center;">
            {{ item.description }}
            <button @click="deleteItem(index)" style="padding: 10px; cursor: pointer; background-color: red; color: aliceblue; border: none; border-radius: 10px;">delete</button>
          </span>
        </li>
      </ul>
    </main>
</template>

<style scoped>
h2 {
  text-align: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
