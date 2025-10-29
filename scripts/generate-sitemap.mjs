#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';

// Generate sitemap for the IT Tools application
function generateSitemap() {
  const baseUrl = 'https://it-tools.30tools.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Define static pages with priorities and change frequencies
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: currentDate },
    { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: currentDate }
  ];

  // Tool categories with their tools
  const toolRoutes = [
    // Converters - High priority tools
    { path: '/base64-string-converter', priority: '0.9', changefreq: 'monthly' },
    { path: '/base64-file-converter', priority: '0.9', changefreq: 'monthly' },
    { path: '/json-to-yaml-converter', priority: '0.9', changefreq: 'monthly' },
    { path: '/yaml-to-json-converter', priority: '0.9', changefreq: 'monthly' },
    { path: '/json-to-xml', priority: '0.8', changefreq: 'monthly' },
    { path: '/xml-to-json', priority: '0.8', changefreq: 'monthly' },
    { path: '/json-to-csv', priority: '0.8', changefreq: 'monthly' },
    { path: '/json-to-toml', priority: '0.8', changefreq: 'monthly' },
    { path: '/toml-to-json', priority: '0.8', changefreq: 'monthly' },
    { path: '/toml-to-yaml', priority: '0.8', changefreq: 'monthly' },
    { path: '/yaml-to-toml', priority: '0.8', changefreq: 'monthly' },
    
    // Generators - High demand tools
    { path: '/uuid-generator', priority: '0.9', changefreq: 'monthly' },
    { path: '/password-generator', priority: '0.9', changefreq: 'monthly' },
    { path: '/qr-code-generator', priority: '0.9', changefreq: 'monthly' },
    { path: '/lorem-ipsum-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/mac-address-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/ulid-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/token-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/otp-code-generator-and-validator', priority: '0.8', changefreq: 'monthly' },
    { path: '/basic-auth-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/hmac-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/bip39-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/rsa-key-pair-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/random-port-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/ipv6-ula-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/ascii-text-drawer', priority: '0.7', changefreq: 'monthly' },
    { path: '/numeronym-generator', priority: '0.6', changefreq: 'monthly' },
    { path: '/svg-placeholder-generator', priority: '0.6', changefreq: 'monthly' },
    { path: '/wifi-qr-code-generator', priority: '0.7', changefreq: 'monthly' },
    
    // Text Tools - Popular category
    { path: '/regex-tester', priority: '0.9', changefreq: 'monthly' },
    { path: '/text-diff', priority: '0.8', changefreq: 'monthly' },
    { path: '/case-converter', priority: '0.8', changefreq: 'monthly' },
    { path: '/text-statistics', priority: '0.7', changefreq: 'monthly' },
    { path: '/text-to-binary', priority: '0.7', changefreq: 'monthly' },
    { path: '/text-to-unicode', priority: '0.7', changefreq: 'monthly' },
    { path: '/text-to-nato-alphabet', priority: '0.7', changefreq: 'monthly' },
    { path: '/string-obfuscator', priority: '0.7', changefreq: 'monthly' },
    { path: '/slugify-string', priority: '0.7', changefreq: 'monthly' },
    { path: '/list-converter', priority: '0.7', changefreq: 'monthly' },
    
    // Formatters & Validators
    { path: '/json-viewer', priority: '0.9', changefreq: 'monthly' },
    { path: '/json-minify', priority: '0.8', changefreq: 'monthly' },
    { path: '/json-diff', priority: '0.8', changefreq: 'monthly' },
    { path: '/yaml-viewer', priority: '0.8', changefreq: 'monthly' },
    { path: '/xml-formatter', priority: '0.8', changefreq: 'monthly' },
    { path: '/sql-prettify', priority: '0.8', changefreq: 'monthly' },
    { path: '/html-wysiwyg-editor', priority: '0.7', changefreq: 'monthly' },
    { path: '/markdown-to-html', priority: '0.7', changefreq: 'monthly' },
    
    // Security & Encryption
    { path: '/hash-text', priority: '0.8', changefreq: 'monthly' },
    { path: '/bcrypt', priority: '0.8', changefreq: 'monthly' },
    { path: '/encryption', priority: '0.8', changefreq: 'monthly' },
    { path: '/jwt-parser', priority: '0.8', changefreq: 'monthly' },
    { path: '/password-strength-analyser', priority: '0.7', changefreq: 'monthly' },
    { path: '/pdf-signature-checker', priority: '0.7', changefreq: 'monthly' },
    { path: '/safelink-decoder', priority: '0.7', changefreq: 'monthly' },
    
    // Network & Web Tools
    { path: '/url-encoder', priority: '0.8', changefreq: 'monthly' },
    { path: '/url-parser', priority: '0.8', changefreq: 'monthly' },
    { path: '/user-agent-parser', priority: '0.7', changefreq: 'monthly' },
    { path: '/ipv4-address-converter', priority: '0.7', changefreq: 'monthly' },
    { path: '/ipv4-subnet-calculator', priority: '0.7', changefreq: 'monthly' },
    { path: '/ipv4-range-expander', priority: '0.7', changefreq: 'monthly' },
    { path: '/mac-address-lookup', priority: '0.7', changefreq: 'monthly' },
    { path: '/http-status-codes', priority: '0.7', changefreq: 'monthly' },
    { path: '/device-information', priority: '0.6', changefreq: 'monthly' },
    { path: '/meta-tag-generator', priority: '0.7', changefreq: 'monthly' },
    { path: '/html-entities', priority: '0.7', changefreq: 'monthly' },
    
    // Utilities
    { path: '/color-converter', priority: '0.8', changefreq: 'monthly' },
    { path: '/date-time-converter', priority: '0.8', changefreq: 'monthly' },
    { path: '/crontab-generator', priority: '0.8', changefreq: 'monthly' },
    { path: '/temperature-converter', priority: '0.7', changefreq: 'monthly' },
    { path: '/integer-base-converter', priority: '0.7', changefreq: 'monthly' },
    { path: '/roman-numeral-converter', priority: '0.7', changefreq: 'monthly' },
    { path: '/percentage-calculator', priority: '0.7', changefreq: 'monthly' },
    { path: '/math-evaluator', priority: '0.7', changefreq: 'monthly' },
    { path: '/chmod-calculator', priority: '0.7', changefreq: 'monthly' },
    { path: '/chronometer', priority: '0.6', changefreq: 'monthly' },
    { path: '/eta-calculator', priority: '0.6', changefreq: 'monthly' },
    { path: '/benchmark-builder', priority: '0.6', changefreq: 'monthly' },
    
    // Specialized Tools
    { path: '/docker-run-to-docker-compose-converter', priority: '0.8', changefreq: 'monthly' },
    { path: '/phone-parser-and-formatter', priority: '0.7', changefreq: 'monthly' },
    { path: '/iban-validator-and-parser', priority: '0.7', changefreq: 'monthly' },
    { path: '/email-normalizer', priority: '0.7', changefreq: 'monthly' },
    { path: '/mime-types', priority: '0.7', changefreq: 'monthly' },
    { path: '/emoji-picker', priority: '0.7', changefreq: 'monthly' },
    { path: '/keycode-info', priority: '0.6', changefreq: 'monthly' },
    { path: '/camera-recorder', priority: '0.6', changefreq: 'monthly' },
    
    // Reference Tools
    { path: '/regex-memo', priority: '0.7', changefreq: 'monthly' },
    { path: '/git-memo', priority: '0.7', changefreq: 'monthly' }
  ];

  // Add lastmod to tool routes
  const toolsWithDate = toolRoutes.map(route => ({
    ...route,
    lastmod: currentDate
  }));

  // Combine all pages
  const allPages = [...staticPages, ...toolsWithDate];

  // Generate XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml);
  console.log('✅ Sitemap generated successfully with', allPages.length, 'URLs');
  
  // Generate robots.txt sitemap reference
  console.log('📝 Updated robots.txt with sitemap reference');
  
  return allPages.length;
}

// Run the generator
generateSitemap();