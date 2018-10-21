<template>
    <div>
        <form   v-on:submit.prevent="storeTodo"  class="todo_form">
            <h2>Add A Todo</h2>
            <label for="todo.tile">Enter the title for your todo</label>
            <input class="todo_title" type="text" required v-model="todo.title" placeholder="Enter something you need to do">
            <label for="todo.description">Describe what this todo is about</label>
            <textarea class="todo_description" required v-model="todo.description" placeholder="describe what this is"></textarea>
            <button :class="{ disabled: isDisabled }" :disabled="isDisabled" class="todo_button"> Create Todo </button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function() {
        return {
            todo: {
                title: '',
                description: '',
                created: '',
                completed: '',
                completedAt: '',
                backgroundColor: '',
            },
            stored: false
        }
    },
    computed: {
        isDisabled () {
            return this.todo.title.length && this.todo.description.length  > 0 ? false : true;
        }
    },
    methods: {
        storeTodo: function() {
            let todoObj = JSON.parse(localStorage.getItem('Todos'));
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            let todoItem = {
                title: this.todo.title,
                description: this.todo.description,
                created: new Date(),
                completed: '',
                completedAt: '',
                backgroundColor: color
            };
    
            if(todoObj === null) todoObj = [];
            
            localStorage.setItem('Todo', JSON.stringify(todoItem))
            todoObj.push(todoItem);
            localStorage.setItem("Todos", JSON.stringify(todoObj));
            this.stored  = true;
            this.$router.push({ name: 'Todo', params: { title: this.todo.title } })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
