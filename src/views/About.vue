<template>
  <div>
    <AppHeader />
    <v-container ma-0 pa-0 fluid="">
            
            
            <v-row class="my-5">
              
    <v-layout align-center justify-center text-center>
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">{{textbannersobre}}</h2>
            </v-card-title>
          </v-layout>
        </v-card>
    </v-layout>
      </v-row>

     <v-row class="mx-6 my-5">
        <v-row justify="center my-5">
        <h1> História da Diorama Cursos</h1>
        </v-row>
        <p class="text-justify">
         
         A Diorama Digital é uma empresa de cursos de programação, fundada em 2015, com intuito de cobrir a demanda de profissionais no mercado, com isso o negócio se expandiu rapidamente e possibilitou a formação de vários profissionais no mercado de cursos online.
        Em 2019, a Diorama uniu forças, fundindo a Black zebra em nossa equipe, outra empresa brasileira de cursos ambas as empresas eram de ex-funcionários da extinta Playlore Gameworks, os parceiros fundadores da Diorama têm mais 10 anos de experiência em programação e proporcionam cursos de alta qualidade com diplomas reconhecidos no mundo. 

         </p>
    </v-row>

<v-row class="my-5">
    <v-card-text class="headline text-center">
      <h1 class="tituloh">{{textvideo}}</h1>
    </v-card-text>
</v-row>

        <v-row justify="center" align="center" no-gutters="" class="my-5">
<v-col md="8" sm="12">
        <section>
          <video
          height="100%"
          width="100%"
            controls
            poster="../assets/banners/poster.jpg"
            :src="require('../assets/videos/vsobre.mp4')"
          ></video>
        </section>
        </v-col>
        </v-row>

        <v-row class="my-5" justify="center">
        <h1> Objetivos da Diorama Cursos </h1>
        </v-row>

<v-row class="my-5 mx-5" justify="center" align="center"> 

<v-card flat color="grey lighten-5">
                  <v-card-text class="fonte1 black--text">
                    <ul>
                      <li>Formar profissionais na área de Full-Stack</li>
                      <br>
                      <li>Ensinar de forma eficiente e divertida</li>
                      <br>
                      <li>
                       Gerar empregos aos clientes
                      </li>
                      <br>
                      <li>Ser referência em conteúdo de qualidade em relação a cursos</li>
                      <br>
                      <li>
                       Sempre prestar o melhor atendimento e acompanhamento aos nossos usuários
                      </li>
                      <br>
                      <li>
                       Promover a área de desenvolvimento externo e web
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>

</v-row>

   </v-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  data() {
    return {
      textvideo:
        "Confira um vídeo introdutório sobre o projeto Diorama Cursos:",
      textbannersobre: "Sobre Diorama Digital"
    };
  },
  components: {
    AppHeader
  }
};
</script>

<style>
.fonte1{
  font-size: 1.5rem;
}
</style>