<template>
    <div class="bg-transparent overflow-hidden">

        <h1 class="p-3 text-xl font-medium text-white">
            {{props.title}}
        </h1>
        
        <slot></slot>

    </div>
</template>

<script setup>
    const props = defineProps({
        title:{
            type: String,
            required: true
        }
    })
</script>