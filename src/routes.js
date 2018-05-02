import Home from './components/home/Home.vue'
import Character from './components/character/Character.vue'

export const routes = [
  { path: '', name: 'home', name: 'home', component: Home },
  { path: '/character/:id', name: 'character', component: Character },
];