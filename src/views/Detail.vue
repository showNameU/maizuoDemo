<template>
    <div>
        <div v-if="filminfo" class="bigC">
            <div class="divC">
            <div class="goback"><a href="/film/nowplaying"><i class="iconfont icon-back"></i></a></div>
            <img :src="filminfo.poster" class="poster"/>
            <div class="paddingLR">
            {{filminfo.name}}
            <span class="itemname">{{filminfo.item.name}}</span>
             <span class="showRight">   {{filminfo.grade}}</span>
            <p>{{filminfo.category}}</p>
            <p>{{filminfo.nation}}|{{filminfo.runtime}}</p>
            <p>&nbsp;</p>
            </div>
            <!-- <p>{{filminfo.synopsis}}</p> -->
            <div class="divC">
            <h3>演职人员</h3>
        <swiper perview="3" class="actorswiper" myclassname="actorswiper">
            <div  v-for="(data) in filminfo.actors" class="swiper-slide"
                :key="data.role">
                <!-- 演职人员的头像 -->
                <img :src="data.avatarAddress" />
                {{data.role}}
                <p>{{data.name}}</p>
            </div>
        </swiper>
            </div>
            <div class="divC">
        <h2>&nbsp;</h2>
         <h3>剧照</h3>
         <!-- perview 一行所能放图片的多少 -->
       <swiper perview="4" class="photoswiper" myclassname="photoswiper">
            <div class="swiper-slide" v-for="(data,index) in filminfo.photos"
                :key="index">
                <img :src="data" />
                <p>{{data.name}}</p>
            </div>
        </swiper>
            </div>
        </div>
        </div>

    </div>
</template>
<script>
import Axios from 'axios'
import swiper from '@/views/Detail/DetailSwiper'
export default {
    components:{
        swiper
    },
    data(){
        return{
            filminfo:null
        }
    },
    beforeMount(){
        // this.$store.state.isTabbarShow=false
        this.$store.commit('hiddlAndShowTabbar',false)
    },
    mounted(){
        Axios({
         url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=4359832`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res => {
            // console.log(res.data.data.film)
            this.filminfo = res.data.data.film
        })
    },
    beforeDestroy(){
        // this.$store.state.isTabbarShow=true
         this.$store.commit('hiddlAndShowTabbar',true)
    }
}
</script>
<style lang="scss" scoped>
.poster {
    width: 100%;
}
 p {
    color: rgba(8, 1, 1, 0.432);              
    font-size: 13px;
    font {
        color: #ffb232;
        font-size: 14px;
                }
            }
    .itemname {
          font-size: 12px;
            color:white;
            background-color: rgba(19, 6, 6, 0.363) ;
    }
    .showRight{
        float: right;
          color: #ffb232;
    font-size: 17px;
    font-style:italic;
    }
    .paddingLR {
        padding: 0 10px 0 10px;
    }
    .goback {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 5px;
    left: 5px;
    text-align: center;
    background-color:rgba(14, 3, 3, 0.089);
    border-radius: 50%;
    }
    a{
        text-decoration: none;
    }
</style>