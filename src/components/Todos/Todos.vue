<template>
  <div>
    <AddList :todos="getFilterdData" />
    <div id="serachDone">
      <input type="text" v-model="searchTitle" />
    </div>
    <!-- <List :todos="todos" /> -->
    <List :todos="getFilterdData" />
  </div>
</template>

<script>
import List from "@/components/Todos/List.vue";
import AddList from "@/components/Todos/AddList.vue";
import axios from "axios";

export default {
  name: "Todos",
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        this.todos = res.data;
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    getFilterdData() {
      let filteredData = this.todos.filter((todo) => {
        return todo.title.includes(this.searchTitle);
      });
      // console.log(filteredData);
      return filteredData;
    },
  },
  components: {
    List,
    AddList,
  },
  data() {
    return {
      todos: [],
      searchTitle: "",
    };
  },
};
</script>

<style>
#serachDone input {
  width: 100%;
  height: 30px;
}
</style>