<template>
  <div id="app">
    <header-component></header-component>
    <router-view />
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue'

export default {
  name: 'app',
  components: {
    headerComponent
  },
  metaInfo() {
    return {
      title: "The world's best Todo App ever created",
      meta: [
        { title: 'Welcome | Ajuwaya Learn' },
        {
          name: 'description',
          content: 'Welcome to Ajuwaya Learn'
        },
        {
          property: 'og:description',
          content: 'Ajuwaya Learn'
        },
        {
          property: 'og:title',
          content: 'Welcome | Ajuwaya Learn'
        },
        {
          property: 'og:image',
          content: '../public/favicon.ico'
        },
        {
          property: 'og:site_name',
          content: 'Ajuwaya Learn' 
        },
        {
          property: 'og:type',
          content: 'website' 
        }
      ]
    }
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F8F9F9;
  min-height: 100vh;
}

body {
  margin: 0;
}

#app a {
  text-decoration: none;
  color: inherit;
}

#app > *:nth-child(2) {
  width: 100%;
  margin-top: 30px;
  margin: auto;
  max-width: 800px;
}

.headerComponent {
  background-color: #026AA7;
  color: #CCE1ED;
  padding: 5px;
  height: 40px;
}

.header_container {
  display: flex;
  height: 100%;
  margin: auto;
  max-width: 700px;
  width: 100%;
  text-align: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.header_container .router-link-exact-active {
  border-bottom: 3px solid #343434;
}

.header_child {
  width: 20%;
  max-width: 100px;
}

.header_child a {
  display: block;
  width: 100%;
  height: 100%;
}

.todo_list, .completed_todo_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.todo, .completed_todo {
  max-width: 200px;
  min-height: 200px;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: auto;
}
.todo>*, .completed_todo>* {
  padding: 10px;
  margin: 10px;
  max-width: 100%;
  height: 100%;
  border-radius: 20px;

}

.add_todo_button {
  margin: auto;
  background-color: #026AA7;
  color: #CCE1ED;
  height: 40px;
  border-radius: 10px;
  width: 80px;
  border: 0;
  display: block;
}

.todo_form {
  width: calc(100% - 20px);
  padding: 10px;
  max-width: 400px;
  margin: auto;
}

.todo_form h2 {
  text-align: center;
}

.todo_form label {
  display: block;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}

.todo_title {
  width: calc(80% - 8px);
  margin: auto;
  margin-bottom: 30px;
  height: 30px;
  display: block;
  border: 1px solid #026AA7;
  border-radius: 10px;
  padding: 8px;
  max-width: 250px;
}

.todo_description {
  padding: 8px;
  margin: auto;
  max-width: 250px;
  display: block;
  width: calc(80% - 8px);
  height: 100px;
  border: 1px solid #026AA7;
  border-radius: 10px;
}

.todo_button {
  background-color: #026AA7;
  color: #CCE1ED;
  display: block;
  width: 120px;
  height: 50px;
  border: 1px solid #026AA7;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px
}

.disabled {
  background-color: aliceblue;
  border: aliceblue;
}

.todos_container, .completed_todo_container {
  min-height: 350px;
}

.todo_container {
  max-width: 300px;
  height: 100%;
  margin-top: 30px;
  border-radius: 5px;
  text-align: center;
}

.todo_container button {
  margin: auto;
  display: block;
  margin-top: 20px;
  background-color: #026AA7;
  color: #CCE1ED;
  height: 40px;
  border-radius: 10px;
  width: 80px;
  border: 0;
}

.add_todo_div {
  margin-top: 30vh;
}

.else_paragraph {
  text-align: center;
}

/* transition & animations */
</style>
