// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/reset.css', '~/assets/css/animations.css', '~/assets/css/styles.css'],
    modules: ['@nuxtjs/tailwindcss', 'vue-yandex-maps/nuxt', '@pinia/nuxt'],
    typescript: {
        typeCheck: true
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    yandexMaps: {
        apikey: process.env.YA_API_KEY,
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    imports: {
        dirs: ['utils']
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.STRAPI_URL,
            sender: process.env.MAIL_USERNAME,
            recipient: process.env.MAIL_RECIPIENT,
            prefix: 'uslugi-',
        },
        private: {
            username: process.env.MAIL_USERNAME,
            password: process.env.MAIL_PASSWORD,
        }
    },
})