<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from "vue";

import Card from "./Card.vue";
import CardSkeleton from "./CardSkeleton.vue";
import Error from "./Error.vue";
import NoResults from "./NoResults.vue";

import { type RepoRequest, type Repo, type ErrorResponse } from "../models";

import RepoService from "../service/RepoService";

import { fromSourceToRepo } from "../mappers/fromSourceToRepo";
import { debounce } from "../utils/Debounce";
import { pushParamsToHistory } from "../utils/PushParamsToHistory";

const props = defineProps<RepoRequest>();

const emit = defineEmits<{
    setTotalCount: [totalCount: number];
    resetPage: [];
}>();

const isLoading: Ref<boolean> = ref(true);
const errorMessage: Ref<string> = ref("");
const repos: Ref<Repo[]> = ref([]);

const noResults = computed(
    () => !errorMessage.value && !isLoading.value && repos.value.length == 0
);

const getRepos = async (params: RepoRequest) => {
    isLoading.value = true;
    errorMessage.value = "";

    try {
        const { data } = await RepoService.getRepos(params);

        emit("setTotalCount", data.total_count);

        pushParamsToHistory(params);

        repos.value = data.items.map(fromSourceToRepo);
    } catch (e) {
        const message = (e as ErrorResponse).response.data.message;
        console.error(message);
        errorMessage.value = message;
    }

    isLoading.value = false;
};

const searchWhenInput = (props: RepoRequest) => {
    if (+props.page !== 1) {
        emit("resetPage");
    } else {
        getRepos(props);
    }
};

const debouncedSearchWhenInput = debounce(searchWhenInput, 500);

onMounted(() => {
    getRepos(props);
});

watch(
    () => props.q,
    (newValue) => {
        if (newValue) {
            debouncedSearchWhenInput(props);
        }
    }
);

watch(
    [
        () => props.per_page,
        () => props.page,
        () => props.sort,
        () => props.order,
    ],
    () => {
        getRepos(props);
    }
);
</script>

<template>
    <div
        class="mt-7 grid grid-cols-1 gap-x-6 self-center justify-items-center gap-y-10 sm:justify-items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
        <CardSkeleton v-if="isLoading" v-for="i in 10" :key="i" />

        <template v-else-if="!errorMessage" v-for="item in repos">
            <Card v-bind="item"></Card>
        </template>
    </div>

    <Error v-if="!!errorMessage" :error-message="errorMessage"></Error>
    <NoResults v-if="noResults" />
</template>
