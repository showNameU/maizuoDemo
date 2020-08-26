<template>
  <div>
    <!--<swiper  ref="myswiper" :key="tup.length">-->
    <!--&lt;!&ndash; 给需要轮播的东西定义设置class=swiper-slide &ndash;&gt;-->
    <!--<div class="swiper-slide" v-for="d in tup"  :key="d.bannerId">-->
    <!--<img :src="d.imgUrl">-->
    <!--</div>-->
    <!--</swiper>-->
    <!-- 正在热映 即将上映 -->
    <filmHead :class="isFixed ? 'fixed' :''" :key='iskey' @click="!iskey" ref="myswiper"></filmHead>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
  import swiper from '../views/Film/Swiper'
  import 'swiper/css/swiper.css'
  import axios from 'axios'
  import filmHead from '@/views/Film/FilmHead'
  //局部路由守卫
  export default {
    data() {
      return {
        iskey: true,
        tup: [],
        isFixed: false
      };
    },
    mounted() {
      axios({
        url: 'https://m.maizuo.com/gateway?k=903873',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1591320661135265700020225","bc":"310100"}',
          'X-Host': 'mall.cfg.common-banner'
        }
      }).then(res => {
        console.log(res)
        this.tup = res.data.data
      })
      window.onscroll = this.handleScroll;
    },
    beforeDestroy() {
      window.onscroll = null;
    },
    methods: {
      handleScroll() {
        // console.log(document.documentElement.scrollTop);
        // console.log(this.$refs.myswiper);
        if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      // console.log('局部路由守卫路径拦截')
      next();
    },
    components: {
      swiper,
      filmHead

    }
  }
</script>

