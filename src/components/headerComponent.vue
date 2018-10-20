<template>
    <div class="header">
        <div class="header_child">
            <router-link :to="{ name: 'Home' }">Home</router-link>            
        </div>
        <div class="header_child">
            <router-link :to="{ name: 'Add Todo' }">Add Todo</router-link>            
        </div>
        <div class="header_child">
            <router-link :to="{ name: 'Todos'} ">Todos</router-link>
        </div>
        <div class="header_child">
            <router-link :to="{ name: 'Completed Todos'} ">Completed</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

