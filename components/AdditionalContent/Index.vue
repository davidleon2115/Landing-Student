<template>
    <AdditionalContentPreviewCard title="Contenido adicional">
        <AdditionalContentPreviewCardItem v-for="(whoToFollow, index) in whoToFollowItems" :key="index">
            <div class="flex flex-row justify-between items-center p-2">
                <div class="flex flex-row">
                    <div class="text-white my-auto text-xl">
                        <font-awesome-icon :icon="['fas', 'globe']" />
                    </div>
                    <div class="ml-2">
                        <h2 class="font-medium text-white text-base">{{whoToFollow.name}}</h2>
                        <p class="text-xs text-white">{{whoToFollow.handle}}</p>
                    </div>
                </div>
                <div class="flex h-full text-white">
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                </div>
            </div>
        </AdditionalContentPreviewCardItem>
    </AdditionalContentPreviewCard>
</template>

<script setup>
    const whoToFollowItems = ref([
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