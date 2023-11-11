<script setup lang="ts">
import Layout from "./components/Layout.vue";
import Search from "./components/SearchInput.vue";
import CardWrapp from "./components/CardWrapp.vue";
</script>

<template>
    <Layout>
        <main class="px-3 py-2 dark:bg-slate-700 min-h-screen">
            <Search></Search>
            <CardWrapp></CardWrapp>
        </main>
    </Layout>
</template>

<style scoped></style>
