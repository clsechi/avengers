import api from '../../api/marvel'

const state = {
  characters: [],
}

const getters = {
  getAllCharacters(state) {
    return state.characters;
  },

  character: (state) => (id) => {
    return state.characters.find(character => character.id === id);
  }
}

const actions = {
  
}

const mutations = {

}

export default {
  state,
  getters,
}
