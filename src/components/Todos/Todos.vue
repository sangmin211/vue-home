<template>
  <div>
    <!-- <AddList :todos="todos" /> -->
    <div id="serachDone">
      <input type="text" v-model="searchTitle" @change="fnFilterKeywordChange" @keydown="fnFilterKeywordChange" />
    </div>
    <!-- <List :todos="todos" /> -->
    <List v-bind:todos="todos" />
  </div>
</template>

<script>
import List from "@/components/Todos/List.vue";
// import AddList from "@/components/Todos/AddList.vue";
import axios from "axios";

export default {
  name: "Todos",
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        // for (const key in res.data) {
        //   res.data[key].filter = true;
        // }
        this.todos = res.data;
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods : {
      fnFilterKeywordChange () {
      //this.searchTitle
      console.log("필터 호출됨");
      

      // for (var ii in this.todos) {
      //    if (this.todos[ii].title.includes(this.searchTitle)) {
      //     this.todos[ii].filter = true;
      //   }
      //   console.log(ii);
      //   break;
      // }

      console.log("--- 검색어 필터 시작");

      // this.todos.forEach(i => {
      //   if  (i.title.includes(this.searchTitle)) {
      //     i.filter = true;
      //     console.log(i.title, "검색어 포함");
      //   }
      //   else {
      //     i.filter = false;
      //   }
      // });


      for (var i = 0; i < this.todos.length; i++) {
        if (this.searchTitle.length < 1) {
          this.todos[i].filter = true;
          continue;
        }

        if  (this.todos[i].title.includes(this.searchTitle)) {
          this.todos[i].filter = true;
          
          console.log(this.todos[i].title, "검색어 포함");
        }
        else {
          this.todos[i].filter = false;
        }
      } 
      this.todos.splice();
    },

  },
  // computed: {
  //   getFilterdData() {
  //     let filteredData = this.todos.filter((l) => {
  //       return l.title.includes(this.searchTitle);
  //     });
  //      console.log(filteredData);
  //     return filteredData;
  //   },
  // },

  computed: {
  
  },
  components: {
    List,
    // AddList,
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