<template>
  <div class="nav-wrapper">
    <Header :title="title"/>
    <div class="content">
      <slot/>
    </div>
    <Nav :navs="navs"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import {Component, Prop} from 'vue-property-decorator';
import any = jasmine.any;

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  components: {
    Header,
  },
})
export default class Layout extends Vue {
  @Prop({type: String, default: '提示'}) public title: string | undefined;

  public navs: NavItem[] | undefined = [];

  public created() {
    const defaultRoutes = ['*', '/'];
    const routes = (this.$router as any).options.routes;
    this.navs = this.getNavs(routes, defaultRoutes);
  }

  public getNavs(routes: NavItem[], exclude: string[]): NavItem[] | undefined {
    if (!routes || !routes.length) {
      return;
    }
    const navs: NavItem[] = [];
    routes.forEach((route) => {
      if (exclude.indexOf(route.path) > -1) {
        return;
      }
      const nav: NavItem = {
        name: '',
        path: '',
        icon: '',
      };
      nav.name = route.name;
      nav.path = route.path;
      nav.icon = (route as any).meta ? (route as any).meta.icon : 'discount';
      navs.push(nav);
    });
    return navs;
  }

  // name: "Layout",
  // components: {
  //   Header
  // },
  // props: {
  //   title: {
  //     type: String,
  //     default: '提示'
  //   }
  // },
  // data() {
  //   return {
  //     navs: []
  //   }
  // },
  // created() {
  //   const defaultRoutes = ['*', '/']
  //   const routes = this.$router.options.routes
  //   this.navs = this.getNavs(routes, defaultRoutes)
  // },
  // methods: {
  //   getNavs(routes, exclude) {
  //     if (!routes || !routes.length) return
  //     let navs = []
  //     routes.forEach(route => {
  //       if (exclude.indexOf(route.path) > -1) return
  //       let nav = {}
  //       nav.name = route.name
  //       nav.path = route.path
  //       nav.icon = route.meta ? route.meta.icon : 'discount'
  //       navs.push(nav)
  //     })
  //     return navs
  //   }
  // }
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
