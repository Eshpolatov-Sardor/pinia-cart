<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

interface Post {
  id: number;
  title: string;
  url: string;
}

const store = useCounterStore();
const posts = ref<Post[]>([
  {
    id: 1,
    title: 'Magazin 1',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSHiu9PwPaAh_lZbNiQaaqaJ4jzy9LsW5ng&s'
  },
  {
    id: 2,
    title: 'Magazin 2',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfbDp22IASwnbQr_ehSFEKLQVETHTsy4tvg&s'
  },
  {
    id: 3,
    title: 'Magazin 3',
    url: 'https://frankfurt.apollo.olxcdn.com/v1/files/7njw7t3ot2r02-UZ/image;s=1280x996'
  },
  {
    id: 4,
    title: 'Magazin 4',
    url: 'https://frankfurt.apollo.olxcdn.com/v1/files/xofinem8ns3p3-UZ/image;s=960x960'
  },
  {
    id: 5,
    title: 'Magazin 5',
    url: 'https://frankfurt.apollo.olxcdn.com/v1/files/pxn3j9adoq5h1-UZ/image;s=1632x918'
  },
  {
    id: 6,
    title: 'Magazin 6',
    url: 'https://shoptextile.uz/image/cache/catalog/image/cache/catalog/product/ST1386/ST1386_1-1000x1000.webp'
  },
  {
    id: 7,
    title: 'Magazin 7',
    url: 'https://shoptextile.uz/image/cache/catalog/image/cache/catalog/product/ST1384/ST1384_1-1000x1000.webp'
  },
  {
    id: 8,
    title: 'Magazin 8',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSHiu9PwPaAh_lZbNiQaaqaJ4jzy9LsW5ng&s'
  }
]);

function submit(post: Post) {
  store.Cart(post);
}
function deleteItem(index: number) {
  store.cart.splice(index, 1);
}
</script>

<template>
  <div class="template">
    <ul style="display: flex; flex-wrap: wrap; gap: 16px; width: 100%; justify-content: center; padding: 25px;">
      <li v-for="post in posts" :key="post.id" style="list-style-type: none; border: 1px solid black; text-align: center; border-radius: 20px;">
        <img :src="post.url" :alt="post.title" width="325" height="300" style="border-radius: 20px;" />
        <div style="display: flex; align-items: center; justify-content: space-evenly;">
          <p style="padding: 10px;">{{ post.title }}</p>
          <button type="button" @click="submit(post)" style="border: none; cursor: pointer;">
            <img style="width: 50px;" src="https://files.glotr.uz/company/000/004/115/products/2021/02/10/2021-02-10-15-06-05-848247-59f441b39550b56897ead0f058e84de8.jpg?_=ozauc" alt="karzinka">
          </button>
        </div>
      </li>
    </ul>

    <main>
      <h2>Cart</h2>
      <ul style="display: flex; flex-wrap: wrap; padding: 0 0 25px 0; gap:16px;">
        <li v-for="(item, index) in store.cart" :key="item.id" style="list-style-type: none; width: 325px; display: flex;justify-content: space-between; flex-direction: column; border: 1px solid black; text-align: center; border-radius: 20px;">
          <img :src="item.url" :alt="item.title" width="100%" height="300" style="margin-right: 10px; border-radius: 20px;" />
          <span style="text-align: center; display: flex; justify-content: space-evenly;padding: 10px; align-items: center;">{{ item.title }} <button @click="deleteItem(index)" style="padding: 10px; background-color: red; color: aliceblue; border: none; border-radius: 10px;">delete</button></span>
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
