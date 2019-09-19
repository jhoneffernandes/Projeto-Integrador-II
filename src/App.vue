<template>
<v-app id="inspire">

 <AppHeader/> <router-view></router-view>

<AppFooter/>
    </v-app>
</template>

<script>

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Main from './views/Main'


export default {
  components: {
    AppHeader,
    AppFooter,
    Main
  },

    data () {
      return {


        right: null,
        drawer: false,
        group: null,
        
      }
    },
        watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>


<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    background: #ccc;
  }
</style>
