<template>
  <div class="card">
    <img :src="imgUrl" :alt="name">
    <p class="card-title">{{ name }}</p>
    <slot></slot>
  </div>  
</template>

<script>
export default {
  props: ["name", "description", "imgUrl"]
};
</script>

<style>
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
