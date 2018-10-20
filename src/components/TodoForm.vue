<template>
    <div>
        <form   v-on:submit.prevent="storeTodo"  class="todo_form">
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
    .todo_form {
        width: calc(100% - 20px);
        padding: 10px;
        max-width: 500px;
        margin: auto;
    }

    .todo_form label {
        display: block;
        margin: auto;
        text-align: left;
        margin-bottom: 10px;
    }

    .todo_title {
        width: calc(80% - 8px);
        margin: auto;
        margin-bottom: 10px;
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
</style>
