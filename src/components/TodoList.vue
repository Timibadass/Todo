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
    metaInfo() {
        return {
        title: "The world's best Todo App ever created",
        meta: [
            { title: 'Todo List | Ajuwaya Learn' },
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
