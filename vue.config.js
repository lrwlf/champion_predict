module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    outputDir: 'champion_predict',
    devServer: {
        proxy: {
            '/champion_predict': {
                target: 'http://cdwc.org.cn/champion_predict',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            },
        }
    },
}