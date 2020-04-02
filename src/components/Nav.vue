<template>
  <div>
    <router-link to="/money">Money</router-link>
    <router-link to="/labels">
      <Icon icon="discount"></Icon>
      Labels
    </router-link>
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script>
  import x from '@/assets/icons/discount.svg'
  console.log(x, 'xx')
  export default {
    name: "Nav"
  }
</script>

<style lang="scss" scoped>

</style>
