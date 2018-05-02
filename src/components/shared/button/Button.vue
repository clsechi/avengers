<template>
  <button class="btn" :class="btnStyle">{{ text }}</button>
</template>

<script>
export default {
  props: ["btnStyle", "text"]
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.btn-danger {
  background: red;
  color: white;
}

.btn-primary {
  background: darkcyan;
  color: white;
}
</style>
