<template>
  <div class="bg-[#1C233A] min-h-screen flex flex-col ">
    <div class="container mx-auto min-h-screen flex flex-col">
      <img src="~~/assets/img/nav.png" class="my-9" alt="">
      <div class="flex justify-center items-center">
        <div class="min-w-[300px] w-5/6 flex flex-col">
          <img class="mr-4" src="~~/assets/img/Video.png" alt="">
          <div class=" min-w-[300px] w-5/6 ">
            <AdditionalContent/>
          </div>
        </div>
        <div class="self-start">
          <comment/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

body{
    font-family: 'Montserrat', sans-serif;
}
</style>

