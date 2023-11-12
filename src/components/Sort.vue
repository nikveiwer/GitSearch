<script setup lang="ts" generic="T extends {[key: string]: string}">
interface SortProps {
    label: string;
    options: T;
    id: string;
    modelValue: keyof T;
}

defineProps<SortProps>();

defineEmits<{
    updateModelValue: [value: keyof T];
}>();
</script>

<template>
    <div>
        <label :for="id" class="block mb-2 text-sm font-medium text-gray-400">{{
            label
        }}</label>
        <select
            :value="modelValue"
            :id="id"
            class="min-w-[115px] bg-gray-50 border-2 border-gray-300 text-slate-700 text-sm rounded-lg outline-none focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-slate-500 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400"
            @change="
                $emit(
                    'updateModelValue',
                    ($event.target as HTMLSelectElement).value
                )
            "
        >
            <option v-for="(value, key) in options" :value="key">
                {{ value }}
            </option>
        </select>
    </div>
</template>
