<template>
  <div id="Images">
    <ul>
      <li v-for="image in images" :key="image.alt" @click="clickLi(image)">
        <img :src="image.src" :alt="image.alt" />
      </li>
    </ul>
    <div id="displayImg">
      <img :src="displaySrc" :alt="displayAlt" />
      <p>{{displayAlt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    images: Array,
  },
  methods: {
    clickLi(image) {
      this.displaySrc = image.src;
      this.displayAlt = image.alt;
    },
  },
  data() {
    return {
      displaySrc: "",
      displayAlt: "",
    };
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
}
li {
  list-style: none;
  width: 100%;
  height: 200px;
}
ul > li > img {
  width: 100%;
  height: 200px;
  object-fit: fill;
}
#displayImg {
  width: 60%;
  margin: 20px auto;
}
#displayImg img {
  width: 100%;
}
#displayImg p {
  width: 100%;
  text-align: center;
  font-size: 30px;
}
</style>