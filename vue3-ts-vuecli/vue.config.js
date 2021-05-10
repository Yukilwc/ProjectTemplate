module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/styles/tools.scss";`
            }
        }
    }
}