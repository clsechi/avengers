<template>
  <div>
    <img :src="character.url" :alt="character.name">    
    <h1>{{ character.name }}</h1>
    <h3>{{ character.description }}</h3>
    <ul>
      <p>Revistas que o personagem aparece</p>
      <li v-for="(comics, index) of character.comics.items" :key="index">
        <p>{{ comics.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    character: ""
  },
}
</script>

<style>

</style>