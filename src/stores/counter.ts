import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Post {
  id: number;
  title: string;
  url: string;
  description: string;
  price: number;
}

export const useCounterStore = defineStore('counter', () => {
  const cart = ref<Post[]>([]);
  const posts = ref<Post[]>([
    {
      id: 1,
      title: 'Magazin 1',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSHiu9PwPaAh_lZbNiQaaqaJ4jzy9LsW5ng&s',
      description: '1 High-quality product.',
      price: 100
    },
    {
      id: 2,
      title: 'Magazin 2',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfbDp22IASwnbQr_ehSFEKLQVETHTsy4tvg&s',
      description: '2 High-quality product.',
      price: 150
    },
    {
      id: 3,
      title: 'Magazin 3',
      url: 'https://frankfurt.apollo.olxcdn.com/v1/files/7njw7t3ot2r02-UZ/image;s=1280x996',
      description: '3 High-quality product.',
      price: 200
    },
    {
      id: 4,
      title: 'Magazin 4',
      url: 'https://frankfurt.apollo.olxcdn.com/v1/files/xofinem8ns3p3-UZ/image;s=960x960',
      description: '4 High-quality product.',
      price: 250
    }
  ]);
  
  const selectedPost = ref<Post | null>(null);
  const isModalOpen = ref(false);

  function Cart(post: Post) {
    cart.value.push(post);
  }

  function imgSubmit(url: string) {
    if (url) {
      const newPost: Post = {
        id: posts.value.length + 1,
        title: ` ${posts.value.length + 1} Magazin`,
        url,
        description: `${posts.value.length + 1} High-quality product.`,
        price: 100 + posts.value.length * 50
      };
      posts.value.push(newPost);
    }
    
  }

  function openModal(post: Post) {
    selectedPost.value = post;
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function deleteItem(index: number) {
    cart.value.splice(index, 1);
  }

  return {
    cart,
    posts,
    selectedPost,
    isModalOpen,
    Cart,
    imgSubmit,
    openModal,
    closeModal,
    deleteItem
  };
});
