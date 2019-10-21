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
        </v-row>
        <p class="text-justify">
         A Diorama Digital é uma empresa de cursos de programação, fundada em 2015, com intuito de cobrir a demanda de profissionais no mercado, com isso o negócio se expandiu rapidamente e possibilitou a formação de vários profissionais no mercado de cursos online.
        Em 2019, a Diorama uniu forças, fundindo a Black zebra em nossa equipe, outra empresa brasileira de cursos ambas as empresas eram de ex-funcionários da extinta Playlore Gameworks, os parceiros fundadores da Diorama têm mais 10 anos de experiência em programação e proporcionam cursos de alta qualidade com diplomas reconhecidos no mundo. 
         </p>
    </v-row>

<v-row class="my-5">
    <v-card-text class="headline text-center">
      <h3 class="tipografia">{{textvideo}}</h3>
    </v-card-text>
</v-row>

        <v-row justify="center" align="center" no-gutters="" class="my-5">
<v-col md="8" sm="12">
        <section title="Dois alunos falando sobre a empresa">
          <video
          height="100%"
          width="100%"
            controls
            :src="require('../assets/videos/vsobre.mp4')"
          ></video>
        </section>
        </v-col>
        </v-row>

        <v-row class="my-5" justify="center">
        <p class="objt"> {{objetivos}} </p>
        </v-row>

<v-row class="my-5 mx-5" justify="center" align="center"> 

<v-layout color="grey lighten-5">
              
                
                      <section title="Topicos falando sobre os objetivos da empresa">
                        <ul class="tipografia">
                          <li>Formar profissionais na área de Full-Stack</li>
                          <li>Ensinar de forma eficiente e divertida</li>
                          <li>
                           Gerar empregos aos clientes
                          </li>
                          <li>Ser referência em conteúdo de qualidade</li>
                          <li>
                           Sempre prestar o melhor atendimento e acompanhamento aos  usuários
                          </li>
                          <li>
                           Promover a área de desenvolvimento  web
                          </li>
                        </ul>
                      </section>
                   
 
</v-layout>

</v-row>

   </v-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  data() {
    return {

      textvideo:"Confira um vídeo introdutório sobre o projeto Diorama Cursos:",
      textbannersobre: "Sobre Diorama Digital",
      objetivos:"Objetivos da Diorama Cursos",

    };
  },
  components: {
    AppHeader
  }
};
</script>

<style >
.objt, .tipografia{
  font-size: 20px;
}
</style>