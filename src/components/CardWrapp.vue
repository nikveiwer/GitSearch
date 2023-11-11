<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import Card from "./Card.vue";
import CardSkeleton from "./CardSkeleton.vue";
import Error from "./Error.vue";
import { type Repo } from "../models";
import RepoService from "../service/RepoService";
import { fromSourceToRepo } from "../mappers/fromSourceToRepo";

const isLoading: Ref<boolean> = ref(true);
const isError: Ref<boolean> = ref(false);
const repos: Ref<Repo[]> = ref([]);

const getRepos = async () => {
    isLoading.value = true;

    try {
        const { data } = await RepoService.getRepos();

        repos.value = data.items.map(fromSourceToRepo);
    } catch (e) {
        console.error(e);
        isError.value = true;
    }

    isLoading.value = false;
};

onMounted(() => {
    getRepos();
});
</script>

<template>
    <div
        class="mt-7 grid grid-cols-1 gap-x-6 self-center gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
        <CardSkeleton v-if="isLoading" v-for="i in 10" :key="i" />

        <template v-else-if="!isError" v-for="item in repos">
            <Card v-bind="item"></Card>
        </template>
    </div>

    <Error v-if="isError"></Error>
</template>
