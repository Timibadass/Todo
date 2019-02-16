import Vue from 'vue';
import App from './App.vue';
import VueRouter  from 'vue-router';
import Meta from 'vue-meta'

import TodoForm from './components/TodoForm.vue';
import viewTodo from './components/viewTodo.vue';
import TodoList from './components/TodoList.vue';
import completedTodoList from './components/completedTodoList.vue';

Vue.use(VueRouter);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

Vue.config.productionTip = false;

Vue.filter('trim', function(value) {
  return value.slice(0, 16);
});

const routes = [
  {
    name: 'Home',
    path: '/',
    component: TodoList
  },
  {
    name: 'Todos',
    path: '/todos',
    component: TodoList
  },
  {
    name: 'Add Todo',
    path: '/add',
    component: TodoForm
  },
  {
    name: 'Todo',
    path: '/todos/:title',
    component: viewTodo
  },
  {
    name: 'Completed Todos',
    path: '/todos/completed',
    component: completedTodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
