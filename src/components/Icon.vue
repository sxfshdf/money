<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#' + icon"/>
  </svg>
</template>

<script lang="ts">
  // let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  import {Component, Prop} from 'vue-property-decorator';
  import Vue from 'vue';

  const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    throw new Error(error);
  }

  @Component
  export default class Icon extends Vue {
    @Prop(String) public icon: string | undefined;
    // name: "Icon",
    // props: {
    //   icon: {
    //     type: String
    //   }
    // },
    // created() {
    //
    // }
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
