<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'AppHeader',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand">Navbar</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <RouterLink to="/" class="nav-link">Go to home</RouterLink>
                    <RouterLink to="/about" class="nav-link">Go to about</RouterLink>
                    <RouterLink to="/projects" class="nav-link">Go to projects</RouterLink>
                    <RouterLink to="/contacts" class="nav-link">Go to contacts</RouterLink>
                    <!-- <rooter-link to="{{ name: home }}" class="nav-link active" aria-current="page" href="#">Home</rooter-link>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
