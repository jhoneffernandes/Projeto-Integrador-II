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
              <v-btn @click="conhecer" class="mb-5">Clique aqui para conhecer</v-btn>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row align="center" justify="center" class="spacer">
      <v-carousel cycle height="20rem" interval="9000" hide-delimiters>
        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title>Produto 1</v-card-title>
              <v-card-text
                class="text-center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Clique aqui para conhecer o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title>Produto 2</v-card-title>
              <v-card-text
                class="text-center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Clique aqui para conhecer o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title>Produto 3</v-card-title>
              <v-card-text
                class="text-center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Clique aqui para conhecer o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img height="100%" min-height="100%" :src="require('../assets/firstimg.png')">
            <v-row align="center" justify="center">
              <v-card-title>Produto 4</v-card-title>
              <v-card-text
                class="text-center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum laudantium veniam quidem aperiam. Itaque iure molestias impedit voluptatum sit numquam, voluptatibus dicta nesciunt et id error illo corrupti consequuntur?</v-card-text>
              <v-card-title class="align-center justify-center fill-height flex-wrap">
                <v-btn>Clique aqui para conhecer o curso</v-btn>
              </v-card-title>
            </v-row>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row align="center" justify="center" class="my-5 mx-5">
      
      <h1 class="mb-5 text-center">eaeaeaeae</h1>

      <p class="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ratione nostrum debitis molestias impedit reiciendis, cupiditate nisi accusantium voluptas veniam quaerat aspernatur qui vitae nesciunt recusandae unde eaque adipisci amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore a, libero ipsa amet laborum? Saepe accusamus, asperiores cupiditate cumque neque mollitia iure delectus modi, earum enim molestias, et provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero laborum, incidunt autem numquam hic labore nostrum in corrupti quia laudantium, rerum exercitationem harum. Corrupti deserunt earum dicta ab nostrum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ratione nostrum debitis molestias impedit reiciendis, cupiditate nisi accusantium voluptas veniam quaerat aspernatur qui vitae nesciunt recusandae unde eaque adipisci amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore a, libero ipsa amet laborum? Saepe accusamus, asperiores cupiditate cumque neque mollitia iure delectus modi, earum enim molestias, et provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero laborum, incidunt autem numquam hic labore nostrum in corrupti quia laudantium, rerum exercitationem harum. Corrupti deserunt earum dicta ab nostrum.</p>

    </v-row>

    <v-row dense fill-height class="my-5 mene">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="1" md="2" sm="6">
      <p class="menetitulo1 text-center white--text tituloh">Título 1</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">
      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 1</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 2</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 4</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/csharp.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 5</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/javascript.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 6</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>
      </v-row>
      </v-col>
    </v-row>

    <v-row dense fill-height class="my-5 mene3">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="1" md="2" sm="6">
      <p class="menetitulo2 text-center white--text tituloh">Título 2</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">
      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 1</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 2</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 4</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/csharp.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 5</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/javascript.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 6</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>
      </v-row>
      </v-col>
    </v-row>

    <v-row dense fill-height class="my-5 mene4">
      <v-col>
      <v-row align="center" justify="center" class="ss">
        <v-col xl="1" md="2" sm="6">
      <p class="menetitulo3 text-center white--text tituloh">Título 3</p>
      </v-col>
      </v-row>
      <v-row justify-sm="center">
      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 1</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 2</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/webcurso.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 3</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/css.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 4</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/csharp.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 5</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
          </v-card>
        </a>
      </v-col>

      <v-col sm="11" md="3" lg="2">
        <a href="#">
          <v-card color="grey lighten-4" elevation="01">
            <v-img :src="require('../assets/javascript.jpg')"></v-img>
            <v-card-title class="align-center justify-center fill-height">Curso 6</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center blue">Descrição breve do curso</v-card-text>
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
      this.$router.push('/about')
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
  border: 0.5rem solid rgba(0, 0, 255, 0.61);
}

.menetitulo1{
  background-color: rgb(168, 186, 219);
}

.mene3
{
    border: 0.5rem solid rgba(255, 255, 0, 0.342);
}

.mene4 {
    border: 0.5rem solid rgba(0, 128, 0, 0.301);

}

.menetitulo2{
  background-color: rgb(219, 214, 168);
}

.menetitulo3{
  background-color: rgb(170, 219, 168);
}


</style>