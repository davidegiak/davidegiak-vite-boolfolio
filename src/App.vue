<script>
import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios'

export default {
  name: 'App',
  components:{
    ProjectCard,
  },

  data() {
    return {
      projects: ''
    }
   
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/projects').then(response => {
      console.log(response);
      this.projects = response.data.projects.data
    })
  }
}
</script>
<template>
  <!-- {{ projects[1].title}} -->
    <div class="container d-flex flex-wrap">
      <ProjectCard v-for="project in projects" :card="project"/>
    </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
template{
  color: white;
}
</style>
