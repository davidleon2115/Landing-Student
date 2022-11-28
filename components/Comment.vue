<template>
    <div>
        <form @submit.prevent="onSubmit()" method="post">
            <div class="relative">
            <textarea
            v-model="comment"
             class="
             h-20
             w-full
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
                top-24
                right-1
                left-[auto]
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

<ul>

</ul>
</template>

<script setup>
 
let comment = ref('');

const onSubmit = () => {
  const newComment = {
    user_id:1,
    videoId:1,
    comment: comment.value,
  }
const { data, error } = useFetch(
  'http://localhost:3001/comentarios/createComment',
  {
    method: 'post',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json',
    },
  })
  comment.value = ""
}



// const urlUsers = `http://localhost:3001/username/all`
// const {data} =  useFetch(urlUsers,{ mode: 'no-cors'})

const urlVideo = `http://localhost:3001/video/id/1`
const {data:video} =  useFetch(urlVideo)

// console.log(video.value);

const urlId = `http://localhost:3001/username/id/9`
const {data:user} =  useFetch(urlId)
// console.log(user.value);




</script>

<style scoped>

</style>