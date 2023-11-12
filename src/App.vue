<script setup lang="ts">
import Layout from "./components/Layout.vue";
import Search from "./components/SearchInput.vue";
import Sort from "./components/Sort.vue";
import CardWrapp from "./components/CardWrapp.vue";
import Pagination from "./components/Pagination.vue";
import { type Ref, ref } from "vue";
import { sortParams, orderParams } from "./constants";
import { RepoRequest } from "./models";

const searchString: Ref<string> = ref("Vue");
const totalCount: Ref<number | null> = ref(null);
const perPage: Ref<number> = ref(10);
const page: Ref<number> = ref(1);
const sort: Ref<RepoRequest["sort"]> = ref("stars");
const order: Ref<RepoRequest["order"]> = ref("asc");

const onPerPageChange = (value: number) => {
    perPage.value = value;
};

const onPageChange = (value: number) => {
    page.value = value;
};

const onSortChange = (value: RepoRequest["sort"]) => {
    sort.value = value;
    page.value = 1;
};

const onOrderChange = (value: RepoRequest["order"]) => {
    order.value = value;
    page.value = 1;
};
</script>

<template>
    <Layout>
        <main class="px-3 py-2 dark:bg-slate-700 min-h-screen">
            <section
                class="flex flex-col gap-5 md:flex-row md:justify-between md:items-center"
            >
                <Search v-model="searchString"></Search>
                <div class="flex gap-5">
                    <Sort
                        label="SortBy"
                        :options="sortParams"
                        id="SortBy"
                        :model-value="sort"
                        @update-model-value="onSortChange"
                    />

                    <Sort
                        label="Order"
                        :options="orderParams"
                        id="SortBy"
                        :model-value="order"
                        @update-model-value="onOrderChange"
                    />
                </div>
            </section>
            <CardWrapp
                @set-total-count="
                    (newCount) => {
                        totalCount = newCount;
                    }
                "
                @reset-page="page = 1"
                :q="searchString"
                :sort="sort"
                :order="order"
                :per_page="String(perPage)"
                :page="String(page)"
            />
            <Pagination
                :total-count="totalCount"
                :per-page="perPage"
                @set-per-page="onPerPageChange"
                :page="page"
                @set-page="onPageChange"
            />
        </main>
    </Layout>
</template>

<style scoped></style>
