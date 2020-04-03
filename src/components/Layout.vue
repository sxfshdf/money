<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav :navs="navs"/>
  </div>
</template>

<script>
  export default {
    name: "Layout",
    props: {},
    data() {
      return {
        navs: []
      }
    },
    created() {
      const defaultRoutes = ['*', '/']
      const routes = this.$router.options.routes
      this.navs = this.getNavs(routes, defaultRoutes)
    },
    methods: {
      getNavs(routes, exclude) {
        if (!routes || !routes.length) return
        let navs = []
        routes.forEach(route => {
          if (exclude.indexOf(route.path) > -1) return
          let nav = {}
          nav.name = route.name
          nav.path = route.path
          nav.icon = route.meta ? route.meta.icon : 'discount'
          navs.push(nav)
        })
        return navs
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .content {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
</style>
