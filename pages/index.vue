<template>
  <v-container pa-0 ma-0 fluid>
            <div  :class="[ isLoading ? 'white' : 'black' ]">
        <AppHeader/>

<v-row justify="center" align="end" class="my-5">
<v-btn @click="changeColor">contraste</v-btn>
<v-btn v-on:click="fontSize += 0.25">A+</v-btn>
<v-btn v-on:click="fontSize = 1.5">A</v-btn>
<v-btn v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</v-btn>
</v-row>

      <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card tile width="100%" height="100%" dark :class="[ isLoading ? 'indigo' : 'black' ]">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2>{{bemvindos}}</h2>
            </v-card-title>

            <v-card-text >
              <p  id="conteudo" class="textop">{{apresentacao}}</p>
              <v-btn @click="conhecer" :class="[ isLoading ? 'white--text primary' : 'black--text white' ]" class="mb-5">Saiba mais</v-btn>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row justify="center">
      <v-card fill-height width="100%" :class="[ isLoading ? 'blue' : 'white black--text' ]" dark elevation="01">
          <v-card-title
            class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
          >Promoções da Diorama Cursos!</v-card-title>
      </v-card>
    </v-row>

    <v-row>
      <v-carousel height="100%" cycle interval="4000" vertical reverse hide-delimiters>
        <v-carousel-item>
          <v-img
            class="fundobanner1"
            contain
            height="30rem"
            width="100%"
            alt="Promoção do curso de adobe illustrator com preço na parte de cima e logo do curso no centro"
            :src="require('../assets/banners/bannerai.png')"
          ></v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img
            class="fundobanner2"
            contain
            height="30rem"
            width="100%"
            alt="Promoção do curso de HTML 5 com preço na parte de cima e logo do curso no centro"
            :src="require('../assets/banners/bannerhtml.png')"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row id="content" align="center" justify="center" class="my-5 mx-5">
      <h1 class="mb-5 text-center"  :class="[ isLoading ? '' : 'white--text' ]">Diorama Cursos</h1>

      <p v-bind:style="{ fontSize: fontSize + 'rem' }"  :class="[ isLoading ? '' : 'white--text' ]"

        class="text-center"
      >A Diorama Cursos online como a mais nova escola de cursos online oferece uma grande variedade de conteúdos para desenvolvimento web, como nossos cursos online de programação como, por exemplo, nossos cursos de Java, JavaScript, Python, também possuímos cursos online de web designer com nossos cursos de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Como tal também possuímos materiais de estruturação de sites nos cursos online de HTML e CSS, Conheça alguns dos cursos mais famosos da escola online Diorama Cursos online abaixo:</p>
    </v-row>

    <v-row  dense justify="center" class="my-5">
      <v-row justify="center" class="mb-12">
        <v-card fill-height  :class="[ isLoading ? 'blue' : 'white black--text' ]" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title 
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de web design</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center" class="flex-wrap ">
            <router-link
                    v-for="c of cursosDesign" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <br />
      <br />
      <br />
      <br />
      <br />
    </v-row>

    <v-row dense justify="center" class="my-5">
      <v-row justify="center" class="mb-12">
        <v-card fill-height :class="[ isLoading ? 'blue' : 'black' ]" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title :class="[ isLoading ? 'blue' : 'white black--text' ]"
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de modelagem 3D</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center">
        <router-link
                    v-for="c of cursosModelagem" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>

        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <br />
      <br />
      <br />
      <br />
      <br />
    </v-row>

    <v-row dense justify="center" class="my-5">
      <v-row justify="center" class="mb-12">
        <v-card fill-height :class="[ isLoading ? 'blue' : 'black' ]" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title :class="[ isLoading ? 'blue' : 'white black--text' ]"
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de desenvolvimento web</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center">
       <router-link
                    v-for="c of cursosDesenvolvimento" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>


        </v-row>
      </v-col>
    </v-row>
  

    <section class="justify">
      <v-row justify="center">
        <v-card height="100%" width="100rem" dark class="depoimento">
          <p
            class="mx-5"
          >"Bom dia estou manifestando o meu agradecimento por concuir com sucesso o curso de Adobe Illustrator cs6, Diorama força pelo bom trabalho que estão exercendo."</p>
          <p class="mx-5">Roberto | Taquaritinga - SP</p>
        </v-card>
      </v-row>
    </section>

    <AppNewsletter />
        </div>
  </v-container>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppNewsletter from "../components/AppNewsletter";
export default {
  data() {
    return {
                    fontSize: 1.25,

                isLoading: true,

            cursos: [],
      bemvindos: "Bem vindos a Diorama cursos online!",
      apresentacao:
        "Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!"
    };
  },

  created(){
    const cursos = this.$ls.get('cursos')
    if (cursos) this.cursos = cursos
  },
  computed: {
    cursosDesign () {
      return this.cursos.filter(c => c.categoria == 'Design')
    },

    cursosModelagem () {
      return this.cursos.filter(c => c.categoria == 'Modelagem 3D')
    },
        cursosDesenvolvimento () {
      return this.cursos.filter(c => c.categoria == 'Desenvolvimento Web')
    }
  },

  components: {
    AppNewsletter,
    AppHeader,

  },
   head: {
    titleTemplate: '%s - Início',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web' },
        // OpenGraph data (Most widely used)
    {property: 'og:title', content: 'Início - Diorama Cursos'},
    {property: 'og:site_name', content: 'Diorama Cursos'},
    // The list of types is available here: http://ogp.me/#types
    {property: 'og:type', content: 'website'},
    // Should the the same as your canonical link, see below.
    {property: 'og:url', content: 'http://localhost:3000/'},
    {property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'},
    // Often the same as your meta description, but not always.
    {property: 'og:description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},

    // Twitter card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'http://localhost:3000/Professores'},
    {name: 'twitter:title', content: 'Início - Diorama Cursos'},
    {name: 'twitter:description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},
    
    // Google / Schema.org markup:
    {itemprop: 'name', content: 'Início - Diorama Cursos'},
    {itemprop: 'description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},
    {itemprop: 'image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'}
,         {rel: 'canonical', href: 'http://localhost:3000/'}

    ]
  },
  methods: {
       changeColor(){
                    this.isLoading = !this.isLoading;
                   },
    conhecer() {
      this.$router.push("/Cursos");
    },

    validate() {
      this.$router.push("/painel");
    }
  }
};
</script>


<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}

.fontetitulo {
  font-size: 2rem;
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
.depoimento {
  background-size: cover;
  background-image: url("../assets/banners/depoimento.svg");
  color: rgb(255, 253, 253);
  height: 7rem;
  width: 7rem;
  text-align: center;
}
.hoverz a:hover {
  background: cyan;
  border-top: 5px solid blue;
}

.tamanho {
  font-size: 2rem;
  background-color: rgb(65, 40, 207);
}

@media (max-width: 422px) {
  .tamanho {
    font-size: 1.5rem;
  }
}

.textopadrao {
  font-size: 0.6rem;
  text-align: center;
}

.fundobanner1 {
  background-color: rgb(245, 126, 38);
}

.fundobanner2 {
  background-color: rgb(0, 83, 229);
}
</style>