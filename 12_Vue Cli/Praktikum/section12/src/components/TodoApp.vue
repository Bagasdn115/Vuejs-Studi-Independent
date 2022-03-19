<template>
  <div>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="editTodo(index, todo)">Edit</button>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ol>

    <div v-if="!isEditing">
      <input type="text" v-model="todo" />
      <input type="submit" value="Tambahkan" @click="storeTodo" />
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <input type="submit" value="Update" @click="updateTodo" />
    </div>

    <!-- Task table -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
    isEditing: false,
    todo: "",
    todos: [],
    selectedTodo: null,
    };
  },

  methods: {
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.todo = "";
      this.isEditing = false;
    },

    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo;
      this.selectedIndex = index;
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
</style>