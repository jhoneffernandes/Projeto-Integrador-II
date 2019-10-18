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

 <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/photoshop.png')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Adobe<br>Photoshop</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Preço:  R$ {{photoshop}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/corelphotopaint.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">Corel<br>Photopaint</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{photopaint}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class="mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/blender.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Blender</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{blender}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/max.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">3Ds Max</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{max}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/bootstrap.png')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Bootstrap 5</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{bootstrap}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/vue.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">Vue.js</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ vue }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

<v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/bulma.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bulma</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{bulma}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/materialize.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Materialize</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{materialize}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

<v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/javascript.png')"></v-img>
              <v-card-title class="align-center justify-center fill-height">JavaScript</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{javascript}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>


      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/python.jpg')"></v-img>
           <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{python}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>


      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/php.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">PHP</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ php }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>


      <v-col class=" mx-3 my-2" sm="9" md="5" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/c.jpg')"></v-img>
              <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ c }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>




</v-row>
      </v-tab-item>

      <v-tab-item class="mx-6">
        <v-row>
          <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/photoshop.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Adobe<br>Photoshop</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Preço:  R$ {{photoshop}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/corelphotopaint.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Corel<br>Photopaint</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{photopaint}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/blender.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">Blender</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{blender}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

       <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordapurple" :src="require('../assets/cursos/max.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">3Ds Max</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{max}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
        </v-row>
      </v-tab-item>


       <v-tab-item class="mx-6">
          
        <v-row>
          <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/bootstrap.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bootstrap 5</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{bootstrap}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/vue.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Vue.js</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{vue}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/bulma.png')"></v-img>
          <v-card-title class="align-center justify-center fill-height">Bulma</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{bulma}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
       <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordayellow" :src="require('../assets/cursos/materialize.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Materialize</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{materialize}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
        </v-row>
      
      </v-tab-item>

       <v-tab-item class="mx-6">
          
        <v-row>
     <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/javascript.png')"></v-img>
           <v-card-title class="align-center justify-center fill-height">JavaScript</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{javascript}}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
       <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/python.jpg')"></v-img>
             <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ python }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
       <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/php.png')"></v-img>
             <v-card-title class="align-center justify-center fill-height">PHP</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ php }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col class=" mx-3 my-2" sm="9" md="3" lg="3" xl="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img class="bordagreen" :src="require('../assets/cursos/c.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ {{ c }}</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
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
    data (){
        return{

          photoshop:"150,00",
          photopaint:"120,00",
          blender:"800,00",
          max:"800,00",

          bulma:"120,00",
          vue:"120,00",
          bootstrap:"120,00",
          materialize:"120,00",

          javascript:"548,00",
          python:"548,00",
          php:"548,00",
          c:"548,00",
        }
    },
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