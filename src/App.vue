<template>
  <div id="app">
    <Top />
    <Link />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Link from "@/components/Link.vue";

export default {
  name: "App",
  components: {
    Top,
    Link,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
}
</style>
