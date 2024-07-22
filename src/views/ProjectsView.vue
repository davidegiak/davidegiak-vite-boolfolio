<script>
import ProjectsCard from '../picies/ProjectCard.vue'
import axios from 'axios'
export default {
  name: 'ProjectsView',
  components: {
    ProjectsCard
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
    <div class="container d-flex flex-wrap gap-4 mt-4">
        <ProjectsCard v-for="item in projects" :card="item"/>
    </div>
</template>