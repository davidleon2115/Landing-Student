<template>

    <div v-for="(i, index) in data.user_comentario.length" class="py-2">
      <div class="flex flex-col w-[full] md:max-lg top-[284px] left-[1260px] px-2.5 py-5 gap-[10px] bg-[#2b3348] rounded-[20px] items-start ">
        <div class="flex flex-row ">
          <div class="p-2">
            <div class=" w-[50px] h-[50px] rounded-[50%] ">
                <img class=" w-[50px] h-[50px] rounded-[50%]" src="{{data.user_comentario[index].userR.profile}}" alt="">
            </div>
          </div>
          <div class=" py-3">
            <h1 class=" w-[250px] h-[20px] font-semibold text-sm text-start text-white ">{{data.user_comentario[index].userR.username}}</h1>
           <div class="flex flex-row">
            <p class="w-[80px] h-[20px] font-semibold text-xs text-start text-[#C8DEFF]">{{data.user_comentario[index].fecha.substr(0, 24 - 14)}}</p>
            <p class="w-[100px] h-[20px] font-semibold text-xs text-start text-[#C8DEFF]  ">{{data.user_comentario[index].fecha.substr(11, 13 - 8)}}</p>
           </div>
          </div>
        </div>
        <div class="w-[100%] px-4 py-2  font-semibold text-xs text-white pl-[20px] pb-[30px] pr-[30px]  rounded-md">
          <p>
            {{data.user_comentario[index].comment}}
          </p>
        </div>
      </div>

    </div>

</template>

<script setup>
      import {useFetch} from "nuxt/app";
      // var URLactual = window.location.href;
      // var num2= [... URLactual]
      // console.log(num2)
      const url = `http://localhost:3001/video/vervideo/1`
      const {data} =  useFetch(url)

      
</script>
