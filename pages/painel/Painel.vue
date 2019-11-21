<template>
<div>    
  
<AppDrawer/>

   <v-card color="indigo" dark width="100%" class="text-center">
       <v-row align="center" justify="center">

     <v-card-title> Bem-vindo {{ login }}!</v-card-title> 
        </v-row>   

     </v-card>
 


</div>

</template>

<script>
  import AppDrawer from '../../components/AppDrawer.vue';
  export default {
head: {
    titleTemplate: '%s - Painel administrativo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Painel administrativo para controle de alunos, professores e cursos da Diorama Cursos online' }
    ]
  },
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
