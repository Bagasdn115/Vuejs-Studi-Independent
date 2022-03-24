<template>
  <div id="app">
    <div class="container">
      <h1>To do list</h1>
      <div class="row">
        <ol>
          <li v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <div class="row">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" @click="editTodo(index, todo)">Edit</button>
                <button type="button" class="btn btn-primary" @click="removeTodo(index)">Hapus</button>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div v-if="!isEditing">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="todo" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="storeTodo">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="todo" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="updateTodo">
              Update
            </button>
          </div>
        </div>
      </div>

      <!-- Task table -->
    </div>
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