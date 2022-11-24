<template>
    <AdditionalContentPreviewCard title="Contenido adicional">
        <AdditionalContentPreviewCardItem v-for="(i, index) in data.contenido_extra.length" :key="index">
            <div class="flex flex-row justify-between items-center p-2 px-5">
                <div class="flex flex-row">
                    <!-- <NuxtLink class="text-white my-auto text-xl" :to="course.handle" target="_blank">
                        <font-awesome-icon :icon="['fas', 'globe']" />
                    </NuxtLink> -->
                    <div class="ml-3">
                        <h2 class="font-medium text-white text-base">{{data.contenido_extra[index].descripcion}}</h2>
                        <!-- <NuxtLink class="text-xs text-white" :to="data.handle" target="_blank">
                            {{data.contenido_extra[index].archivo}}
                        </NuxtLink> -->
                        <p class="font-medium text-white text-base">{{data.contenido_extra[index].file}}</p>
                        
                    </div>
                </div>
                <div class="flex h-full text-white">
                    <!-- <NuxtLink class="text-xs text-white" :to="course.handle" target="_blank">
                        <img src="~~/assets/icons/goTo.svg" :alt="course.name">
                    </NuxtLink> -->
                </div>
            </div>
        </AdditionalContentPreviewCardItem>
    </AdditionalContentPreviewCard>
</template>

<script setup>
    import useFectching from '~~/composables/useFetchingGet';

    // const url = "/api/"

    // let courses = useFectching(url)

    import {useFetch} from "nuxt/app";
      // var URLactual = window.location.href;
      // var num2= [... URLactual]
      // console.log(num2)
      const url = `http://localhost:3001/video/vervideo/1`
      const {data} =  useFetch(url)
    // const courses = ref([
    //     {
    //         name: 'Aprende GitHub',
    //         handle: 'https://github.com/',
    //         image: 'https://picsum.photos/200/200'
    //     },
    //     {
    //         name: 'Aprende Vue',
    //         handle: 'https://vuejs.org/guide/introduction.html',
    //         image: 'https://picsum.photos/200/200'
    //     },
    //     {
    //         name: 'Aprende React',
    //         handle: 'https://es.reactjs.org/docs/getting-started.html',
    //         image: 'https://picsum.photos/200/200'
    //     },
    //     {
    //         name: 'Aprende Angular',
    //         handle: 'https://angular.io/docs',
    //         image: 'https://picsum.photos/200/200'
    //     },
    //     {
    //         name: 'Aprende Angular',
    //         handle: 'https://angular.io/docs',
    //         image: 'https://picsum.photos/200/200'
    //     }

    // ])
</script>