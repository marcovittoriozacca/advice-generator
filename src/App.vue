<script>
import axios from 'axios';
import { store } from './store';

import AdviceBox from './components/AdviceBox.vue';
import ApiLoader from './components/ApiLoader.vue';

export default{
  components:{
    AdviceBox,
    ApiLoader,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    async getAdvice(){
      store.loading = true,
      await axios.get(store.api_url).then( (r) => {
          store.advice = r.data.slip.advice
          store.adviceID = r.data.slip.id
      })
      store.loading = false
    }
  },
  created() {
    this.getAdvice()
    
  },
}

</script>



<template>
  
  <main>
    <div class="box-container">
      <ApiLoader v-if="store.loading" />

      <AdviceBox @advice="getAdvice()" v-else />
      
    </div>
  </main>

</template>

<style lang="scss">
@use './assets/sass/general';



</style>
