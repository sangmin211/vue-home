<template>
  <div id="link">
    <router-link to="Todos">Todos</router-link>
    <router-link to="Gallery">Gallery</router-link>
    <router-link to="Etc">Etc</router-link>
  </div>
</template>

<script>
export default {
  name: "Link",
};
</script>

<style>
#link {
  height: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
#link a {
  width: 100%;
  display: block;
  text-decoration: none;
  font-size: 20px;
  background: red;
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
  color: #fff;
}
</style>