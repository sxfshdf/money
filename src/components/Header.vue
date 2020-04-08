<template>
  <header class="header">
    <div class="icon-wrapper" @click="handleBackClick($event)"/>
    <Icon icon="icon-leftarrow"/>
    <div class="title" v-if="!showTypes">{{title}}</div>
    <div class="title" v-if="showTypes">
      <Types />
    </div>
    <div class="block"></div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Types from '@/components/Types.vue';
@Component({
  components: {Types},
})
export default class Header extends Vue {
  @Prop({type: String, default: '提示'}) public title: string | undefined;
  @Prop({type: Boolean, default: false}) public showTypes!: boolean;
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
    height: 44px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    }

    .icon {
      height: 24px;
      width: 24px;
      fill: $main-color;
    }

    .block {
      width: 24px;
      height: 24px;
    }
  }
</style>
