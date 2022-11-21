<template>
    <AdditionalContentPreviewCard title="Contenido adicional">
        <AdditionalContentPreviewCardItem v-for="(course, index) in courses" :key="index">
            <div class="flex flex-row justify-between items-center p-2 px-5">
                <div class="flex flex-row">
                    <NuxtLink class="text-white my-auto text-xl" :to="course.handle" target="_blank">
                        <font-awesome-icon :icon="['fas', 'globe']" />
                    </NuxtLink>
                    <div class="ml-3">
                        <h2 class="font-medium text-white text-base">{{course.name}}</h2>
                        <NuxtLink class="text-xs text-white" :to="course.handle" target="_blank">
                            {{course.handle}}
                        </NuxtLink>
                        
                    </div>
                </div>
                <div class="flex h-full text-white">
                    <NuxtLink class="text-xs text-white" :to="course.handle" target="_blank">
                        <img src="~~/assets/icons/goTo.svg" :alt="course.name">
                    </NuxtLink>
                </div>
            </div>
        </AdditionalContentPreviewCardItem>
    </AdditionalContentPreviewCard>
</template>

<script setup>
    import useFectching from '~~/composables/useFetchingGet';

    // const url = "/api/"

    // let courses = useFectching(url)

    const courses = ref([
        {
            name: 'Aprende GitHub',
            handle: 'https://github.com/',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Aprende Vue',
            handle: 'https://vuejs.org/guide/introduction.html',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Aprende React',
            handle: 'https://es.reactjs.org/docs/getting-started.html',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Aprende Angular',
            handle: 'https://angular.io/docs',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Aprende Angular',
            handle: 'https://angular.io/docs',
            image: 'https://picsum.photos/200/200'
        }

    ])
</script>