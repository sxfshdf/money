<template>
  <svg class="icon">
    <use :xlink:href="'#' + icon"/>
  </svg>
</template>

<script>
  // let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/))
  } catch (error) {
    console.log(error)
  }
  export default {
    name: "Icon",
    props: {
      icon: {
        type: String
      }
    },
    created() {

    }
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
