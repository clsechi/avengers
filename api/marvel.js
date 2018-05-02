import md5 from "md5";
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export default {
  getCharacters() {
    let characters = [];
    const date = Date.now();
    const hash = md5(
      `${date}${"8704285253e2b1808f2f9ad2aedd19efe704d3a3"}${"42340bc8065ec9d1d255ef79bb82d8f3"}`
    );
    console.log(hash);
    let promise = Vue.http.get(
      `https://gateway.marvel.com/v1/public/events/29/characters?limit=10&ts=${date}&apikey=42340bc8065ec9d1d255ef79bb82d8f3&hash=${hash}`
    );
    promise
      .then(res => {
        console.log(res);
        characters = res.data.data.results;
        characters.forEach(character => {
          character.url = `${character.thumbnail.path}/standard_xlarge.${
            character.thumbnail.extension
            }`;
        });
        characters;
      })
      .catch(err => console.log("Error on request characters", err));
  }
}

