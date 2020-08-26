<template>
        <ul >
            <router-link to="/film/nowplaying" tag="li" active-class="active"><span>正在热映</span></router-link>
            <router-link to="/film/comingsoon" tag="li" active-class="active"><span>即将上映</span></router-link>
        </ul>
</template>
<style lang="scss" scoped>
    ul{
        display: flex;
      height:auto;
      background-color: #ffffff !important;
      /*margin-bottom: 10px;*/
        li{
            flex: 1;
            height: 40px;
            line-height: 40px;
            padding: 15px;
            // margin:15px;
            text-align: center;
            background-color: blue($color: #000000);
        }
    }
    .active{
        color: red;

        span {
            width: 40px;
            padding-bottom: 15px;
            border-bottom: 2px solid red ;
        }
    }
    .fixed{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        background-color: white;
    }


</style>
