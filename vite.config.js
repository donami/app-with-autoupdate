import { defineConfig } from 'vite';
import pkgJson from './package.json';

const webprovisionsPackageVitePlugin = ({ name }) => {
  const outputEntryFile = 'index.js';
  const outputDir = 'dist';
  const packageName = name.replace('@webprovisions-registry/', '');

  return {
    name: 'webprovisions-package',
    async config(config) {
      return {
        ...config,
        base: './',
        build: {
          ...config?.build,
          assetsDir: packageName,
          rollupOptions: {
            ...config?.build?.rollupOptions,
            output: {
              ...config?.build?.rollupOptions?.output,
              dir: outputDir,
              entryFileNames: outputEntryFile,
              format: 'es',
              chunkFileNames: `${packageName}/[name]-[hash].js`,
            },
          },
        },
      };
    },
  };
};

export default defineConfig({
  plugins: [webprovisionsPackageVitePlugin(pkgJson)],
  build: {
    rollupOptions: {
      input: 'index.js',
    },
  },
});

// export default defineConfig({
//   //   publicDir: '/test/',
//   //   base: '/test/',
//   // experimental: {
//   //   renderBuiltUrl(filename, { hostType }) {
//   //     console.log('filename', filename);

//   //     return 'https://www.domain.com/' + filename;
//   //     //   return {
//   //     //     relative: true,
//   //     //   };
//   //   },
//   // },
//   base: 'http://google.com/',
//   build: {
//     rollupOptions: {
//       input: './index.js',
//       output: {
//         dir: 'dist',
//         inlineDynamicImports: true,
//         entryFileNames: 'index.js',
//         format: 'es',
//       },
//     },
//   },
// });
