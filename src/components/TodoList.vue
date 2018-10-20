<template>
    <div class="todos_container">
        <div class="todo_list" v-if='Todos.length'>
            <div class="todo" :key='todo.title' v-for='todo in Todos'>
                <div v-bind:style="{ backgroundColor: todo.backgroundColor }">
                    <p>Title - 
                        <router-link :to="{ name: 'Todo', params: { title: todo.title }}">
                            {{todo.title}}
                        </router-link>
                    </p>
                    <p>Description - {{todo.description}} </p>
                    <p>Created at - {{todo.created | trim}} </p>
                </div>
            </div>
        </div>
        <div class="add_todo_div" v-else>
            <p class="else_paragraph">You currently do not have any todo</p>
            <button class="add_todo_button">
                <router-link to="/add">Add Todo</router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data: function() {
        return {
            Todos: [],
        }
    },

    mounted() {
        this.getTodos();
    },
    methods: {
        getTodos: function() {
            let TodoArray = JSON.parse(localStorage.getItem('Todos'));
            if(TodoArray) {
                this.Todos = TodoArray;
            }
            return;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
