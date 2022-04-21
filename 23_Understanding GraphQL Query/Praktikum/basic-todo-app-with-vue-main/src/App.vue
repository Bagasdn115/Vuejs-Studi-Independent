<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <ul>
      <li v-for="item in todo" :key="item.id">
        <span>ID: {{ item.id }}</span>
        <span>list: {{ item.list }}</span>
    </ul>
    <router-view />
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",
  apollo: {
    todo: gql`
      query MyQuery {
        todo_todos {
          id
          list
        }
      }
    `,
  },
  computed: {
    todos() {
      return this.$apollo.queries.todo;
    },
  },
  watch: {
    todos: function(old, current){
      console.log(current);
    }
  }
};
</script>

<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
