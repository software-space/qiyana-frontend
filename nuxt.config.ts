/* eslint-disable no-param-reassign */
import { Configuration } from '@nuxt/types';

export default {
  mode: 'universal',

  srcDir: 'src/',

  head: {
    title: 'Qiyana - Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#3b8070' },

  css: [
    '@/assets/scss/main.scss',
  ],

  plugins: [],

  modules: [],

  buildModules: ['@nuxt/typescript-build'],

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },

    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls = {};
      }
    },
  },
} as Configuration;
