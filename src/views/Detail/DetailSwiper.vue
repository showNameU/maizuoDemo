<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination detail-swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    props: [
        'perview','myclassname'
    ],
    mounted(){
        new Swiper('.' + this.myclassname,{
            slidesPerView: this.perview,
            spaceBetween: 30,
            freeMode: true
        })
    }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
    img {
        width: 100%
    }
}
</style>