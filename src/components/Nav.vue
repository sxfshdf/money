<template>
  <nav>
    <router-link v-for="(item, index) in tabs"
                 :key="index" :to="item.path"
                 class="nav-item" active-class="active">
      <Icon :icon="item.icon" :class="item.icon"></Icon>
      <span class="item-name">{{item.name}}</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  @Prop(Array) public navs: object[] | undefined;
  public tabs = this.navs;
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/variables.scss";

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $ex-light;

    .nav-item {
      text-decoration: none;
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4px 0;

      &.active {
        .icon {
          fill: $primary
        }

        .item-name {
          color: $primary
        }
      }

      .icon {
        height: 24px;
        width: 24px;
        fill: $light;
      }

      .item-name {
        font-size: 0.6em;
        color: $light;
        line-height: 1em;
        margin-top: 4px;
      }
    }
  }
</style>
