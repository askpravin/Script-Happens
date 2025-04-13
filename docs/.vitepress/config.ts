import { defineConfig } from 'vitepress'
import { inject } from '@vercel/analytics'

export default defineConfig({
  // ... existing config ...
  buildEnd() {
    inject()
  }
})
