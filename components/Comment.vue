<template>
    <div>
        <form @submit.prevent="onSubmit()" method="post">
            <div class="relative">
            <textarea
            v-model="comment"
             class="w-[30rem]
             h-16 
             resize-none
             bg-[#2B3348]
             py-1.5
             px-3
             text-sm
             text-white
             border-2
             border-[#87B8FF]
             rounded-lg"
             name="comment" 
             id="comment" 
             placeholder="Deja un comentario"></textarea>
            
                <button 
                class="absolute
                top-20
                left-[19.9rem]
                w-40
                py-1.5
                px-3
                rounded-lg
                bg-gradient-to-r from-[#87B8FF] to-[#4490F9] 
                text-center
                text-white
                text-sm
                "
                >Enviar comentario</button>
            
            </div>
        </form>
    </div>
</template>

<script setup>

let comment = ref('');

const onSubmit = () => {
const { data, pending, error, refresh } = useFetch(
  'https://jsonplaceholder.typicode.com/posts',
  {
    method: 'POST',
    body: {
      comment: comment.value,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  comment.value = ""
}


</script>

<style scoped>

</style>