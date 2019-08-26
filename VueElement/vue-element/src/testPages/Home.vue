<template>
    <div>
        <ul>
            <li
                v-for="(item, index) of articleList"
                :key="index"
            >
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            articleList: []
        }
    },
    methods: {
        onLoad(){
            this.$api.article.articleList({
                type: 'top',
                key: '6f7d1deab30c8d82b42b52a4d71534e9'
            }).then(res => {
                var data = res.data;
                if(data.error_code == 0){
                    this.articleList = data.result.data;
                }
            })
        }
    },
    mounted () {
        this.onLoad();
    }
}
</script>

<style>

</style>

