import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { writeFileSync } from 'node:fs';

function generateFile({ host }: { host:string }) {
  return {
    name: 'generate-file-plugin', // Plugin name
    buildStart() {
      const content = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${host}</loc>
          <lastmod>${new Date().toISOString().split('T')[0] }</lastmod>
          <priority>1.0</priority>
        </url>
      </urlset>`;

      const filePath = './public/sitemap.xml';

      writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ File generated: ${filePath}`);
    },
  };
}


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generateFile({ host: "https://g9insane.github.io/" })
  ],
})
