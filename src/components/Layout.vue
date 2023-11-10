<script setup lang="ts">
import { onMounted } from "vue";
import RepoService from "../service/RepoService";

onMounted(() => {
    RepoService.getRepos()
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
});
</script>

<template>
    <header class="w-full px-3 py-2 flex bg-blue-400 mh">
        <h1 class="text-lg text-white font-medium dark:text-slate-700">
            GitSearch
        </h1>
    </header>

    <slot></slot>
</template>
