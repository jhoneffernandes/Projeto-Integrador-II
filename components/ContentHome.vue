<template>
  <v-container pa-0 ma-0 fluid>
    
    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card tile width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">{{bemvindos}}</h2>
            </v-card-title>

            <v-card-text >
              <p  id="conteudo" class="textop">{{apresentacao}}</p>
              <v-btn @click="conhecer" class="mb-5 primary">Saiba mais</v-btn>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row justify="center" class="my-12">
      <v-card fill-height color="blue" dark class="mx-6 my-6" elevation="01">
        <v-row justify="center">
          <v-card-title
            class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
          >Promoções da Diorama Cursos!</v-card-title>
        </v-row>
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
      <h1 class="mb-5 text-center">Diorama Cursos</h1>

      <p
        class="text-center"
      >A Diorama Cursos online como a mais nova escola de cursos online oferece uma grande variedade de conteúdos para desenvolvimento web, como nossos cursos online de programação como, por exemplo, nossos cursos de Java, JavaScript, Python, também possuímos cursos online de web designer com nossos cursos de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Como tal também possuímos materiais de estruturação de sites nos cursos online de HTML e CSS, Conheça alguns dos cursos mais famosos da escola online Diorama Cursos online abaixo:</p>
    </v-row>

    <v-row  dense justify="center" class="my-5">
      <v-row justify="center" class="mb-12">
        <v-card fill-height color="blue" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de web design</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center" class="flex-wrap">
            <router-link
                    v-for="c of cursosDesign" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >{{ c.nome }}</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn color="primary">Saiba mais</v-btn>
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
        <v-card fill-height color="blue" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de Modelagem 3d</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center">
       <router-link
                    v-for="c of cursosModelagem" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >{{ c.nome }}</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn color="primary">Saiba mais</v-btn>
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
        <v-card fill-height color="blue" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title
              class="align-center ma-2 text-center fontetitulo justify-center flex-nowrap"
            >Cursos de Modelagem 3d</v-card-title>
          </v-row>
        </v-card>
      </v-row>

      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center">
       <router-link
                    v-for="c of cursosDesenvolvimento" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >{{ c.nome }}</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn color="primary">Saiba mais</v-btn>
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
  </v-container>
</template>

<script>
import AppNewsletter from "./AppNewsletter";
export default {
  data() {
    return {
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
  },
  methods: {
    conhecer() {
      this.$router.push("/classes");
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