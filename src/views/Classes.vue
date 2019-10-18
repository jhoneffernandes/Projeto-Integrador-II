<template>
  <div>
    <AppHeader/>

 <v-row class="my-5">
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">Nossos cursos</h2>
            </v-card-title>

            
          </v-layout>
        </v-card>
 </v-row>

 <v-row align="center" justify="center" class="mt-12 my-5 mx-5">
      

      <p class="text-center">
      Nos cursos online da Diorama Cursos você sempre terá acesso a um conteúdo atualizado, já que os cursos são frequentemente modificados. É possível assistir às aulas e fazer as avaliações a partir de qualquer computador com acesso à internet, desde que o mesmo cumpra os requisitos mínimos.

Além das aulas, o ambiente de aprendizado também é totalmente online, de forma que você pode usá-lo para esclarecer suas dúvidas com os instrutores e realizar outras atividades propostas. Por estes motivos, os cursos da Diorama Cursos não são disponibilizados em formato DVD.
      </p>
    </v-row>

<v-row>
  <v-col>

    <v-tabs slider-size="4" slider-color="indigo" centered=""> 
      
       
       <v-tab class="blue white--text">
        Todos
      </v-tab>
      <v-tab class="blue white--text">
        Design
      </v-tab>
      <v-tab class="blue white--text">
        Framework
      </v-tab>
      <v-tab class="blue white--text">
        Programação
      </v-tab>

      <v-tab-item class="mx-6">
<v-row justify="center">

 <v-col class="bordagreen mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordayellow mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordapurple mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordagreen mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordayellow mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/csharp.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="bordapurple mx-3 my-2" sm="11" md="5" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/javascript.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
</v-row>
      </v-tab-item>

      <v-tab-item class="mx-6">
        <v-row>
          <v-col class="bordapurple mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class="bordapurple mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class="bordapurple mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
        </v-row>
      </v-tab-item>


       <v-tab-item class="mx-6">
          
        <v-row>
          <v-col class="bordayellow mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class="bordayellow mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class="bordayellow mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/webcurso.jpg')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
        </v-row>
      
      </v-tab-item>

       <v-tab-item class="mx-6">
          
        <v-row>
     <v-col class="bordagreen mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/css.jpg')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
       <v-col class="bordagreen mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
       <v-col class="bordagreen mx-3 my-2" sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
             <v-card-text><H1>Preço:  R$ 198,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Clique aqui para conhecer</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
        </v-row>
      
      </v-tab-item>
    
    </v-tabs>
  
  </v-col>
</v-row>
  

  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
export default {

components: {
    AppHeader,
  },

  
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