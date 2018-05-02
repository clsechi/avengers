<template>
  <div class="card">
    <img :src="url" :alt="name">
    <p class="card-title">{{ name }}</p>
    <p>{{ description }}</p>
  </div>  
</template>

<script>
export default {
  props: ['name', 'description', 'url'],

  data() {
    return {
      character: {},
    }
  },
};
</script>

<style>

</style>
