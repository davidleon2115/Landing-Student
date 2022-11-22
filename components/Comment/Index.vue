<template>
    <div>
        <form @submit.prevent="onSubmit()" method="post">  
             <textarea
              v-model="comment"
                class="
                w-full
                h-16 
                mb-4
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
           <div class="text-right">
                <button 
                class="     
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
  //peticiones a la API

</script>