<template>
    <div v-for="(i, index) in data.user_comentario" :key="index" class="py-2">
      <div class="flex flex-col w-[full] md:max-lg top-[284px]  px-2.5 py-5 gap-[10px] bg-[#2b3348] rounded-[20px] items-start ">
        <div class="flex flex-row ">
          <div class="p-2">
            <div class="bg-[#C8DEFF] w-[50px] h-[50px] rounded-[50%] "></div>
          </div>
          <div class=" py-3">
            <h1 class=" w-full font-semibold text-sm text-start text-white">{{i.userR.username}}</h1>
            <p class="w-full font-semibold text-xs text-start text-[#C8DEFF]">{{i.fecha}}</p>
          </div>
        </div>
        <div class="w-full font-semibold text-xs text-white pl-[20px] pb-[30px] pr-[30px]">
          <p>
            {{i.comment}}
          </p>
        </div>
      </div>

    </div>

</template>

<script setup>
      const url = `http://localhost:3001/video/vervideo/1`
      const {data} =  useFetch(url)

      
</script>
