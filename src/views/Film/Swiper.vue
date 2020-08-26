<template>
    <div class="swiper-container filmswiper" >
        <div class="swiper-wrapper">
            <!-- 插槽 放需要轮播的图片-->
            <slot></slot>
        </div>
        <!-- 分页器 -->
        <div class=" film-swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    mounted(){
        // 将class为filmswiper渲染成轮播器
        new Swiper('.filmswiper',{
            loop:true,//允许循环轮播
            autoplay:{
                delay:2000//2s切换一个图片
            },
            pagination:{
                el:'.swiper-pagination'
            }
        });
    }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
    img {
        width: 100%;
    }
}
.swiper-pagination {
    text-align: right;/**分页器居右显示 */
}
</style>
