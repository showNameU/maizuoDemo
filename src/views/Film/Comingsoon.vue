<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster"/>
        <div>
          {{data.name}}&nbsp;<span>{{data.item.name}}</span>
          <p> &nbsp;</p>
          <!-- actorF是过滤器 -->
          <p v-if="data.actors" class="wenzi">主演：{{data.actors|actorF}}</p>
          <p v-else>主演：暂无主演</p>
          <p>类型:{{data.category}}</p>
        </div>
      </li>
    </ul>
    <div class="nomore">--无更多电影--</div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  //定义一个名为actorF的过滤器
  Vue.filter('actorF', data => {
    let d = data.map(item => item.name).join(' ');
    if (d.length > 15) {
      return d.substring(0, 15) + '..';
    }
    return d;
  })
  export default {
    data() {
      return {
        datalist: []
      }
    },
    mounted() {//页面一加载，加载数据
      axios({
        //从网页中爬过来的后台数据
        url: "https://m.maizuo.com/gateway?cityId=430300&pageNum=1&pageSize=10&type=2&k=6580919",
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1591149717102941776150532"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res => {
        //   console.log(res)
        this.datalist = res.data.data.films;
      })
    },
    methods: {
      handleChangePage(cid) {
        // console.log(id)
        //跳转方式 通过name 或者 path
        this.$router.push({name: 'jydetail', params: {id: cid}})

        // this.$router.push(`/detail/${id}`)
      }
    }
  }
</script>
<style lang="scss" scoped>
  ul {

    overflow: hidden;

    img {
      width: 20%;
      float: left;
      padding: 10px;
    }

    li {
      height: 100%;
      width:100%;
      padding: 10px;
      display: inline-block;

      div {
        margin: 10px 0px 0px 70px;
      }

      span {
        font-size: 10px;
        color: white;
        background-color: rgba(19, 6, 6, 0.363);

      }

      p {
        color: rgba(8, 1, 1, 0.432);
        font-size: 13px;
        width: 100%;

        font {

          color: #ffb232;
          font-size: 14px;

        }
      }
    }

  }

</style>
