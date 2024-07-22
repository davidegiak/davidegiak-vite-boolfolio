<script>
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  // data() {
  //   return {
  //     projects: ''
  //   }
   
  // },

  // mounted() {
  //   axios.get('http://127.0.0.1:8000/api/projects').then(response => {
  //     console.log(response);
  //     this.projects = response.data.projects.data
  //   })
  // }
}
</script>
<template>
  <AppHeader />
  <!-- {{ projects[1].title}} -->
  <router-view></router-view>
  
</template>

<style scoped>
</style>
