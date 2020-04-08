<template>
  <Layout :title="title" :showTypes="true">
    <div class="money main-wrapper">
      <div class="output-wrapper">
        <div class="currency-wrapper">
          <span class="currency">￥</span>
        </div>
        <div class="output">
          {{output}}
        </div>
      </div>
<!--      <Swipers />-->
      <div class="number-pad">
        <div class="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Del</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>Clear</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
// import Swipers from '@/components/Swipers.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {
    Types,
  },
})
export default class Money extends Vue {
  public title = '首页';
  public output: string = '0.00';
  // name: 'Money',
  // components: {Types},
  // data() {
  //   return {
  //     title: '首页',
  //     key: '1'
  //   };
  // },
  // created() {
  //
  // },
  //
  // methods: {}
}
</script>

<style scoped lang="scss">
  @import "~@/assets/styles/index.scss";

  .money.main-wrapper {
    padding: 0 10px;

    .output-wrapper {
      margin-top: 10px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;

      .currency-wrapper {
        .currency {
          display: inline-block;
          font-size: 20px;
          line-height: 1;
          color: $primary;
          font-family: DinPro-BL;
        }
      }

      .output {
        font-family: DinPro-M;
        color: $primary;
        font-size: 48px;
        line-height: 1;
      }
    }

    .number-pad {

      .numbers {
        /*display: flex;*/
        @extend %clearFix;

        button {
          border: 1px solid $ex-light;
          font-family: DinPro-B;
          font-size: 20px;
          line-height: 1;
          color: $primary;
          height: 64px;
          float: left;
          background: #fff;
          width: 25%;

          &.zero {
            width: 50%;
          }

          &.ok {
            height: 64*2px;
            float: right;
          }
        }
      }
    }
  }


</style>
