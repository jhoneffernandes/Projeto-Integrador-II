<template>
  <v-container pa-0 ma-0 fluid>
    <v-layout align-center justify-center text-center>

      <v-row class="flex-wrap" >
      <v-card min-width="auto" width="100%" max-width="auto" height="10rem" dark color="indigo"> <v-layout class="flex-wrap" justify-center="" align-center="" align-content-center="" >
        <v-card-text><h2> Bem vindos a Diorama!</h2> 
      
      <p>Escola on-line que fornece os melhores cursos sobre design,programação e suas diversas variações, venha conhecer nossos cursos!</p>   <v-btn>Clique aqui para conhecer</v-btn>   
</v-card-text></v-layout>  
      
    </v-card>
</v-row>


    </v-layout>

 <AppCard/>

<v-row dense="" pa-0 ma-0 >  
    
    <v-col sm="12" md="6">
   <v-img src="../assets/banner_career.png"></v-img>

    <v-row no-gutters="">
    <v-col sm="12" md="6"><v-img src="../assets/banner_career.png"></v-img> </v-col>
   <v-col sm="12" md="6"> <v-img src="../assets/banner_career.png"></v-img></v-col>

    </v-row>

    

    </v-col>

     <v-col sm="12" md="6">
   <v-img src="../assets/banner_career.png"></v-img>

    <v-row no-gutters="">
    <v-col sm="12" md="6"><v-img src="../assets/banner_career.png"></v-img> </v-col>
   <v-col sm="12" md="6"> <v-img src="../assets/banner_career.png"></v-img></v-col>

    </v-row>

    

    </v-col>


</v-row>


  <v-row align="center" justify="center">
    <v-carousel cycle height="30rem" interval="4000" hide-delimiters>
    <v-carousel-item>  <v-img height="100%" min-height="100%"  src="../assets/firstimg.png"></v-img> </v-carousel-item>
        <v-carousel-item > <v-img  height="100%" min-height="100%" src="../assets/firstimg.png"></v-img></v-carousel-item>
    <v-carousel-item > <v-img height="100%" min-height="100%" src="../assets/firstimg.png"></v-img></v-carousel-item>
    <v-carousel-item> <v-img   height="100%" min-height="100%" src="../assets/firstimg.png"></v-img></v-carousel-item>
    </v-carousel>
    </v-row>


  </v-container>
</template>

<script>

import AppCard from '../components/AppCard';

export default {
 components: {
       AppCard,
  },
}
</script>


<style>

  </style>