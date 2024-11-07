import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2'

interface Post {
  id: number;
  title: string;
  url: string;
  description: string;
  price: number;
}

export const useCounterStore = defineStore('counter', () => {
  const cart = ref<Post[]>([]);
  const posts = ref<Post[]>([]);
  const selectedPost = ref<Post | null>(null);
  const isModalOpen = ref(false);

  async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      if (response.ok) {
        const data = await response.json();
        posts.value = data;
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  onMounted(() => {
    fetchPosts();
  });

  function Cart(post: Post) {
    cart.value.push(post);
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      icon: 'success',
      title: 'Tastiqlandi',
      text: 'sotib olmoqchi bulgan mahsulotingiz savatga tushdi',
    });
  }

  function imgSubmit(url: string) {
    if (url) {
      const newPost: Post = {
        id: posts.value.length + 1,
        title: `${posts.value.length + 1} Magazin`,
        url,
        description: `${posts.value.length + 1} High-quality product.`,
        price: 100 + posts.value.length * 50,
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
    selectedPost.value = null;
  }

  function deleteItem(index: number) {
    cart.value.splice(index, 1);
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      icon: 'success',
      title: 'O\'chdi',
      text: 'Mahsulotingiz savatdan olib tashlandi',
    });
  }

  function allcelear() {
    cart.value = [];
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
    deleteItem,
    allcelear,
  };
});
