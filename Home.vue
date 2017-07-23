<template>
    <div>
        <div v-for="(item,index) in list" :key="item.id" class="item">
            <img :src="item.img" />
            <p>{{item.name}}</p>
            <i>￥{{item.price}}</i>
            <span @click="addPro">+</span>
            <span @click="reducePro">-</span>
        </div>
    
    </div>
</template>
<script>
import info from '../components/Info'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        //获取数据
        getData: function () {
            // this.$http.get('http://h5.yztctech.net/api/axf/apihomehot.php').then(function (res) {
            //     console.log(res.body);
            //     var retData = res.body;
            //     this.list = JSON.parse(retData).data;
            //     console.log(this.list);
            var $this = this;
            this.$http.get('http://h5.yztctech.net/api/axf/apihomehot.php').then(function (res) {
                console.log(res.data.data);
                $this.list = res.data.data;
            })
        },
        addPro: function () {
            console.log('加加')
        },
        reducePro: function () {
            console.log('减')
        }
    },
    created() {
        this.getData()
    },
    mounted() {

    },
    destroyed() {

    }
}
</script>
<style>
.item img {
    width: 90px;
    height: 90px;
}

.item span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: cyan;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
}
dl{
    text-indent:20px;
}
</style>

