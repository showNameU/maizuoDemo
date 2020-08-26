<template>
    <div class="cinema" :style="mystyle">
        <ul>
            <li v-for="d in datalist" :key="d.cinemaId">
               <p>{{d.name}}</p>
        <p class="fontP">
            <font>{{d.address.length>20 ? d.address.substring(0,20)+'..' :(d.address)}}</font>
        <span>距离未知</span></p>
            </li>
        </ul>
        
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'//引入滚动条组件
export default {
    data(){
        return {
            datalist:[],//所有的影院信息
            mystyle:{
                height: '0px'
            }
        }
    },
    mounted(){
        this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2438289',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"159098252976626511527938","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // console.log(res.data.data.cinemas)
            this.datalist = res.data.data.cinemas
            //$nextTick中的匿名函数将会在DOM更新以后执行
            this.$nextTick(() => {
                //使用BetterScroll组件，更好的实现滚动
                new BetterScroll('.cinema',{
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增
                    }
                })
            })
        })
    }
}
</script>
<style lang="scss" scoped>
.center{
        text-align: center;
    }
    .maginD{
        margin: 10px;
    }
    .fontP{
        color:rgba(8, 8, 14, 0.479);
        font-size: 12px;
        span{
            float: right;
        }
        font {
            width:5px;
            height: 10px;
        }
    }
    .cinema{
        overflow: hidden;
        position: relative;
    }
li {
    height: 50px;
    padding: 0 10px 0 10px;
}
.cinema {
    overflow: hidden;//清除浮动
    position: relative;//解决滚动条和内容错位的BUG
}
</style>