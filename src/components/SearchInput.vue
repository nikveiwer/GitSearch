<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface SearchProps {
    modelValue: string;
}

defineProps<SearchProps>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
    <div>
        <label
            for="search"
            class="block text-sm font-medium leading-6 text-gray-900"
        ></label>
        <div class="relative mt-2 rounded-md shadow-sm">
            <div
                class="pointer-events-none absolute inset-y-0 top-[2px] left-0 flex items-center pl-2"
            >
                <Icon
                    icon="carbon:search"
                    width="18"
                    height="18"
                    color="#334155"
                ></Icon>
            </div>
            <input
                type="text"
                name="search"
                id="search"
                class="block w-full rounded-md border-2 border-blue-400 outline-none py-1.5 pl-8 pr-2 placeholder:text-gray-400 dark:focus:ring-blue-400 dark:focus:ring-2 dark:focus:ring-inset dark:bg-slate-500 dark:text-white focus:border-slate-700 dark:border-none sm:text-sm sm:leading-6"
                placeholder="Find repositories from our source"
                @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
                :value="modelValue"
            />
        </div>
    </div>
</template>
