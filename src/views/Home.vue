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

const store = useCounterStore();
const posts = ref<Post[]>([
  {
    id: 1,
    title: 'Magazin 1',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSHiu9PwPaAh_lZbNiQaaqaJ4jzy9LsW5ng&s',
    description: 'High-quality product 1.',
    price: 100
  },
  {
    id: 2,
    title: 'Magazin 2',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfbDp22IASwnbQr_ehSFEKLQVETHTsy4tvg&s',
    description: 'High-quality product 2.',
    price: 150
  },
  {
    id: 3,
    title: 'Magazin 3',
    url: 'https://frankfurt.apollo.olxcdn.com/v1/files/7njw7t3ot2r02-UZ/image;s=1280x996',
    description: 'High-quality product 3.',
    price: 200
  },
  {
    id: 4,
    title: 'Magazin 4',
    url: 'https://frankfurt.apollo.olxcdn.com/v1/files/xofinem8ns3p3-UZ/image;s=960x960',
    description: 'High-quality product 4.',
    price: 250
  }
]);

const selectedPost = ref<Post | null>(null);
const isModalOpen = ref(false);

function submit(post: Post) {
  store.Cart(post);
}

function openModal(post: Post) {
  selectedPost.value = post;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <div class="template">
    <ul style="display: flex; flex-wrap: wrap; gap: 16px; width: 100%; justify-content: center; padding: 25px;">
      <li v-for="post in posts" :key="post.id" style="list-style-type: none;  border: 1px solid black; text-align: center; border-radius: 20px;">
        <img @click="openModal(post)" :src="post.url" :alt="post.title" width="325" height="300" style="border-radius: 20px; cursor: pointer;" />
        <div style="display: flex; align-items: center; justify-content: space-evenly;">
          <p style="padding: 10px;">{{ post.description }}</p>
          <button type="button" @click="submit(post)" style="border: none; cursor: pointer;">
            <img style="width: 50px;" src="https://thumbs.dreamstime.com/b/shop-cart-icon-buy-symbol-shopping-basket-sign-%C3%A2%E2%82%AC-vector-142876366.jpg" alt="karzinka">
          </button>
        </div>
      </li>
    </ul>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
          <h3>{{ selectedPost?.title }}</h3>
          <button @click="closeModal" style="margin-top: 10px; padding: 10px; cursor: pointer; background-color: gray; color: white; border: none; border-radius: 10px;">X</button>
        </div> <img :src="selectedPost?.url" :alt="selectedPost?.title" width="325" height="300" style="border-radius: 20px;" />
        <p>{{ selectedPost?.description }}</p>
        <p><strong>Price:</strong> ${{ selectedPost?.price }}</p>
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
