<template>
  <div>
    <Images :images="images" />
  </div>
</template>

<script>
import Images from "@/components/Gallery/Images.vue";

export default {
  name: "Gallery",
  components: {
    Images,
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/1.jpg"),
          alt: "음식1",
        },
        {
          src: require("@/assets/2.jpg"),
          alt: "음식2",
        },
        {
          src: require("@/assets/3.jpg"),
          alt: "음식3",
        },
        {
          src: require("@/assets/4.jpg"),
          alt: "음식4",
        },
      ],
    };
  },
};
</script>

<style>
</style>