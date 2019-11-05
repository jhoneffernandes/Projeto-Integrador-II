<template>
  <v-container pa-0 ma-0 fluid>
    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">{{bemvindos}}</h2>
            </v-card-title>

            <v-card-text>
              <p class="textop">{{apresentacao}}</p>
              <v-btn @click="conhecer" class="mb-5">Saiba mais</v-btn>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row align="center" justify="center" class="spacer">
      <v-carousel height="100%" cycle interval="4000" hide-delimiters>
        <v-carousel-item>
          <v-img
            contain
            min-height="100%"
            min-width="100%"
            alt="Promoção do curso de html logo na parte esquerda e preço na direita"
            :src="require('../assets/banners/bannerhtml.svg')"
          ></v-img>
        </v-carousel-item>

        <v-carousel-item>
          <v-img
            contain
            min-height="100%"
            min-width="100%"
            alt="Promoção do curso de Adobe ilustrator logo na parte esquerda e preço na direita"
            :src="require('../assets/banners/bannerai.svg')"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row align="center" justify="center" class="my-5 mx-5">
      <h1 class="mb-5 text-center">Diorama Cursos</h1>

      <p
        class="text-center"
      >A Diorama Cursos online como a mais nova escola de cursos online oferece uma grande variedade de conteúdos para desenvolvimento web, como nossos cursos online de programação como, por exemplo, nossos cursos de Java, JavaScript, Python, também possuímos cursos online de web designer com nossos cursos de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Como tal também possuímos materiais de estruturação de sites nos cursos online de HTML e CSS, Conheça alguns dos cursos mais famosos da escola online Diorama Cursos online abaixo:</p>
    </v-row>

    <v-row dense justify="center" class="my-5">
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
          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/photoshop.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Adobe Photoshop cs6</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 150,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
             <router-link to="./photoshop">
    <v-btn color="primary">Saiba mais</v-btn>
  </router-link>
              </v-card-text>
            </v-card>
          </a>
          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/corel.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Corel Draw x8</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <router-link to="./corel">
                  <v-btn color="primary">Saiba mais</v-btn>
                </router-link>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/ilustrator.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Adobe Illustrator cs6</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 800,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <router-link to="./ilustrator">
                  <v-btn color="primary">Saiba mais</v-btn>
                </router-link>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/after.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Adobe After effects cs6</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 800,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <router-link to="./after">
                  <v-btn color="primary">Saiba mais</v-btn>
                </router-link>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/premiere.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Adobe Premiere Pro cs6</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 800,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <router-link to="./premiere">
                  <v-btn color="primary">Saiba mais</v-btn>
                </router-link>
              </v-card-text>
            </v-card>
          </a>
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
          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/blender.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Blender</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/max.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">3ds Max</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/zbrush.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Zbrush</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/maya.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Maya</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/cinema.jpg')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Cinema 4d</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 120,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>
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

    <v-row justify="center" dense class="my-5">
      <v-row justify="center" class="mb-12">
        <v-card fill-height color="blue" dark class="mx-6 my-6" elevation="01">
          <v-row justify="center">
            <v-card-title
              class="align-center text-center ma-2 fontetitulo justify-center flex-nowrap"
            >Cursos de Desenvolvimento web</v-card-title>
          </v-row>
        </v-card>
      </v-row>
      <v-col cols="6" xl="12" lg="10" md="9" sm="8">
        <v-row justify="center">
          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/javascript.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">JavaScript</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/java.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Java</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/python.jpg')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/php.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">PHP</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img height="18rem" contain width="18rem" :src="require('../assets/cursos/c.jpg')"></v-img>
              <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>

          <a href="#">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/html.svg')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Html5 e CSS3</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 548,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </a>
        </v-row>
      </v-col>
    </v-row>

    <section class="depoimento justify">
      <p
        class="ml-5 mt-5"
      >"Bom dia estou manifestando o meu agradecimento por concuir com sucesso o curso de Adobe Illustrator cs6, Diorama força pelo bom trabalho que estão exercendo."</p>
      <p class="ml-5">Roberto | Taquaritinga - SP</p>
    </section>

    <AppNewsletter />
  </v-container>
</template>

<script>
import AppNewsletter from "./AppNewsletter";
export default {
  data() {
    return {
      bemvindos: "Bem vindos a Diorama cursos online!",
      apresentacao:"Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!",
      name:"Kaio",
      surname:"Alves",
    };
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
    },
 
},
};
</script>


<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
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
  background-image: url("../assets/banners/depoimento.svg");
  color: rgb(255, 253, 253);
  height: 7rem;
}
.hoverz a:hover {
  background: cyan;
  border-top: 5px solid blue;
}

.tamanho {
  font-size: 2rem;
  background-color: rgb(65, 40, 207);
}

.tituloroxo {
  width: 100%;
  background-color: purple;
}

.tituloamarelo {
  background-color: rgb(161, 151, 0);
}

.tituloverde {
  background-color: green;
}

.textopadrao {
  font-size: 0.6rem;
  text-align: center;
}
</style>