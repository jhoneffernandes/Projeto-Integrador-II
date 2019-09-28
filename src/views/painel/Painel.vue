<template>
<div>    
  
<AppDrawer/>
  <v-row>

   <v-card><v-card-title> Bem-vindo {{ login }} !</v-card-title>
</v-card>
 
   </v-row>   


</div>

</template>

<script>
  import AppDrawer from '../../components/AppDrawer.vue';
  export default {

    computed: {
        login(){
          return this.$ls.get('login')
        }
    },

    components: {
    AppDrawer,   
  },
  }
</script>
