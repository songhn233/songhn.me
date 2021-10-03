<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const handleShare = () => {
  if (typeof window !== 'undefined') {
    try {
      (window.navigator.share as any)({
        title: 'Web Share API Polyfill',
        text: 'A polyfill for the Share API. Use it to share in both desktops and mobile devices.',
        url: window.location.href,
      }, {
        copy: true,
        email: true,
        print: true,
        sms: true,
        messenger: true,
        facebook: true,
        whatsapp: false,
        twitter: true,
        linkedin: true,
        telegram: false,
        skype: true,
        pinterest: false,
        language: 'en',
      })
    }
    catch (e) {
      console.error(e)
    }
  }
}
</script>

<template>
  <div class="max-w-7xl mx-8 flex flex-col items-center select-none justify-center">
    <div class="flex items-center mb-4 <sm:w-full">
      ​<picture
        v-motion
        class="mr-6 cursor-pointer"
        :hovered="{ scale: 1.1 }"
        :initial="{
          scale: 0,
          opacity: 0,
        }"
        :enter="{
          scale: 1,
          opacity: 1,
        }"
      >
        <source
          srcset="https://img.songhn.com/avatar-shn.avif"
          type="image/avif"
          width="80"
          height="80"
          alt="avatar"
          draggable="false"
          class="rounded-full shadow-md shadow-dark-900 dark:shadow-light-900"
        >
        <source
          srcset="https://img.songhn.com/img/avatar-shn.webp"
          type="image/webp"
          width="80"
          height="80"
          alt="avatar"
          draggable="false"
          class="rounded-full shadow-md shadow-dark-900 dark:shadow-light-900"
        >
        <img
          src="https://img.songhn.com/img/avatar-shn.jpeg"
          width="80"
          height="80"
          alt="avatar"
          draggable="false"
          class="rounded-full shadow-md shadow-dark-900 dark:shadow-light-900"
        />
      </picture>
      <div>
        <h1 v-motion-roll-top class="text-2xl font-semibold <sm:(text-left)">
          <span class="<sm:(text-xl)">👏 {{ t('card.plain.hello') }}</span>
          <span class="<sm:(block text-lg)">{{ t('card.plain.me') }}</span>
        </h1>
        <p class="text-left mt-3 pl-1">
          <button
            v-motion-roll-right
            class="icon-btn !outline-none cursor-pointer"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>

          <a v-motion-roll-right class="icon-btn mx-4" :title="t('button.toggle_langs')" :delay="4" @click="toggleLocales">
            <carbon-language />
          </a>
          <button v-motion-roll-right class="icon-btn !outline-none cursor-pointer" :title="t('button.share')" delay="8" @click="handleShare">
            <carbon-share />
          </button>
        </p>
      </div>
    </div>
    <div class="mt-4 text-left w-full pl-6">
      <h2 v-motion-slide-left class="font-semibold text-lg mb-4" :delay="14">
        {{ t('card.about.title') }}
      </h2>
      <p>
        <ul
          v-motion
          class="children:my-2"
          :initial="{
            x: -100,
            opacity: 0,
          }"
          :enter="{
            x: 0,
            opacity: 1,
          }"
          :delay="8"
        >
          <li>
            <span class="mr-2">🎓</span> {{ t('card.about.gra') }}
          </li>
          <li>
            <span class="mr-2">💻</span> {{ t('card.about.web') }}
          </li>
          <li>
            <span class="mr-2">🎈</span> {{ t('card.about.alo') }}
          </li>
        </ul>
      </p>
      <div
        v-motion
        :initial="{
          x: -100,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
        }"
        :delay="8"
      >
        <h2
          class="font-semibold text-lg mb-4 mt-6"
        >
          {{ t('card.love.title') }}
        </h2>
        <p>
          {{ t('card.love.content') }}
        </p>
      </div>
      <div
        v-motion
        :initial="{
          x: -100,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
        }"
        :delay="8"
      >
        <h2 class="font-semibold text-lg mb-4 mt-6">
          {{ t('card.status.title') }}
        </h2>
        <p>
          {{ t('card.status.content') }}
        </p>
      </div>
      <h2
        v-motion
        :initial="{
          x: -100,
          opacity: 0,
        }"
        :enter="{
          x: 0,
          opacity: 1,
        }"
        class="font-semibold text-lg mb-3 mt-6"
        :delay="8"
      >
        {{ t('card.contact.title') }}
      </h2>
      <nav v-motion-pop class="text-base" :delay="14">
        <a
          v-motion-pop
          class="icon-btn mx-2"
          rel="noreferrer"
          href="https://blog.songhn.com"
          target="_blank"
          title="Blog"
          :delay="20"
        >
          <carbon-edit />
        </a>
        <a
          v-motion-pop
          class="icon-btn mx-2"
          rel="noreferrer"
          href="mailto:songhn233@gmail.com"
          target="_blank"
          title="Email"
          :delay="80"
        >
          <carbon-email-new />
        </a>
        <a
          v-motion-pop
          class="icon-btn mx-2"
          rel="noreferrer"
          href="https://github.com/antfu/vitesse"
          target="_blank"
          title="GitHub"
          :delay="140"
        >
          <iconoir-github />
        </a>
        <a
          v-motion-pop
          class="icon-btn mx-2"
          rel="noreferrer"
          href="https://www.zhihu.com/people/song-nan-80-71"
          target="_blank"
          title="Twitter"
          :delay="200"
        >
          <ant-design-zhihu-outlined />
        </a>
      </nav>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
/* global styles reset */
:root {
  background-color: #fff;
}
</style>

<style>
/* share dialog reset */
#shareAPIPolyfill-backdrop {
  backdrop-filter: saturate(180%) blur(8px);
  transition: backdrop-filter 0.2s ease-in-out;
}
</style>
