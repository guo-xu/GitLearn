module.exports = {
    // 运行 vue-cli-service build 时生成的生产环境构建文件的目录
    // 默认build前清除文件夹（构建时传入 --no-clean 可关闭该行为）
    outputDir: 'dist',
    // 放置生成的静态资源(js、css、img、fonts)的(相对于 outputDir 的)目录。
    assetsDir: 'static',
    // 指定生成的 index.html 的输出路径(相对于 outputDir)，也可以是一个绝对路径
    indexPath: 'index.html',
    devServer: {
        proxy:'http://v.juhe.cn/'
    }
}