<template>
    <div class="completed_todo_container" v-if='completedTodos.length'>
        <div class="completed_todo" :key="completedTodo.title" v-for='completedTodo in completedTodos'>
            <div v-bind:style="{ backgroundColor: completedTodo.backgroundColor}">
                <p> Title - {{completedTodo.title}} </p>
                <p>Description - {{completedTodo.description}} </p>
                <p> created - {{completedTodo.created | trim}} </p>
                <p> completed At - {{completedTodo.completedAt | trim}} </p>
            </div>
        </div>
    </div>
    <div v-else>
        <p class="else_paragraph">You have not completed any todo yet.</p>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data: function() {
        return {
            completedTodos: []

        };
    },
    mounted() {
        this.getCompletedTodoList();
    },
    methods: {
        getCompletedTodoList: function() {
            let completedTodoArray = JSON.parse(localStorage.getItem('completed Todos'));
            if (completedTodoArray) {
                this.completedTodos = completedTodoArray;
            }
            return;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
