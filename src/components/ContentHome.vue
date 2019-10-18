<template>
  <v-container pa-0 ma-0 fluid>
    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">Bem vindos a Diorama!</h2>
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
      <v-carousel cycle height="20rem" interval="9000" hide-delimiters>
        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/banners/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title class="white--text">Produto 1</v-card-title>
             </v-row>

              <v-row align="end" justify="center">
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Saiba mais sobre o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/banners/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title class="white--text">Produto 2</v-card-title>
             </v-row>

             <v-row align="end" justify="center">
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Saiba mais sobre o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/banners/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title class="white--text">Produto 3</v-card-title>
                                      </v-row>

                         <v-row align="end" justify="center">

              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Saiba mais sobre o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/banners/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title class="white--text">Produto 4</v-card-title>
                         </v-row>


                         <v-row align="end" justify="center">

              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Saiba mais sobre o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row align="center" justify="center" class="my-5 mx-5">
      
      <h1 class="mb-5 text-center">Diorama Cursos</h1>

      <p class="text-center">
      A Diorama Cursos online como a mais nova escola de cursos online oferece uma grande variedade de conteúdos para desenvolvimento web, como nossos materiais  de programação como, por exemplo, nossos cursos de Java, JavaScript, Python, também possuímos materiais de web designer com nossos cursos de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Como tal também possuímos materiais de estruturação de sites nos cursos de HTML e CSS, Conheça alguns dos nossos cursos mais famosos abaixo:
      </p>

    </v-row>

    <v-row dense fill-height class="my-5 mene">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="4" sm="6">
      <p class="menetitulo1 text-center white--text tituloh">Cursos de design e modelagem 3D</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card fill-height color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/photoshop.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Adobe<br>Photoshop</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Preço:  R$ 150,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/corelphotopaint.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Corel<br>Photopaint</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/blender.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Blender</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 800,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/max.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">3Ds Max</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 800,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      </v-row>
      </v-col>
    </v-row>

    <v-row dense fill-height class="my-5 mene3">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="4" sm="6">
      <p class="menetitulo2 text-center white--text tituloh">Cursos de frameworks</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">
      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/bootstrap.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bootstrap 5</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/vue.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Vue.js</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/bulma.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Bulma</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>
            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/materialize.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Materialize</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 120,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      </v-row>
      </v-col>
    </v-row>

    <v-row dense fill-height class="my-5 mene4">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="4" sm="6">
      <p class="menetitulo3 text-center white--text tituloh">Cursos de linguagens de programação</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">
      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/javascript.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">JavaScript</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/python.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/php.png')"></v-img>
            <v-card-title class="align-center justify-center fill-height">PHP</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="9" md="4" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/cursos/c.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
            <v-divider></v-divider>
             <v-card-text class="textopadrao"><H1>Preço:  R$ 548,00</H1></v-card-text>
                        <v-divider></v-divider>
            <v-card-text class="textopadrao"><H1>Duração:  40 horas</H1></v-card-text>

            <v-card-text class="text-center"><v-btn color="primary">Saiba mais</v-btn></v-card-text>
          </v-card>
        </a>
      </v-col>


      </v-row>
      </v-col>
    </v-row>
    
    <v-row align="center" justify="center" class="my-5"> 
      <v-col sm="12" md="6" xl="5">
      <v-card>
        <v-card-text class="text-center my-5 tamanho white--text">Assine nossa Newsletter!</v-card-text>

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
}

  },
   data: () => ({
      valid: true,
     
      email: '',
      emailRules: [
        v => !!v || 'O e-mail é obrigatório para assinar o Newsletter!',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
      ],
    }),

};
</script>


<style>
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

.mene{
  border: 0.5rem solid rgba(82, 0, 102, 0.61);
}

.menetitulo1{
  background-color: purple;
}

.mene3
{
    border: 0.5rem solid rgba(255, 255, 0, 0.342);
}

.mene4 {
    border: 0.5rem solid rgba(0, 128, 0, 0.301);

}

.menetitulo2{
  background-color: rgb(161, 151, 0);
}

.menetitulo3{
  background-color: green;
}

.textopadrao{
  font-size: 0.6rem;
  text-align: center;
}

</style>