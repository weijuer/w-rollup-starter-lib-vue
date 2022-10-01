<script>
export default {
    name: 'hello-world'
}
</script>

<script setup>
defineProps({
    name: {
        type: String,
        default: 'world'
    }
});
</script>
    
<template>
    <div class="hello-world">Hello {{ name }}!</div>
</template>

<style lang="less">
.hello-world {
    display: flex;
    color: red;
}
</style>