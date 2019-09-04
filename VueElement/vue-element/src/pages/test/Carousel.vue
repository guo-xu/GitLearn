<template>
    <div class="carouselMain">
        <el-carousel
            :autoplay="autoplay"
            @change="carouselChange"
            height="180px"
            trigger="click"
            indicator-position="outside"
        >
            <el-carousel-item
                v-for="item in itemLen"
                :key="item.index"
            >
                <el-row :gutter="20">
                    <el-col
                        :span="8"
                        v-for="innerItem in showList"
                        :key="innerItem.index">
                        <div class="eachItem">
                            {{innerItem.name}}
                        </div>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: 'Carousel',
    data () {
        return {
            autoplay:false,
            itemLen: 0,
            eachRowShowNum: 3, //每行展示几项
            list: [{
                "index": "0",
                "name": "0"
            }, {
                "index": "1",
                "name": "1"
            }, {
                "index": "2",
                "name": "2"
            }, {
                "index": "3",
                "name": "3"
            }, {
                "index": "4",
                "name": "4"
            }],
            showList:[]
        }
    },
    methods: {
        carouselChange (nowIndex, oldIndex){
            console.log("nowIndex: " + nowIndex + "; oldIndex: " + oldIndex);
            this.showList = this.list.slice(nowIndex*this.eachRowShowNum, (nowIndex+1)*this.eachRowShowNum)
        }
    },
    mounted () {
        this.itemLen = Math.ceil(this.list.length / this.eachRowShowNum);
        this.showList = this.list.slice(0, this.eachRowShowNum)
    }
}
</script>
<style lang="less" scoped>
.carouselMain{
    .el-row{
        height: 100%;
        .el-col-8{
            height: 100%;
            .eachItem{
                height: 100%;
                background-color:aquamarine;
            }
        }
    }
}
</style>