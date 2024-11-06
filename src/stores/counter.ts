import { ref } from 'vue';
import { defineStore } from 'pinia';
interface Props{
  id: number; 
  title: string; 
  url: string
}
export const useCounterStore = defineStore('counter', () => {
  const cart = ref<Props[]>([]);

  function Cart(post: Props) {
    cart.value.push(post);
  }


  return {cart, Cart };
});
