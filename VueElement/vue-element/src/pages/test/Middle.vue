<template>
    <div class="container">
        <span>非物质文化遗产</span>
        <span>白马寺</span>
    </div>
</template>
<script>
export default{
    name: 'Middle'
}
</script>
<style lang="less" scoped>
    .container{
        height: 150px;
        line-height: 150px;
        background-color: #ff0000;
        span{
            background-color: #0000ff;
            font-size: 18px;
            height: 100px;
            float: right;
            margin-top: 25px;
            line-height: 100px;
        }
        span:first-child{
            background-color: #00ff00;
            font-size: 16px;
            float: left;
        }
    }
</style>