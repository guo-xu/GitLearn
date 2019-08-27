module.exports = {
    // 运行 vue-cli-service build 时生成的生产环境构建文件的目录
    // 默认build前清除文件夹（构建时传入 --no-clean 可关闭该行为）
    outputDir: 'dist',
    // 放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录。
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径(相对于 outputDir)，也可以是一个绝对路径
    indexPath: 'index.html',
    devServer: {
        proxy: {
            //例如将路径 localhost:8080/api/xxx 代理到 http://v.juhe.cn/xxx
            //如果不加pathRewrite路径重写， 将会代理到  http://v.juhe.cn/api/xxx
            '/api': {
                target: 'http://v.juhe.cn',
                pathRewrite: {'^/api': ''},   //不想传递 /api，需要重写路径，将前缀 '/api' 转为 '/'
                changeOrigin: true, //将主机标头的原点更改为目标url
                ws: true, //是否代理 websockets
                secure: false, // 是否验证SSL Certs,  https接口需要配置该参数
            }
        }
    }
}