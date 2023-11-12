<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { Repo } from "../models";

const {
    name,
    repoLink,
    ownerName,
    ownerLink,
    avatarLink,
    description,
    language,
    starsCount,
} = defineProps<Repo>();
</script>

<template>
    <div
        class="w-80 bg-white dark:bg-slate-800 rounded-lg px-5 pt-3 pb-5 ring-1 ring-slate-900/5 shadow-xl flex flex-col gap-5"
    >
        <a
            :href="repoLink"
            class="text-3xl text-blue-400 leading-none text-ellipsis whitespace-nowrap overflow-hidden"
        >
            {{ name }}
        </a>

        <a
            :href="ownerLink"
            class="py-3 px-3 flex items-center gap-4 bg-blue-400 rounded-3xl break-all cursor-pointer"
        >
            <img
                :src="avatarLink"
                :alt="ownerName"
                class="w-10 h-10 rounded-full"
            />
            <span
                class="text-xl text-white break-words text-center dark:text-slate-800"
                >{{ ownerName }}</span
            >
        </a>

        <div class="min-h-[150px] text-gray-900 dark:text-gray-400 break-words">
            {{ description }}
        </div>

        <div
            class="flex items-center justify-between text-slate-400 dark:text-blue-400"
        >
            <div>
                lang:
                <span
                    class="ml-2 px-2 pt-1 pb-2 bg-blue-400 rounded-xl text-white leading-none dark:text-slate-800"
                >
                    {{ language }}
                </span>
            </div>
            <div class="flex items-center gap-2">
                <Icon
                    width="25"
                    height="25"
                    icon="ion:star-sharp"
                    color="#60A5FA"
                />
                {{ starsCount }}
            </div>
        </div>
    </div>
</template>
