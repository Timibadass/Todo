import Vue from 'vue';
import App from './App.vue';
import VueRouter  from 'vue-router';

import TodoForm from './components/TodoForm.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  // {
  //   name: 'Home',
  //   path: '/',
  //   component: TodoList
  // },
  // {
  //   name: 'Todos',
  //   path: '/todos',
  //   component: TodoList
  // },
  {
    name: 'Add Todo',
    path: '/',
    component: TodoForm
  },
  // {
  //   name: 'Todo',
  //   path: '/todos/:title',
  //   component: viewTodo
  // },
  // {
  //   name: 'Completed Todos',
  //   path: '/todos/completed',
  //   component: completedTodoList
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
