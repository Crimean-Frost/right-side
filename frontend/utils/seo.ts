import type {Seo} from "~/types/responses/seo/seo";


export default (baseUrl: string, seo?: Seo, article: boolean = false) => {
    const title = seo?.metaTitle || 'Right Side'
    const description = seo?.metaDescription || ''
    const preview = seo?.preview?.url || ''
    const bigImage = preview !== '' ? baseUrl + preview : preview
    const previewMobile = seo?.previewMobile?.url || ''
    const smallImage = previewMobile !== '' ? baseUrl + previewMobile : previewMobile

    return useHead({
        title: title,
        meta: [{
            name: "description",
            content: description
        },
            {
                property: "og:url", content: ''
            },
            {
                property: "og:title", content: title
            },
            {
                property: "og:description", content: description
            },
            {
                property: "og:image", content: bigImage
            },
            {
                property: "og:type", content: article ? 'article' : 'website'
            },
            {
                property: "og:locale", content: 'ru_RU'
            },
            {
                property: "og:alt", content: 'Right Side'
            },
            {
                property: "og:image:type", content: 'image/png'
            },
            {
                property: "og:image:width", content: '1200'
            },
            {
                property: "og:image:height", content: '630'
            },
            {
                property: "og:image:secure_url", content: bigImage
            },
            {
                property: "vk:image", content: smallImage
            },
            {
                name: "twitter:title",
                content: title
            },
            {
                name: "twitter:description",
                content: description
            },
            {
                name: "twitter:card",
                content: 'summary_large_image'
            },
            {
                name: "twitter:image",
                content: bigImage
            },
            {
                name: "twitter:card",
                content: 'summary_large_image'
            }
        ],
    })
}