1、创建项目 vue create <name>
2、调整路由
    2.0 安装vue-router： npm i vue-router
    2.1 创建router文件夹，新建index.js
    2.2 在main.js里导入上步创建的router
    2.3 App.vue里加入路由显示区 <router-view />
3、调整axios
    3.0 安装axios: npm i axios
4、使用element-ui
    4.1 安装element-ui
    4.2 在main.js中添加引用：
        import Element from 'element-ui'
        import 'element-ui/lib/theme-chalk/index.css'
        Vue.use(Element);

