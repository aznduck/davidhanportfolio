import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { buildLlmsTxt } from './src/lib/llms.ts'

// Serves /llms.txt in dev and emits it into dist on build, generated from content.ts.
function llmsTxt(): Plugin {
  return {
    name: 'llms-txt',
    configureServer(server) {
      server.middlewares.use('/llms.txt', async (_req, res) => {
        const mod = await server.ssrLoadModule('/src/lib/llms.ts')
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(mod.buildLlmsTxt())
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: buildLlmsTxt() })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), llmsTxt()],
})
