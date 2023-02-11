<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Link :href="route('home')" class="text-black-50 text-gray-800 dark:text-gray-500 underline">go to home page</Link>
</template>
