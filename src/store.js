import { reactive } from "vue";
export const store = reactive({
    api_url: 'https://api.adviceslip.com/advice',
    advice:'',
    adviceID:'',

    loading: false,
    isDisabled: false,
  })