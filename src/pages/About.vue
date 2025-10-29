<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ 
  title: 'About IT Tools - Free Online Developer Tools Collection',
  meta: [
    {
      name: 'description',
      content: 'Learn about IT Tools - a free, open-source collection of 100+ online developer tools. Privacy-first, no installation required, works entirely in your browser.'
    },
    {
      name: 'keywords',
      content: 'about it tools, developer tools, online tools, open source, privacy, free tools, web development'
    },
    {
      property: 'og:title',
      content: 'About IT Tools - Free Developer Tools Collection'
    },
    {
      property: 'og:description',
      content: 'Learn about IT Tools - a free, open-source collection of 100+ online developer tools. Privacy-first, no installation required.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://it-tools.30tools.com/about'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is IT Tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IT Tools is a free, open-source collection of over 100 online developer tools including JSON formatters, Base64 converters, UUID generators, regex testers, encryption tools, and more. All tools work entirely in your browser with no installation required.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is IT Tools free to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, IT Tools is completely free to use. All tools are available without any cost, registration, or subscription. The project is open-source and will remain free forever.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need to install anything?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No installation required. All tools run entirely in your web browser. You just need a modern browser with JavaScript enabled to use any of the tools.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is my data safe and private?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, your data is completely safe. All processing happens locally in your browser - no data is sent to any server. Your information never leaves your device, ensuring complete privacy and security.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I use IT Tools offline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Many tools can work offline once the page is loaded, thanks to our Progressive Web App (PWA) technology. You can add IT Tools to your home screen and use it like a native app.'
            }
          },
          {
            '@type': 'Question',
            name: 'How often are new tools added?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We regularly add new tools based on user feedback and common developer needs. The project is open-source, so community contributions help us expand the collection continuously.'
            }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'IT Tools',
        url: 'https://it-tools.30tools.com',
        description: 'Free collection of 100+ online developer tools',
        founder: {
          '@type': 'Person',
          name: 'Corentin Thomasset'
        },
        sameAs: [
          'https://github.com/CorentinTh/it-tools',
          'https://x.com/ittoolsdottech'
        ],
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser'
      })
    }
  ]
});
</script>

<template>
  <div class="about-page">
    <!-- SEO-friendly content structure -->
    <header class="hero-section mb-8 text-center max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
        About IT Tools
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
        Your privacy-first, free collection of essential developer tools
      </p>
    </header>

    <div class="max-w-4xl mx-auto px-4">
      <!-- What is IT Tools Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">
          What is IT Tools?
        </h2>
        <p class="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
          IT Tools is a comprehensive collection of over 100 free online developer tools designed to boost your productivity. 
          From JSON formatters and Base64 converters to UUID generators and regex testers, we provide essential utilities 
          that every developer needs in their daily workflow.
        </p>
        <p class="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
          All tools are completely free, require no installation, and work entirely in your browser. 
          Your data stays private and secure since all processing happens locally on your device.
        </p>
      </section>

      <!-- Key Features Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">
          Why Choose IT Tools?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🔒 Privacy First</h3>
            <p class="text-neutral-600 dark:text-neutral-400">All processing happens locally in your browser. No data is ever sent to our servers.</p>
          </div>
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">💰 Completely Free</h3>
            <p class="text-neutral-600 dark:text-neutral-400">No hidden costs, no premium features, no subscriptions. Everything is free forever.</p>
          </div>
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🚀 No Installation</h3>
            <p class="text-neutral-600 dark:text-neutral-400">Works in any modern browser. No downloads, installations, or registrations required.</p>
          </div>
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">📱 Mobile Friendly</h3>
            <p class="text-neutral-600 dark:text-neutral-400">Responsive design works perfectly on desktop, tablet, and mobile devices.</p>
          </div>
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🌐 Works Offline</h3>
            <p class="text-neutral-600 dark:text-neutral-400">Progressive Web App technology allows many tools to work even without internet.</p>
          </div>
          <div class="feature-card p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">🔧 Open Source</h3>
            <p class="text-neutral-600 dark:text-neutral-400">Transparent, community-driven development. Contribute on GitHub!</p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-6">
          Frequently Asked Questions
        </h2>
        <div class="space-y-6">
          <div class="faq-item">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              Is my data safe and private?
            </h3>
            <p class="text-neutral-600 dark:text-neutral-300">
              Absolutely! All processing happens locally in your browser. No data is sent to any server, 
              ensuring complete privacy and security. Your information never leaves your device.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              Do I need to create an account?
            </h3>
            <p class="text-neutral-600 dark:text-neutral-300">
              No registration required! You can use all tools immediately without creating any account 
              or providing personal information.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              Can I use these tools for commercial projects?
            </h3>
            <p class="text-neutral-600 dark:text-neutral-300">
              Yes! IT Tools is completely free for personal and commercial use. There are no restrictions 
              on how you use the tools in your projects.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
              How can I contribute or suggest new tools?
            </h3>
            <p class="text-neutral-600 dark:text-neutral-300">
              IT Tools is open source! You can contribute on GitHub, suggest new tools, or report issues. 
              Community contributions help make the platform better for everyone.
            </p>
          </div>
        </div>
      </section>

      <!-- Original content fallback -->
      <section class="mb-12">
        <c-markdown :markdown="$t('about.content')" />
      </section>
    </div>
  </div>
</template>
