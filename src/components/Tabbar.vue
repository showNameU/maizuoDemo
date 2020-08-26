<template>
    <nav>
        <ul>
            <!-- to:跳转的路径 tag：被渲染成的标签-->
            <router-link to="/film/nowplaying" tag="li" active-class="myactive"><i class="iconfont icon-video"></i>电影</router-link>
            <router-link to="/cinema" tag="li" active-class="myactive"><i class="iconfont icon-smile"></i>影院</router-link>
            <router-link to="/center" tag="li" active-class="myactive"><i class="iconfont icon-account"></i>我的</router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .myactive{
        color: red !important;
    }
    nav {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        background-color:white;
        ul {
            display: flex;
            li {
                flex: 1;
                line-height: 50px;
                text-align: center;

            }
        }
    }
</style>
