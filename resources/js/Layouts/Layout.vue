<script setup>
import Layout from '@/Layouts/Layout.vue';
import {Head, Link} from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
            <Link :href="route('test')"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
            >
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                     preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path
                            d="M30 579 c0 -16 4 -19 20 -14 15 5 18 3 14 -9 -5 -12 -2 -15 10 -10 12 5 15 2 10 -10 -5 -12 -2 -15 10 -10 12 5 15 2 10 -10 -3 -9 -1 -16 4 -16 23 0 20 18 -8 45 -17 16 -30 35 -30 42 0 7 -9 13 -20 13 -14 0 -20 -7 -20 -21z"/>
                        <path d="M572 583 c5 -26 38 -29 38 -4 0 15 -6 21 -21 21 -14 0 -19 -5 -17 -17z"/>
                        <path
                            d="M536 541 c-24 -25 -26 -41 -3 -41 5 0 7 7 4 14 -4 11 -1 13 10 9 12 -5 15 -2 10 10 -4 11 -2 14 9 10 7 -3 14 0 14 5 0 23 -18 20 -44 -7z"/>
                        <path d="M117 490 l-42 -41 37 17 c20 9 41 27 47 40 15 33 7 30 -42 -16z"/>
                        <path d="M482 506 c9 -22 56 -56 76 -56 9 0 -32 41 -61 62 l-27 20 12 -26z"/>
                        <path d="M145 470 c-9 -15 44 -80 61 -73 20 7 18 17 -12 52 -27 33 -39 38 -49 21z"/>
                        <path
                            d="M446 444 c-23 -29 -26 -38 -15 -45 10 -7 22 0 42 23 15 18 26 37 24 42 -7 21 -23 14 -51 -20z"/>
                        <path
                            d="M240 427 c0 -28 -17 -47 -43 -47 -17 0 -19 -5 -12 -47 10 -69 40 -143 76 -186 33 -40 48 -47 45 -19 0 9 6 17 14 17 8 0 14 -8 14 -17 -2 -26 10 -22 45 14 35 36 67 113 77 186 6 47 5 50 -19 56 -18 4 -27 15 -32 36 l-7 30 -79 0 c-76 0 -79 -1 -79 -23z m100 -2 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z m40 -50 c5 -14 17 -25 26 -25 35 0 -15 -146 -59 -175 -45 -29 -87 10 -113 107 -18 68 -18 68 6 68 13 0 20 7 20 18 0 28 9 32 62 32 43 0 50 -3 58 -25z"/>
                        <path
                            d="M270 365 c0 -9 -7 -18 -15 -21 -32 -13 -14 -84 21 -84 23 0 24 3 24 60 0 47 -3 60 -15 60 -8 0 -15 -7 -15 -15z"/>
                        <path
                            d="M320 315 c-5 -68 -6 -70 -35 -76 l-30 -7 32 -1 c27 -1 32 -5 36 -28 l4 -28 2 27 c1 21 7 28 29 31 l27 4 -27 2 c-27 1 -27 3 -30 74 l-4 72 -4 -70z"/>
                        <path
                            d="M340 320 c0 -57 1 -60 25 -60 19 0 26 7 31 28 3 15 7 32 9 39 2 6 -5 13 -16 16 -10 3 -19 12 -19 21 0 9 -7 16 -15 16 -12 0 -15 -13 -15 -60z"/>
                        <path d="M270 216 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16 -8 0 -15 -2 -15 -4z"/>
                        <path d="M340 205 c0 -8 4 -15 9 -15 5 0 11 7 15 15 3 9 0 15 -9 15 -8 0 -15 -7 -15 -15z"/>
                        <path
                            d="M158 145 c-42 -46 -77 -105 -62 -105 19 0 121 93 132 119 1 4 -3 14 -10 23 -12 14 -18 10 -60 -37z m13 -18 l-23 -22 17 28 c10 15 20 25 23 22 3 -3 -5 -16 -17 -28z"/>
                        <path
                            d="M425 181 c-5 -17 3 -33 30 -67 32 -39 95 -85 95 -69 0 22 -35 77 -73 114 -42 41 -45 42 -52 22z"/>
                    </g>
                </svg>

                <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Lineage 2 Maphr</span
                >
            </link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>

                    <Link :href="route('home')" aria-label="Blog"
                          title="Blog"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link :href="route('test')" aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Statistics
                    </Link>
                </li>
            </ul>
            <div class="lg:hidden">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    @click="isMenuOpen = true"
                >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        ></path>
                    </svg>
                </button>
                <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
                    <div class="p-5 bg-white border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <div>
                                <a
                                    href="/"
                                    aria-label="Company"
                                    title="Company"
                                    class="inline-flex items-center"
                                >
                                    <svg
                                        class="w-8 text-deep-purple-accent-400"
                                        viewBox="0 0 24 24"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke="currentColor"
                                        fill="none"
                                    >
                                        <rect x="3" y="1" width="7" height="12"></rect>
                                        <rect x="3" y="17" width="7" height="6"></rect>
                                        <rect x="14" y="1" width="7" height="6"></rect>
                                        <rect x="14" y="11" width="7" height="12"></rect>
                                    </svg>
                                    <span
                                        class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                                    >Company</span
                                    >
                                </a>
                            </div>
                            <div>
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    @click="isMenuOpen = false"
                                >
                                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul class="space-y-4">
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >Product</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >Features</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Product pricing"
                                        title="Product pricing"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >Pricing</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="About us"
                                        title="About us"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >About us</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Sign up
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col justify-between lg:flex-row">
            <div class="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div class="max-w-xl mb-6">
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Lineage 2 Chronicle 5:<br class="hidden md:block"/>
                        Oath of Blood -
                        <span class="inline-block text-deep-purple-accent-400">Remastered</span>
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                    </p>
                </div>
                <hr class="mb-6 border-gray-300"/>
                <div>
                    <h2 class="sr-only">Steps</h2>

                    <div>
                        <div class="overflow-hidden rounded-full bg-gray-200">
                            <div class="h-2 w-20 rounded-full bg-deep-purple-accent-400"></div>
                        </div>

                        <ol class="mt-4 grid grid-cols-4 text-sm font-medium text-gray-500">
                            <li class="flex items-center justify-start">
                                <span> 20 lvl </span>
                            </li>

                            <li class="flex items-center justify-items-center">
                                <span> 40 lvl </span>
                            </li>

                            <li class="flex items-center justify-items-center">
                                <span> 60 lvl </span>
                            </li>

                            <li class="flex items-center justify-end">
                                <span> 80 lvl </span>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
            <div class="px-5 pt-6 pb-5 text-center rounded lg:w-2/5">
                <div class="pb-5">
                    <div class="flex justify-between mb-1">
                        <span class="text-base font-medium text-gray-900 dark:text-white">Bartz x10</span>
                        <span class="text-sm font-medium text-gray-900 dark:text-white">235</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-deep-purple-accent-400 h-2.5 rounded-full" style="width: 78%"></div>
                    </div>
                </div>
                <div class="pb-5">
                    <div class="flex justify-between mb-1">
                        <span class="text-base font-medium text-gray-900 dark:text-white">Sieghardt x1</span>
                        <span class="text-sm font-medium text-gray-900 dark:text-white">11</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-gray-900 h-2.5 rounded-full" style="width: 22%"></div>
                    </div>
                </div>
                <div class="pb-5">
                    <div class="flex justify-between mb-1">
                        <span class="text-base font-medium text-gray-900 dark:text-white">Kain x15</span>
                        <span class="text-sm font-medium text-gray-900 dark:text-white">433</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-gray-900 h-2.5 rounded-full" style="width: 97%"></div>
                    </div>
                </div>
                <div class="pb-2">
                    <div class="flex justify-between mb-1">
                        <span class="text-base font-medium text-gray-900 dark:text-white">Lionna x100</span>
                        <span class="text-sm font-medium text-gray-900 dark:text-white">66</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-gray-900 h-2.5 rounded-full" style="width: 97%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <slot/>
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">


        <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div class="md:max-w-md lg:col-span-2">
                <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                    <svg class="w-8 text-gray-900" viewBox="0 0 24 24" stroke-linejoin="round"
                         stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor"
                         fill="none">
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
                </a>
                <div class="mt-4 lg:max-w-sm">
                    <p class="text-sm text-gray-800">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.
                    </p>
                    <p class="mt-4 text-sm text-gray-800">
                        Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Category</p>
                    <ul class="mt-2 space-y-2">
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-gray-900">News</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-gray-900">World</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Games</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">References</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Business</p>
                    <ul class="mt-2 space-y-2">
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Web</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">eCommerce</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Business</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Entertainment</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Apples</p>
                    <ul class="mt-2 space-y-2">
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Media</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Brochure</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Nonprofit</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Educational</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Projects</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Cherry</p>
                    <ul class="mt-2 space-y-2">
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Infopreneur</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Personal</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Wiki</a>
                        </li>
                        <li>
                            <a href="/"
                               class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Forum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
            <p class="text-sm text-gray-600">
                © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
            <div class="flex items-center mt-4 space-x-4 sm:mt-0">
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                        <path
                            d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                        ></path>
                    </svg>
                </a>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                        <circle cx="15" cy="15" r="4"></circle>
                        <path
                            d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                        ></path>
                    </svg>
                </a>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                        <path
                            d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
};

</script>
