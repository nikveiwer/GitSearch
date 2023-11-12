<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

onMounted(() => {
    if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        isDarkTheme.value = true;
    } else {
        isDarkTheme.value = false;
    }
});

const isDarkTheme: Ref<boolean> = ref(true);

const changeTheme = () => {
    if (isDarkTheme.value) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    isDarkTheme.value = !isDarkTheme.value;
};
</script>

<template>
    <div :class="{ dark: isDarkTheme }">
        <header
            class="w-full px-3 py-2 flex justify-between items-center bg-blue-400 mh"
        >
            <h1 class="text-lg text-white font-medium dark:text-slate-700">
                GitSearch
            </h1>
            <button
                class="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-300"
                @click="changeTheme"
            >
                <Icon
                    icon="bi:sun-fill"
                    class="hidden dark:text-slate-700 dark:block"
                >
                </Icon>
                <Icon icon="ph:moon-fill" class="block text-white dark:hidden">
                </Icon>
            </button>
        </header>

        <slot></slot>
    </div>
</template>
