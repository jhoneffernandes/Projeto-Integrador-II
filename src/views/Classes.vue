<template>
  <div>
    <AppHeader/>

 <v-row class="my-5">
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">Nossos cursos</h2>
            </v-card-title>

            <v-card-text>
              <p class="textop text-center">Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!</p>
             
            </v-card-text>
          </v-layout>
        </v-card>
 </v-row>

 <v-row align="center" justify="center" class="my-5 mx-5">
      
      <h1 class="mb-5 text-center">eaeaeaeae</h1>

      <p class="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ratione nostrum debitis molestias impedit reiciendis, cupiditate nisi accusantium voluptas veniam quaerat aspernatur qui vitae nesciunt recusandae unde eaque adipisci amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore a, libero ipsa amet laborum? Saepe accusamus, asperiores cupiditate cumque neque mollitia iure delectus modi, earum enim molestias, et provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero laborum, incidunt autem numquam hic labore nostrum in corrupti quia laudantium, rerum exercitationem harum. Corrupti deserunt earum dicta ab nostrum.</p>

    </v-row>


  <v-row justify="center">
    <v-btn color="primary">Todos</v-btn>
    <v-btn color="primary">Cursos de design</v-btn>
    <v-btn color="primary">Cursos de framework</v-btn>
    <v-btn color="primary">Cursos de programação</v-btn>
  </v-row>

  <v-row dense fill-height class="my-5">
      <v-col>
     
      <v-row justify-sm="center">
      <v-col class="bordagreen mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordayellow mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordapurple mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordagreen mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordayellow mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/csharp.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordapurple mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/javascript.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Preço</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Saiba mais</v-card-text>
          </v-card>
        </a>
      </v-col>
      </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
export default {

components: {
    AppHeader,
  }

}
</script>

<style>
.bordagreen{
  border: 2px solid green;
}


.bordayellow{
  border: 2px solid yellow;

}

.bordapurple{
  border: 2px solid purple;

}
</style>