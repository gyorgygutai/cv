import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs/promises';
import path from 'path';

export default function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Process CSS with Tailwind
  eleventyConfig.on('eleventy.before', async () => {
    const inputCss = await fs.readFile('src/css/styles.css', 'utf8');
    const result = await postcss([tailwindcss, autoprefixer]).process(inputCss, {
      from: 'src/css/styles.css',
      to: 'docs/css/styles.css',
    });
    await fs.mkdir('docs/css', { recursive: true });
    await fs.writeFile('docs/css/styles.css', result.css);
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
