<template>
    <div class="flex flex-col ">
        <div class="flex flex-row ">
            <div class="p-2">
            <div class="bg-[#C8DEFF] w-[50px] h-[50px] rounded-[50%] ">

            </div>
          </div>
    <div class=" py-3">
            <h1 class=" w-[480px] h-[20px] font-semibold text-sm text-start text-white">{{data.titulo}}</h1>
            <p class="w-[250px] h-[20px] font-semibold text-xs text-start text-[#C8DEFF]">{{data.author}}</p>
          </div>
        </div>
    <div class="px-4 w-[480px] h-[20px] font-semibold text-xl text-white">
        <h1>{{data.titulo}}</h1>
    </div>
</div>

</template>

<script setup>
      import {useFetch} from "nuxt/app";
      // var URLactual = window.location.href;
      // var num2= [... URLactual]
      // console.log(num2)
      const url = `http://localhost:3001/video/vervideo/4`
      const {data} =  useFetch(url)

      
</script>