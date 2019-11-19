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
          <router-link to="/produtos/edicao/Photoshop">
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
                <H1>Preço: R$ 599,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
               
                  <v-btn color="primary">Saiba mais</v-btn>
               
              </v-card-text>
            </v-card>
          </router-link>

            <router-link to="/produtos/edicao/Corel">
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
                <H1>Preço: R$ 144,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
              
                  <v-btn color="primary">Saiba mais</v-btn>
               
              </v-card-text>
            </v-card>
          </router-link>

        <router-link to="/produtos/edicao/Ilustrator">
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
                <H1>Preço: R$ 730,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                
                  <v-btn color="primary">Saiba mais</v-btn>
               
              </v-card-text>
            </v-card>
        </router-link>

           <router-link to="/produtos/edicao/After">
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
                <H1>Preço: R$ 129,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
               
                  <v-btn color="primary">Saiba mais</v-btn>
               
              </v-card-text>
            </v-card>
           </router-link>

            <router-link to="/produtos/edicao/Premiere">
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
                <H1>Preço: R$ 294,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
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
        <router-link to="/produtos/modelagem/Blender">
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
                <H1>Preço: R$ 384,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
        </router-link>

         <router-link to="/produtos/modelagem/Max">
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
                <H1>Preço: R$ 579,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
         </router-link>

          <router-link to="/produtos/modelagem/Zbrush">
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
                <H1>Preço: R$ 220,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
          </router-link>

           <router-link to="/produtos/modelagem/Maya">
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
                <H1>Preço: R$ 579,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
           </router-link>

          <router-link to="/produtos/modelagem/Cinema">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/cinema.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Cinema 4d</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 579,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
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
         
            <router-link to="/produtos/web/Javascript">
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
                <H1>Preço: R$ 252,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
            </router-link>

            <router-link to="/produtos/web/Java">
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
                <H1>Preço: R$ 200,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
            </router-link>

          
            <router-link to="/produtos/web/Python">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/python.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Python</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 260,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
            </router-link>

          
            <router-link to="/produtos/web/Php">
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
                <H1>Preço: R$ 360,00</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
            </router-link>

          
            <router-link to="/produtos/web/C">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img height="18rem" contain width="18rem" :src="require('../assets/cursos/c.png')"></v-img>
              <v-card-title class="align-center justify-center fill-height">C#</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Preço: R$ 268,99</H1>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="textopadrao">
                <H1>Duração: 40 horas</H1>
              </v-card-text>

              <v-card-text class="text-center">
                <v-btn color="primary">Saiba mais</v-btn>
              </v-card-text>
            </v-card>
            </router-link>

         
            <router-link to="/produtos/web/HtmlCss">
            <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
              <v-img
                height="18rem"
                contain
                width="18rem"
                :src="require('../assets/cursos/htmlecss.png')"
              ></v-img>
              <v-card-title class="align-center justify-center fill-height">Html5 e CSS3</v-card-title>
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
      bemvindos: "Bem vindos a Diorama cursos online!",
      apresentacao:
        "Escola on-line que fornece os melhores cursos sobre design, programação e suas diversas variações, venha conhecer nossos cursos!"
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