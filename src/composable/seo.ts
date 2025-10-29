import { useHead } from '@vueuse/head';

export function useToolSEO(tool: any) {
  const toolUrl = `https://it-tools.30tools.com${tool.path}`;
  
  useHead({
    title: `${tool.name} - Free Online ${tool.category || 'Developer'} Tool | IT Tools`,
    meta: [
      {
        name: 'description',
        content: tool.description || `Free online ${tool.name.toLowerCase()} tool. ${tool.shortDescription || 'No installation required - works entirely in your browser.'}`
      },
      {
        name: 'keywords',
        content: `${tool.name.toLowerCase()}, ${tool.category?.toLowerCase() || 'developer tool'}, online tool, free tool, ${tool.keywords?.join(', ') || 'web tool'}`
      },
      {
        property: 'og:title',
        content: `${tool.name} - Free Online Tool`
      },
      {
        property: 'og:description',
        content: tool.description || `Free online ${tool.name.toLowerCase()} tool. No installation required.`
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: toolUrl
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: tool.name,
          description: tool.description || `Free online ${tool.name.toLowerCase()} tool`,
          url: toolUrl,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          publisher: {
            '@type': 'Organization',
            name: 'IT Tools',
            url: 'https://it-tools.30tools.com'
          },
          softwareRequirements: 'Web Browser',
          browserRequirements: 'Modern web browser with JavaScript support',
          memoryRequirements: 'Minimal',
          storageRequirements: 'None - runs entirely in browser',
          featureList: tool.features || [tool.name],
          category: tool.category || 'Developer Tools',
          isAccessibleForFree: true,
          datePublished: tool.createdAt || '2023-01-01',
          dateModified: tool.updatedAt || new Date().toISOString().split('T')[0]
        })
      }
    ]
  });
}

export function useSEOBreadcrumbs(items: Array<{ name: string; url?: string }>) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://it-tools.30tools.com${item.url}` : undefined
    }))
  };

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(breadcrumbSchema)
      }
    ]
  });
}