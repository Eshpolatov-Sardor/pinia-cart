<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const gifshow = ref(true);
const allcelar = ref(false);

if (store.cart.length > 0) {
  gifshow.value = false;
  allcelar.value = true
}
</script>

<template>
  <main>
    <ul style="display: flex; flex-wrap: wrap; justify-content: center; padding: 10px 0 25px 0; gap:16px;">
      <li v-for="(item, index) in store.cart" :key="item.id" style="list-style-type: none; width: 325px; display: flex; justify-content: space-between; flex-direction: column; border: 1px solid black; text-align: center; border-radius: 20px;">
        <img :src="item.url" :alt="item.title" width="100%" height="300" style="border-radius: 20px;" />
        <span style="text-align: center; display: flex; justify-content: space-evenly; padding: 10px; align-items: center;">
          {{ item.description }}
          <button @click="store.deleteItem(index)" style="padding: 10px; cursor: pointer; background-color: red; color: aliceblue; border: none; border-radius: 10px;">delete</button>
        </span>
      </li>
    </ul>
    <div v-if="gifshow" style="display: flex; justify-content: center;">
      <img style="width: 45%; height: 100%;" src="https://media1.tenor.com/m/NnKy7U4R0R8AAAAd/dragon-no-prob.gif" alt="">
    </div>
    <button v-if="allcelar" @click="store.allcelar" style="border-radius: 20px; border: none; margin-left: 250px;">
      <h2 style="padding: 10px; color: aqua; background-color: red; border-radius: 20px;">all celar</h2>
    </button>
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
