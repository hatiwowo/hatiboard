
module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.js',
            builderOptions: {
                appId: 'hatiboard',
                productName: 'hatiboard',
                copyright: 'Copyright © 2021',
                mac: {
                    category: 'public.app-category.developer-tools'
                }
            }
        }
    }
}