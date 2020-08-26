<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

    <tabbar v-show="$store.state.isTabbarShow"></tabbar>

  </div>
</template>

<script>
  import tabbar from '@/components/Tabbar'

  export default {
    name: 'App',
    components: {
      tabbar
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  li {
    list-style: none;
  }

  .nomore {
    height: 59px;
    background-color: #ededed;
    color: #bdc0c5;
    font-size: 13px;
    text-align: center;
    margin: auto;
    line-height: 59px;
  }
</style>
