<template>
  <div>
    <div id="AddList">
    <input type="text" v-model="tText" />
    <input type="button" value="추가" @click="addList" />
  </div>
  <div>
    <ul>
      <li
        v-for="(todo,index) in todos"
        :key="todo.id"
        @dblclick="dbclick(index)"
        v-bind:class="{completed: todo.completed, displanone: (todo.filter === false)} "
      >
        {{todo.title}}
        <a @click="dleLi(index)" href="#">
          <span>X</span>
        </a>
      </li>
    </ul>
  </div>
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
        // this.Titles = this.todos.length
      }
    },
    dbclick(index) {
      this.todos[index].completed = !this.todos[index].completed;
      console.log(this.todos);
      //this.Titles++;
      // if (this.todos[index].completed) {
      //   this.Titles = this.todos.length + 1
      // } else {
      //   this.Titles = this.todos.length + 2
      // }
      
      // console.log(index);
      // console.log(this.todos[index].id);
    },
     addList() {
      const size = this.todos.length;
      const lastId = size === 0 ? size : this.todos[size - 1].id;
        // console.log(size);
        // console.log(lastId);
      const add = {
        id: (lastId + 1),
        title: this.tText,
        completed: false,
        filter: true,
      };
      this.tText = "";
      // this.todos.splice(size,0,add)
      
      this.todos.push(add);
      //this.todos = this.todos.push(add).slice();
      //console.log(this.todos[size])
      // this.$set(this.todos[size-1], this.todos.id, size-1);
    },
  },
  data() {
    return {
      Titles: 0,
      tText: "",
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
.displanone {
  display: none;
}
#AddList {
  width: 100%;
  display: flex;
}
input[type="text"] {
  width: 70%;
  height: 50px;
  font-size: 28px;
  padding: 0 20px;
}
input[type="button"] {
  width: 30%;
  font-size: 30px;
}
</style>