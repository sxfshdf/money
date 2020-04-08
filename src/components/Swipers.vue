<!--<template>-->
<!--  <swiper ref="mySwiper" :options="swiperOptions">-->
<!--    <swiper-slide>-->
<!--      <ul class="items-wrapper">-->
<!--        <li class="item" v-for="(item, index) in page1" :key="index">-->
<!--          <div class="icon-wrapper">-->
<!--            <Icon :icon="item" />-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </swiper-slide>-->
<!--    <swiper-slide>-->
<!--      <ul class="items-wrapper">-->
<!--        <li class="item" v-for="(item, index) in page2" :key="index">-->
<!--          <div class="icon-wrapper">-->
<!--            <Icon :icon="item" />-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </swiper-slide>-->
<!--    <div class="swiper-pagination" slot="pagination"></div>-->
<!--  </swiper>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--  import Vue from 'vue';-->
<!--  import 'swiper/css/swiper.css';-->
<!--  import Icon from '@/components/Icon.vue';-->
<!--  import {line1, line2} from './IconList';-->
<!--  import directive, {Swiper, SwiperSlide} from 'vue-awesome-swiper';-->
<!--  import {Component} from 'vue-property-decorator';-->

<!--  @Component({-->
<!--    components: {-->
<!--      Swiper, SwiperSlide, Icon-->
<!--    },-->
<!--    directives: {-->
<!--      directive-->
<!--    }-->
<!--  })-->
<!--  export default class Swipers extends Vue {-->
<!--    page1 = line1;-->
<!--    page2 = line2;-->
<!--    swiperOptions = {-->
<!--      pagination: {-->
<!--        el: '.swiper-pagination'-->
<!--      }-->
<!--      // Some Swiper option/callback...-->
<!--    };-->
<!--  }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--  @import '~@/assets/styles/index.scss';-->
<!--  .swiper-container {-->
<!--    border: 1px solid red;-->
<!--    height: 148px;-->

<!--    .swiper-pagination {-->
<!--      bottom: 0;-->
<!--    }-->

<!--    .swiper-slide {-->
<!--      display: flex;-->
<!--      align-items: flex-start;-->
<!--      justify-content: center;-->
<!--    }-->
<!--  }-->

<!--  .items-wrapper {-->
<!--    display: flex;-->
<!--    flex-wrap: wrap;-->
<!--    width: 100%;-->
<!--    .item {-->
<!--      line-height: 1;-->
<!--      width: 20%;-->
<!--      height: 64px;-->
<!--      display: flex;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->

<!--      .icon-wrapper {-->
<!--        height: 48px;-->
<!--        width: 48px;-->
<!--        border-radius: 24px;-->
<!--        background: $ex-light;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--        justify-content: center;-->

<!--        .icon {-->
<!--          height: 24px;-->
<!--          width: 24px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->
