<script setup lang="ts">
interface ErrorProps {
    errorMessage: string;
}

defineProps<ErrorProps>();
</script>

<template>
    <div
        class="w-full h-screen px-3 border-4 border-red-400 rounded-lg text-red-400 flex justify-center items-center text-center text-4xl font-semibold"
    >
        Servrer respond with error: {{ errorMessage }}. Please, reload the page
        or try to visit us later.
    </div>
</template>
