#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';

// Generate IndexNow submission for Bing
function generateIndexNow() {
  const baseUrl = 'https://it-tools.30tools.com';
  
  // Generate a simple key for IndexNow (in production, you'd want a proper API key)
  const indexNowKey = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
  
  // Important URLs to submit to IndexNow
  const urls = [
    '/',
    '/about',
    '/base64-string-converter',
    '/base64-file-converter', 
    '/json-viewer',
    '/json-to-yaml-converter',
    '/yaml-to-json-converter',
    '/uuid-generator',
    '/password-generator',
    '/qr-code-generator',
    '/regex-tester',
    '/hash-text',
    '/encryption',
    '/jwt-parser',
    '/url-encoder',
    '/color-converter',
    '/text-diff',
    '/json-diff',
    '/json-minify',
    '/markdown-to-html'
  ];

  // Create IndexNow key file
  writeFileSync(join(process.cwd(), 'public', `${indexNowKey}.txt`), indexNowKey);
  
  // Create IndexNow submission function
  const indexNowSubmission = {
    host: 'it-tools.30tools.com',
    key: indexNowKey,
    keyLocation: `${baseUrl}/${indexNowKey}.txt`,
    urlList: urls.map(path => `${baseUrl}${path}`)
  };
  
  // Save IndexNow data
  writeFileSync(
    join(process.cwd(), 'public', 'indexnow.json'), 
    JSON.stringify(indexNowSubmission, null, 2)
  );
  
  console.log('✅ IndexNow key and submission file generated');
  console.log(`📝 Key file: ${indexNowKey}.txt`);
  console.log(`📊 URLs to submit: ${urls.length}`);
  
  // Submit to IndexNow API (you would call this after deployment)
  console.log('\n🚀 To submit URLs to IndexNow after deployment, use:');
  console.log(`curl -X POST "https://api.indexnow.org/indexnow" \\`);
  console.log(`  -H "Content-Type: application/json" \\`);
  console.log(`  -d '${JSON.stringify(indexNowSubmission)}'`);
  
  return indexNowSubmission;
}

// Run the generator
generateIndexNow();