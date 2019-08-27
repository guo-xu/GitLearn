import axios from '@/utils/http';//导入http中创建的axios实例
//import qs from 'qs';//根据需求是否导入qs模块

const article = {
    //新闻列表
    articleList (params) {
        return axios.get(`/api/toutiao/index`, {
            params: params
        });
    },


    //其他接口...
}

export default article;