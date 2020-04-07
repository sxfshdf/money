<template>
  <Layout :title="title">
    <div class="money main-wrapper">
      <Types/>
      <div class="input-wrapper">
        <span class="currency">￥</span>
        <input type="number" class="input" placeholder="0.00">
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Types.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {
    Types,
  },
})
export default class Money extends Vue {
  public title = '首页';
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

    .input-wrapper {
      margin-top: 10px;
      display: flex;
      align-items: flex-end;
      .input {
        width: 100%;
        padding: 10px 10px 0 4px;
        font-size: 48px;
        font-family: DinPro-M;
        line-height: 1;
        color: $primary;

        &::placeholder {
          color: $light;
        }
      }

      .currency {
        display: inline-block;
        font-size: 20px;
        line-height: 1;
        color: $light;
        font-family: PF-H;
      }
    }

  }


</style>
