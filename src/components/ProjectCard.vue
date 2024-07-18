<script>
import bootstrap from "bootstrap";

export default {
  name: "ProjectCard",
    props:{
        card: String
    },
}
</script>

<template>
 <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{Card.title}}</h5>
    <p class="card-text">{{ card.description }}</p>
    <a href="#" class="btn btn-primary">More</a>
  </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
