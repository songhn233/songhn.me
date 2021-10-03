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
        title: 'Songhn Personal Card',
        text: 'Songhn personal homepage card, share my information and contact methods',
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
    <div class="flex items-center mb-4 <sm:w-full pl-6">
      ​<picture
        class="mr-6 cursor-pointer"
        data-aos="zoom-in"
        data-aos-duration="500"
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
        <h1 class="text-2xl font-semibold <sm:(text-left)" data-aos="fade-left" data-aos-delay="50">
          <span class="<sm:(text-xl)">👏 {{ t('card.plain.hello') }}</span>
          <span class="<sm:(block text-lg)">{{ t('card.plain.me') }}</span>
        </h1>
        <p class="text-left mt-3 pl-1">
          <button
            class="icon-btn !outline-none cursor-pointer"
            :title="t('button.toggle_dark')"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="800"
            @click="toggleDark()"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>

          <a
            class="icon-btn mx-4"
            :title="t('button.toggle_langs')"
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-duration="800"
            @click="toggleLocales"
          >
            <carbon-language />
          </a>
          <button
            class="icon-btn !outline-none cursor-pointer"
            :title="t('button.share')"
            data-aos="flip-left"
            data-aos-delay="350"
            data-aos-duration="800"
            @click="handleShare"
          >
            <carbon-share />
          </button>
        </p>
      </div>
    </div>
    <div class="mt-4 text-left w-full pl-12 <sm:(pl-6)">
      <div data-aos="fade-right" data-aos-duration="1000" class="mb-8">
        <h2 class="font-semibold text-lg mb-4 <sm:(text-base)">
          {{ t('card.about.title') }}
        </h2>
        <p>
          <ul class="children:my-2">
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
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mb-8">
        <h2
          class="font-semibold text-lg mb-4 mt-6 <sm:(text-base)"
        >
          {{ t('card.love.title') }}
        </h2>
        <p>
          {{ t('card.love.content') }}
        </p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" class="mb-8">
        <h2 class="font-semibold text-lg mb-4 mt-6 <sm:(text-base)">
          {{ t('card.status.title') }}
        </h2>
        <p>
          {{ t('card.status.content') }}
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mb-8">
        <h2
          class="font-semibold text-lg mb-3 mt-6 <sm:(text-base)"
        >
          {{ t('card.contact.title') }}
        </h2>
        <nav class="text-base">
          <a
            class="icon-btn mx-2"
            rel="noreferrer"
            href="https://blog.songhn.com"
            target="_blank"
            title="Blog"
          >
            <carbon-edit />
          </a>
          <a
            class="icon-btn mx-2"
            rel="noreferrer"
            href="mailto:songhn233@gmail.com"
            target="_blank"
            title="Email"
          >
            <carbon-email-new />
          </a>
          <a
            class="icon-btn mx-2"
            rel="noreferrer"
            href="https://github.com/songhn233"
            target="_blank"
            title="GitHub"
          >
            <iconoir-github />
          </a>
          <a
            class="icon-btn mx-2"
            rel="noreferrer"
            href="https://www.zhihu.com/people/song-nan-80-71"
            target="_blank"
            title="Twitter"
          >
            <ant-design-zhihu-outlined />
          </a>
        </nav>
      </div>
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
