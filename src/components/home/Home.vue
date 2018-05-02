<template>
  <div>
    <img src="/static/logo-avengers.png" width="200" height="71">

    <h1>{{ titleList }}</h1>

    <ul class="characters-list">
      <li class="characters-item" v-for="character of characters" :key="character.id">
        <div class="card">
          <my-card :name="character.name" :description="character.description" :url="character.url" ></my-card>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../shared/card/Card.vue";
import md5 from "md5";

export default {
  components: {
    "my-card": Card
  },

  data() {
    return {
      titleList: "Lista de Heróis",
      characters: []
    };
  },

  created() {
    const date = Date.now();
    const hash = md5(
      `${date}${"8704285253e2b1808f2f9ad2aedd19efe704d3a3"}${"42340bc8065ec9d1d255ef79bb82d8f3"}`
    );
    console.log(hash);
    let promise = this.$http.get(
      `https://gateway.marvel.com/v1/public/events/29/characters?limit=10&ts=${date}&apikey=42340bc8065ec9d1d255ef79bb82d8f3&hash=${hash}`
    );
    promise
      .then(res => {
        this.characters = res.data.data.results;
        this.characters.forEach(character => {
          character.url = `${character.thumbnail.path}/standard_xlarge.${
            character.thumbnail.extension
          }`;
        });
        console.log(this.characters);
      })
      .catch(err => console.log("Error on request characters", err));
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

.card {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.card .card-title {
  font-weight: bold;
}
</style>

