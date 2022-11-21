<template>
    <div>
        <form @submit.prevent="onSubmit()" method="post">
            <div class="relative mb-14">
              <textarea
              v-model="comment"
                class="
                w-[30rem]
                h-16 
                resize-none
                focus:text-white
                bg-[#2B3348]
                py-1.5
                px-3
                text-sm
                transition-all
                text-white
                border-2
                border-[#87B8FF]
                hover:outline-offset-0
                hover:outline-4
                hover:outline-[#87B8FF]
                focus:outline-4
                focus:outline-offset-0
                focus:outline-[#87B8FF]
                outline-none
                rounded-lg
                cursor-pointer"
                name="comment" 
                id="comment" 
                placeholder="Deja un comentario"></textarea>
            
                <button 
                class="absolute
                top-20
                right-1
                sm:left-[19.9rem]
                w-40
                py-1.5
                px-3
                rounded-lg
                transition
                duration-500
                hover:ease-in-out
                hover:scale-105
                bg-gradient-to-l from-[#87B8FF] to-[#4490F9] 
                hover:from-[#FF7D75]
                hover:to-[#FF5149]
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