<template>
  <div>
    <img src="/static/logo-avengers.png" width="200" height="71">

    <h1>{{ titleList }}</h1>

    <ul class="characters-list">
      <li class="characters-item" v-for="character of characters" :key="character.id">
          <my-card :name="character.name" :description="character.description" :imgUrl="character.url" >
            <router-link :to="{ name: 'character', params: { id: character.id } }">
              <my-button btnStyle="btn-primary" text="Saiba Mais"/>
            </router-link>
          </my-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../shared/card/Card.vue";
import Button from "../shared/button/Button.vue"
import { mapGetters } from 'vuex'

export default {
  components: {
    "my-card": Card,
    "my-button": Button,
  },

  data() {
    return {
      titleList: "Lista de Heróis",
      characters: [],
    };
  },

  computed: mapGetters({
    characters: this.$store.getters.allCharacters()
  }),

  created() {
    this.$store.dispatch('getAllCharacters')
  }
};
</script>

<style>
.characters-list {
  list-style: none;
}

.characters-list .characters-item {
  display: inline-block;
}

</style>

