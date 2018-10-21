<template>
    <div class="todo_container">
        <p>Title -  {{todo.title}}</p>
        <p>Description -  {{todo.description}}</p>
        <input type="checkbox" name="completed"  v-model='completed' id="completed-todo"> 
        <label for="completed"> Completed </label>
        <button v-on:click='moveTodo'> Submit </button>
    </div>
</template>

<script>
export default {
    name: 'viewTodo',
    data: function() {
        return {
            todo: '',
            completed: '',
            completedAt: ''
        }
    },
    mounted() {
        this.getTodo();
    },
    computed: {
        isDisabled () {
            return this.completed ? false : true;
        }
    },
    methods: {
        getTodo: function() {
            let todos = JSON.parse(localStorage.getItem('Todos'))
            let todoTitle = this.$route.params.title;
            todos.forEach(todo => {
                todo.title == todoTitle ? this.todo = todo : false ;
            });
        },
        moveTodo: function() {
            let todos = JSON.parse(localStorage.getItem('Todos'));
            let todoTitle = this.$route.params.title;
            let completedTodos = JSON.parse(localStorage.getItem('completed Todos'));
            let todoPosition;
            
            if (completedTodos === null) completedTodos = [];

            if(this.completed) {
                todos.forEach( todo => {
                    if (todo.title == todoTitle) {
                        todo.completed = this.completed;
                        todo.completedAt = new Date();
                        todoPosition = todos.indexOf(todo);
                        completedTodos.push(todo); 
                        localStorage.setItem('completed Todos', JSON.stringify(completedTodos));
                    }
                });
                let newTodos = todos.splice(todoPosition, 1);
                localStorage.setItem('Todos', JSON.stringify(todos));
                this.$router.push({ name: 'Completed Todos'});
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
