<template>
  <header class="header">
    <div class="icon-wrapper" @click="handleBackClick($event)"/>
    <Icon icon="icon-leftarrow"/>
    <div class="title">{{title}}</div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({type: String, default: '提示'}) public title: string | undefined;

  public handleBackClick(e: HTMLElement) {}
  // name: "Header",
  // props: {
  //   title: {
  //     type: String,
  //     default: '标题'
  //   }
  // },
  // methods: {
  //   handleBackClick(e) {
  //     console.log(e, 'eee')
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/index.scss';

  .header {
    padding: 11px 10px;
    display: flex;
    align-items: center;
    position: relative;

    .icon-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 44px;
      opacity: 0;
    }

    .title {
      font-size: 16px;
      font-family: PF-H;
      line-height: 1;
      margin-left: 16px;
    }

    .icon {
      height: 22px;
      width: 22px;
      fill: $main-color;
    }
  }
</style>
