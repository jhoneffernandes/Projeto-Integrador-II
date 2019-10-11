<template>
<v-app id="inspire">
 <v-content>
<div id="app">
 <router-view></router-view>
</div>
<AppFooter/>
 </v-content>

    </v-app>
</template>

<script>

import AppFooter from './components/AppFooter';


export default {
  components: {
    AppFooter,
    
  },
  }
</script>



