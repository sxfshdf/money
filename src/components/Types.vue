<template>
  <ul class="tabs-wrapper">
    <li class="tabs-item" :class="{'active': type === 'incomes'}">
      <span class="item-name" @click="clickType('incomes')">收入</span>
    </li>
    <li class="tabs-item" :class="{'active': type === 'expenses'}">
      <span class="item-name" @click="clickType('expenses')">支出</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  public type = 'incomes';

  public clickType(type: string) {
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/index.scss';

  .tabs-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .tabs-item {
      padding: 8px 20px;
      position: relative;
      line-height: 1;
      border-radius: 8px;

      &:last-child {
        margin-left: 8px;
      }

      &.active {
        background: $primary;
        .item-name {
          color: #fff;
        }
      }

      .item-name {
        font-family: PF-H;
        font-size: 14px;
        color: $light;
        line-height: 1;
        display: inline-block;
        position: relative;

       /* &:after {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 0;
          background: $primary;
          height: 2px;
          transition: all 0.25s;
        } */
      }
    }
  }
</style>
