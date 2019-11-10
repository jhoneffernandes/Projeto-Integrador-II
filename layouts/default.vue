<template>
  <v-app>
   <nuxt />
   <AppFooter/>
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter';
export default {
 components: {
    AppFooter,
    
  } 
}
</script>
