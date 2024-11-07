<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const url = ref('');
</script>

<template>
  <div class="template">
    <div style="display: flex; justify-content: center; align-items: center;">
      <div style="width: 75%; margin-left: 5%;">
        <input v-model="url" type="text" placeholder="rasm link" style="padding: 5px; border: 1px solid green; width: 77%;">
        <button @click="store.imgSubmit(url)" type="submit" style="padding: 5px; background-color: green; color: wheat; cursor: pointer;">Add Toto</button>
      </div>
    </div>
    
    <ul style="display: flex; flex-wrap: wrap; gap: 16px; width: 100%; justify-content: center; padding: 25px;">
      <li v-for="post in store.posts" :key="post.id" style="list-style-type: none; border: 1px solid black; text-align: center; border-radius: 20px;">
        <img @click="store.openModal(post)" :src="post.url" :alt="post.title" width="325" height="300" style="border-radius: 20px; cursor: pointer;" />
        <div style="display: flex; align-items: center; justify-content: space-evenly;">
          <p style="padding: 10px;">{{ post.description }}</p>
      
        </div>
      </li>
    </ul>

    <div v-if="store.isModalOpen" class="modal-overlay" @click="store.closeModal">
      <div class="modal-content" @click.stop>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
          <h3>{{ store.selectedPost?.title }}</h3>
          <button @click="store.closeModal" style="margin-top: 10px; padding: 10px; cursor: pointer; background-color: gray; color: white; border: none; border-radius: 10px;">X</button>
        </div>
        <img :src="store.selectedPost?.url" :alt="store.selectedPost?.title" width="325" height="300" style="border-radius: 20px;" />
        <p>{{ store.selectedPost?.description }}</p>
        <p><strong>Price:</strong> ${{ store.selectedPost?.price }}</p>
      </div>
    </div>
  </div>
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
