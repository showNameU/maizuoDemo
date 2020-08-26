<template>
  <div style="width: 100%;">
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster"/>
        <div>
          {{data.name}}&nbsp;<span>{{data.item.name}}</span>
          <p>&nbsp;</p>
          <p>观众评分<font>&nbsp;{{data.grade}}</font></p>
          <p>电影类型:{{data.category}}</p>
          <!-- actorF是过滤器 -->
          <p v-if="data.actors">主演：{{data.actors | actorF}}</p>
          <p v-else>主演：暂无主演</p>
          <button>购买</button>
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
    if (d.length > 10) {
      return d.substring(0, 10) + '..';
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
        url: 'https://m.maizuo.com/gateway?cityId=430300&pageNum=1&pageSize=10&type=1&k=6074907',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1591149717102941776150532","bc":"430300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        //   console.log(res.data.data.films)
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
    width: 100%;
    overflow: hidden;
    display: block;

    img {
      width: 20%;
      float: left;
      padding: 10px;
    }

    li {
      height: auto;
      padding: 12px;
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

        font {

          color: #ffb232;
          font-size: 14px;

        }
      }

      button {
        display: block;
        margin: -50px 0px 0 200px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border: 1px solid #ff5f16;
        border-radius: 2px;
        background-color: white;
      }
    }

  }

</style>
