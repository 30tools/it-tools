<script setup lang="ts">
import { IconDragDrop, IconHeart } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ColoredCard from '../components/ColoredCard.vue';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';
import { config } from '@/config';

const toolStore = useToolStore();

useHead({ 
  title: 'IT Tools - 100+ Free Online Developer Tools Collection 2024',
  meta: [
    {
      name: 'description',
      content: 'Free collection of 100+ online developer tools: JSON formatter, Base64 converter, UUID generator, regex tester, encryption tools, color converter and more. No installation required.'
    },
    {
      name: 'keywords',
      content: 'developer tools, online tools, JSON formatter, Base64 converter, UUID generator, regex tester, encryption, color converter, developer productivity, programming tools, free tools, web developer tools, coding tools'
    },
    {
      property: 'og:title',
      content: 'IT Tools - 100+ Free Online Developer Tools Collection 2024'
    },
    {
      property: 'og:description',
      content: 'Free collection of 100+ online developer tools: JSON formatter, Base64 converter, UUID generator, regex tester, encryption tools, color converter and more. No installation required.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://it-tools.30tools.com'
    }
  ]
});
const { t } = useI18n();

const favoriteTools = computed(() => toolStore.favoriteTools);

// Update favorite tools order when drag is finished
function onUpdateFavoriteTools() {
  toolStore.updateFavoriteTools(favoriteTools.value); // Update the store with the new order
}
</script>

<template>
  <div class="pt-50px">
    <!-- SEO-friendly hero section -->
    <header class="hero-section mb-8 text-center max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
        100+ Free Online Developer Tools
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
        Essential collection of web-based developer tools including JSON formatter, Base64 converter, 
        UUID generator, regex tester, encryption utilities, and color converters. No installation required - 
        works entirely in your browser.
      </p>
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
          100% Free
        </span>
        <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
          No Installation
        </span>
        <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
          Open Source
        </span>
        <span class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-3 py-1 rounded-full text-sm font-medium">
          Privacy First
        </span>
      </div>
    </header>

    <!-- Tool Categories Section -->
    <section class="tool-categories mb-12">
      <div class="grid-wrapper">
        <h2 class="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-6 text-center">
          📁 Browse Tools by Category
        </h2>
        <div class="categories-grid grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 mb-8">
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🔄 Converters & Formatters</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">JSON, XML, YAML, Base64, and more format converters</p>
          </div>
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🎲 Generators</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">UUID, passwords, QR codes, and random data generators</p>
          </div>
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🔒 Security & Encryption</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Hash, encrypt, JWT parser, and security tools</p>
          </div>
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">📝 Text Processing</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Text analysis, diff, regex testing, and manipulation</p>
          </div>
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🌐 Network & Web</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">URL parsing, IP tools, HTTP status codes</p>
          </div>
          <div class="category-card p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🧮 Math & Utilities</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Calculators, converters, and utility tools</p>
          </div>
        </div>
      </div>
    </section>

    <div class="grid-wrapper">
      <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        <ColoredCard v-if="config.showBanner" :title="$t('home.follow.title')" :icon="IconHeart">
          {{ $t('home.follow.p1') }}
          <a
            href="https://github.com/CorentinTh/it-tools"
            rel="noopener"
            target="_blank"
            :aria-label="$t('home.follow.githubRepository')"
          >GitHub</a>
          {{ $t('home.follow.p2') }}
          <a
            href="https://x.com/ittoolsdottech"
            rel="noopener"
            target="_blank"
            :aria-label="$t('home.follow.twitterXAccount')"
          >X</a>.
          {{ $t('home.follow.thankYou') }}
          <n-icon :component="IconHeart" />
        </ColoredCard>
      </div>

      <transition name="height">
        <section v-if="toolStore.favoriteTools.length > 0" class="favorite-tools">
          <h2 class="mb-5px mt-25px text-neutral-400 font-500">
            {{ $t('home.categories.favoriteTools') }}
            <c-tooltip :tooltip="$t('home.categories.favoritesDndToolTip')">
              <n-icon :component="IconDragDrop" size="18" />
            </c-tooltip>
          </h2>
          <Draggable
            :list="favoriteTools"
            class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4"
            ghost-class="ghost-favorites-draggable"
            item-key="name"
            @end="onUpdateFavoriteTools"
          >
            <template #item="{ element: tool }">
              <ToolCard :tool="tool" />
            </template>
          </Draggable>
        </section>
      </transition>

      <section v-if="toolStore.newTools.length > 0" class="newest-tools">
        <h2 class="mb-5px mt-25px text-neutral-400 font-500">
          {{ t('home.categories.newestTools') }}
        </h2>
        <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </section>

      <section class="all-tools">
        <h2 class="mb-5px mt-25px text-neutral-400 font-500">
          {{ $t('home.categories.allTools') }}
        </h2>
        <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="less">
.height-enter-active,
.height-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 500px;
}

.height-enter-from,
.height-leave-to {
  max-height: 42px;
  overflow: hidden;
  opacity: 0;
  margin-bottom: 0;
}

.ghost-favorites-draggable {
  opacity: 0.4;
  background-color: #ccc;
  border: 2px dashed #666;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  animation: ghost-favorites-draggable-animation 0.2s ease-out;
}

@keyframes ghost-favorites-draggable-animation {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 0.4;
    transform: scale(1.0);
  }
}
</style>
