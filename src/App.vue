<script setup lang="ts">
import Layout from "./components/Layout.vue";
import Search from "./components/SearchInput.vue";
import CardWrapp from "./components/CardWrapp.vue";
import Pagination from "./components/Pagination.vue";
import { type Ref, ref } from "vue";

const searchString: Ref<string> = ref("Best Vue Repo");
const totalCount: Ref<number | null> = ref(null);
const perPage: Ref<number> = ref(10);
const page: Ref<number> = ref(1);

const onPerPageChange = (value: number) => {
    perPage.value = value;
};

const onPageChange = (value: number) => {
    page.value = value;
};
</script>

<template>
    <Layout>
        <main class="px-3 py-2 dark:bg-slate-700 min-h-screen">
            <Search v-model="searchString"></Search>
            <CardWrapp
                @set-total-count="
                    (newCount) => {
                        totalCount = newCount;
                    }
                "
                :q="searchString"
                :per_page="String(perPage)"
                :page="String(page)"
            ></CardWrapp>
            <Pagination
                :total-count="totalCount"
                :per-page="perPage"
                @set-per-page="onPerPageChange"
                :page="page"
                @set-page="onPageChange"
            ></Pagination>
        </main>
    </Layout>
</template>

<style scoped></style>
