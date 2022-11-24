<template>
    <AdditionalContentPreviewCard title="Contenido adicional">
        <nuxt-link to="#" target="_blank">
            <AdditionalContentPreviewCardItem v-for="(i, index) in content.contenido_extra" :key="index">
                <div class="flex flex-row justify-between items-center p-2 px-5">
                    <div class="flex flex-row overflow-hidden">
                        <div>
                            <font-awesome-icon class="text-white my-auto text-xl" :icon="['fas', 'globe']" />
                        </div>
                        <div class="ml-3 ">
                            <h2 class="font-medium text-white text-base">{{i.descripcion}}</h2>
                            <p class="font-medium text-white text-base">{{i.file}}</p>
                        </div>
                    </div>
                    <div class="flex h-full text-white">
                        <img class="text-xs" src="~~/assets/icons/goTo.svg">
                    </div>
                </div>
            </AdditionalContentPreviewCardItem>
        </nuxt-link>
    </AdditionalContentPreviewCard>
</template>

<script setup>
    import useFectching from '~~/composables/useFetchingPost';

    const url = `http://localhost:3001/video/vervideo/1`
    const {data : content} =  useFetch(url)
</script>