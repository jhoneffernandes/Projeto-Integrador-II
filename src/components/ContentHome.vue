<template>
  <v-container pa-0 ma-0 fluid>
    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">Bem vindos a Diorama cursos online!</h2>
            </v-card-title>

            <v-card-text>
              <p class="textop">Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!</p>
          <v-btn @click="conhecer" class="mb-5">Saiba mais</v-btn>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row align="center" justify="center" class="spacer">

      <v-carousel height="100%" cycle interval="4000" hide-delimiters>

        <v-carousel-item >

          <v-img contain="" min-height="100%" min-width="100%" alt="Promoção do curso de html logo na parte esquerda e preço na direita" :src="require('../assets/banners/bannerhtml.svg')">
          </v-img>

        </v-carousel-item>


        <v-carousel-item>

          <v-img contain="" min-height="100%" min-width="100%" alt="Promoção do curso de Adobe ilustrator logo na parte esquerda e preço na direita" :src="require('../assets/banners/bannerai.svg')">
          </v-img>

        </v-carousel-item>

        
      </v-carousel>
    </v-row>




    <v-row align="center" justify="center" class="my-5 mx-5">
      
      <h1 class="mb-5 text-center">Diorama Cursos</h1>

      <p class="text-center">
A Diorama Cursos online como a mais nova escola de cursos online oferece uma grande variedade de conteúdos para desenvolvimento web, como nossos cursos online de programação como, por exemplo, nossos cursos de Java, JavaScript, Python, também possuímos cursos online de web designer com nossos cursos de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Como tal também possuímos materiais de estruturação de sites nos cursos online de HTML e CSS, Conheça alguns dos cursos mais famosos da escola online Diorama Cursos online abaixo:

      </p>

    </v-row>



    <v-row dense justify="center" class="my-5">
        
     
 <v-row justify="center" class="mb-12">

          <v-card fill-height color="purple" dark="" class="mx-6 my-6" elevation="01">
         
            <v-row justify="center">
            <v-card-title class="align-center text-center ma-2 fontetitulo justify-center flex-nowrap">Cursos de design e modelagem 3D</v-card-title>
            </v-row>
  
          </v-card>
 </v-row>
<v-col cols="6" xl="12" lg="10" md="9" sm="8">


      <v-row justify="center" class="flex-wrap">

        <a href="">
          <v-card fill-height color="grey lighten-4" ele class="mx-6 my-6" elevation="01">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/photoshop.png')"></v-img>
            <v-row justify="center">
            <v-card-title class="align-center justify-center flex-nowrap">Adobe Photoshop</v-card-title>
            </v-row>
            <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Preço:  R$ 150,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center">
              <router-link to="./photoshop">
              <v-btn color="primary">Saiba mais</v-btn>
            </router-link>
            </v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/corelphotopaint.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Corel Photopaint</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/blender.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Blender</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 800,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/max.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">3Ds Max</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 800,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

      </v-row>
      </v-col>
    </v-row>

<v-row><br>
<br>
<br>
<br>
<br> </v-row>

    <v-row dense justify="center" class="my-5">

  <v-row justify="center" class="mb-12">

          <v-card fill-height color="lime darken-4" dark="" class="mx-6 my-6" elevation="01">
         
            <v-row justify="center">
            <v-card-title class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap">Cursos de frameworks</v-card-title>
            </v-row>
  
          </v-card>
 </v-row>

<v-col cols="6" xl="12" lg="10" md="9" sm="8">


      <v-row justify="center">
        
        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/bootstrap.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bootstrap 5</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/vue.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Vue.js</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/bulma.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bulma</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/materialize.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Materialize</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

      </v-row>
      </v-col>
    </v-row>

<v-row><br>
<br>
<br>
<br>
<br> </v-row>

    <v-row justify="center" dense class="my-5 ">


 <v-row justify="center" class="mb-12">

          <v-card fill-height color="green darken-3" dark="" class="mx-6 my-6" elevation="01">
         
            <v-row justify="center">
            <v-card-title class="align-center text-center ma-2 fontetitulo justify-center flex-nowrap">Cursos de programação</v-card-title>
            </v-row>
  
          </v-card>
 </v-row>
<v-col cols="6" xl="12" lg="10" md="9" sm="8">


      <v-row justify="center">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/javascript.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">JavaScript</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/python.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/php.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">PHP</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>

        <a href="#">
          <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
            <v-img height="18rem" contain="" width="18rem" :src="require('../assets/cursos/c.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>


      </v-row>
      </v-col>
    </v-row>
    
    <v-row justify="center" dense class="my-5 ">
      <v-col cols="12" xl="12" lg="9" md="8" sm="12">
<v-row justify="center">
      <v-card  class="mx-6" width="40rem" height="16rem" tile="">
        <v-card-text  class="text-center my-5 tamanho white--text">Assine nossa Newsletter!</v-card-text>

<v-text-field
  v-model="email"
      :rules="emailRules"
      required
 class="mx-6 my-6" color="indigo" label="Digite seu e-mail">
  <v-icon class="mx-1" slot="prepend" color="indigo">mdi-email</v-icon>
  </v-text-field>

  <v-card-actions class="align-center justify-center">

    <v-btn
      dark
      :disabled="!valid"
      color="indigo"
      class="mb-5"
      @click="validate"
    >
Assinar 
    </v-btn> 
      </v-card-actions>
      </v-card>
</v-row>
</v-col>
    </v-row>
  
  </v-container>
</template>

<script>
export default {
  

  methods : {
 conhecer () {
      this.$router.push('/classes')
    },

validate() {
      this.$router.push('/painel')
},
  },
   data: () => ({
      valid: true,
     
      email: '',
      emailRules: [
        v => !!v || 'O e-mail é obrigatório para assinar o Newsletter!',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
      ],
    }),

}
</script>


<style>

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

.fontetitulo {
  font-size: 2rem ;

 }

.textop {
  font-size: 1.3rem;
}
.tituloh {
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.spacer {
  margin-top: 0.5rem;
}

a {
  text-decoration: none;
}

.hoverz a:hover {
  background: cyan;
  border-top: 5px solid blue;
}

.tamanho{
  font-size: 2rem;
  background-color: rgb(65, 40, 207);
}

.tituloroxo{
  width: 100%;
  background-color: purple;
}

.tituloamarelo{
  background-color: rgb(161, 151, 0);
}

.tituloverde{
  background-color: green;
}

.textopadrao{
  font-size: 0.6rem;
  text-align: center;
}

</style>