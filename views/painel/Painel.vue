<template>
<div>    
  
<AppDrawer/>

   <v-card color="indigo" dark width="100%" class="text-center">
       <v-row align="center" justify="center">

     <v-card-title> Bem-vindo {{ login }} {{ name }} !</v-card-title> 
        </v-row>   

     </v-card>
 


</div>

</template>

<script>
  import AppDrawer from '../../components/AppDrawer.vue';
  export default {

    computed: {
        login(){
          return this.$ls.get('login')
        },
         name(){
          return this.$ls.get('name')
        }
    
    },

    components: {
    AppDrawer,   
  },
  }
</script>
