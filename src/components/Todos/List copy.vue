<template>
  <div>
    <ul>
      <li
        v-for="(todo,index) in todos"
        :key="todo.id"
        @dblclick="dbclick(index)"
        :class="{completed: todo.completed === true}"
      >
        {{todo.title}}
        <a @click="dleLi(index)" href="#">
          <span>X</span>
        </a>
      </li>
    </ul>
    <div>
      {{Titles}}
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: Array,
  },
  methods: {
    dleLi(index) {
      // console.log(index);
      if (this.todos[index].completed) {
        this.todos.splice(index, 1);
        console.log(this.todos)
        console.log(this.todos.length)
        this.Titles = this.todos.length
      }
    },
    dbclick(index) {
      this.todos[index].completed = !this.todos[index].completed;
      console.log(this.todos);
      // console.log(index);
      // console.log(this.todos[index].id);
    },
  },
  data() {
    return {
      Titles: "",
    };
    // return { searchTitle: "" };
  },
};
</script>

<style scoped>
li {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 0 20px;
  box-sizing: border-box;
}
a {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  text-decoration: none;
}
a span {
  display: block;
  margin: 5px 0 0 10px;
}
.completed {
  color: #999;
  text-decoration: line-through;
}
</style>