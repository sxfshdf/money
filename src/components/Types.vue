<template>
  <ul class="tabs-wrapper">
    <li class="tabs-item">
      <span :class="{'item-name': true, 'active': type === 'incomes'}" @click="clickType('incomes')">收入</span>
    </li>
    <li class="tabs-item">
      <span :class="{'item-name': true, 'active': type === 'expenses'}" @click="clickType('expenses')">支出</span>
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

    .tabs-item {
      padding: 16px 32px 0 0;
      position: relative;
      line-height: 1;

      .item-name {
        font-size: 14px;
        color: $light;
        line-height: 1;
        padding-bottom: 8px;
        display: inline-block;
        position: relative;

        &:after {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 0;
          background: $primary;
          height: 2px;
          transition: all 0.25s;
        }

        &.active {
          color: $primary;

          &:after {
            width: 100%;
          }
        }

      }
    }
  }
</style>
