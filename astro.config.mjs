import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
    site: 'https://laidlawopera.co.uk/',
    integrations: [
        react(),
        tailwind(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
})
