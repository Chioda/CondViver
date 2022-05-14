

<template>
    <section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image: url(img/Churrasqueira.jpeg);">
        <h2>Banner</h2>
    </section>
</template>

<script>
    export default{
      name: "Banner"
    }   
</script>

<style scoped>
    #main-banner {
        background-size: auto;
        display: flex;
        width: 100%;
        height: 300px;
        object-fit: fill;
    }
</style>