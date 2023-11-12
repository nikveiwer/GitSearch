<script setup lang="ts">
import { ItemsPerPage } from "../constants.ts";

interface PaginationProps {
    totalCount: number | null;
    perPage: number;
    page: number;
}

const props = defineProps<PaginationProps>();

const emit = defineEmits<{
    setPerPage: [value: number];
    setPage: [value: number];
}>();

const setNewPerPage = (newPerPage: number) => {
    emit("setPerPage", newPerPage);
    emit("setPage", 1);
};

const pagesCount = () => {
    if (props.totalCount) {
        return Math.ceil(props.totalCount / props.perPage);
    }

    return 1;
};

const calcPaginationList = () => {
    const length = pagesCount();

    let left = Math.max(props.page - 1, 1);
    let right = Math.min(left + 1 * 2, length);

    left = Math.max(right - 2, 1);

    let items: (number | null)[] = [];

    if (left > 1) items.push(1);

    if (left > 2) items.push(null);

    for (let page = left; page <= right; page++) items.push(page);

    if (right < length - 1) items.push(null);

    if (right < length) items.push(length);

    return items;
};
</script>

<template>
    <div
        class="flex flex-col mt-8 items-center gap-5 md:flex-row md:justify-between"
    >
        <div>
            <h4
                for="perPage"
                class="text-sm font-medium leading-none text-gray-400"
            >
                Items per page
            </h4>
            <ul
                id="perPage"
                class="flex flex-wrap mt-2 text-xs md:text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            >
                <button
                    v-for="item in ItemsPerPage"
                    class="me-2 inline-block px-2 py-1 md:px-4 md:py-3 rounded-lg"
                    :class="[
                        item == perPage
                            ? 'text-white bg-blue-400 '
                            : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white',
                    ]"
                    @click="setNewPerPage(item)"
                >
                    {{ item }}
                </button>
            </ul>
        </div>

        <nav aria-label="Page navigation">
            <ul class="flex items-center -space-x-px h-5 md:h-8 text-sm">
                <li v-for="item in calcPaginationList()">
                    <button
                        v-if="item"
                        class="flex items-center justify-center px-1 h-5 md:px-3 md:h-8 leading-tight"
                        :class="
                            item == page
                                ? 'z-10 text-white border border-blue-400 bg-blue-400  dark:text-white'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        "
                        @click="$emit('setPage', item)"
                    >
                        {{ item }}
                    </button>
                    <div
                        v-else
                        class="flex items-center justify-center px-1 h-5 md:px-3 md:h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        ...
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>
