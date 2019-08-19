# Qiyana - Frontend

> **Typescript** Required - Testing: **v3.5.2**

**Frontend site** for advanced analysis of Summoner statistics. Check your KDA, ranking, match results and pro player builds. "If Neeko knows your Shoma, Neeko knows you."

## Requirements

> - [NodeJS](https://nodejs.org/en/download/) - Using: **v10.16.2**
> - [Vue.js](https://vuejs.org/v2/guide/) - **v2.6.x**
> - [Nuxt.js](https://nuxtjs.org/guide) - **v2.8.x**
> - Dependencies:
>   - **nuxt-i18n**: Managing Languages in Vue
>   - **sass**: CSS writing method to aid code productivity
> - Typings:
>   - [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)

## Project Setup

```
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# Validate or fix code with the rules of the extends: plugin:vue/recommended, @vue/airbnb
$ yarn lint

# build for production and launch server
$ yarn build
$ yarn start

# generate static project (root /dist)
$ yarn generate
```

##  Tree

```
.
|   .browserslistrc (versions browsers support)
|   .editorconfig
|   .eslintrc.js
|   .gitignore
|   nuxt.config.ts (Nuxt CLI)
|   package.json
|   tsconfig.json (ts-node)
|
\---src
    +---assets (medias)
    +---components
    +---lang (i18n)
    +---layouts
    +---middleware
    +---mixins
    +---pages (route '/')
    +---plugins
    +---static (favicon.ico)
    +---store (Vuex)
    \---utils
```

For more details visit the site: [Directory Structure - Nuxt.js](https://nuxtjs.org/guide/directory-structure/)

## License

> Apache-2.0

Copyright © 2019