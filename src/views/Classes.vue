<template>
  <div>
    <AppHeader />

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
      <p
        class="text-center"
      >Nos cursos online da Diorama Cursos você sempre terá acesso a um conteúdo atualizado, já que os cursos de programação, de edição de web designer e todos os outros são frequentemente modificados. É possível assistir às aulas dos nossos cursos online a partir de qualquer computador com acesso à internet, desde que o mesmo cumpra os requisitos mínimos, e então é só começar a aprender com nossos cursos online e a realizar seu desenvolvimento web. Além das aulas, pelo fato de sermos a mais nova escola de cursos online o ambiente de aprendizado também é totalmente online, de forma que você pode usá-lo para esclarecer suas dúvidas com os instrutores e realizar outras atividades propostas. Por estes motivos, os cursos da Diorama Cursos online não são disponibilizados em formato DVD e foi optado que a nossa escola online se mante-se totalmente ligada à web.</p>
    </v-row>

    <v-row>
      <v-col>
        <v-tabs slider-size="4" slider-color="indigo" centered>
          <v-tab class="blue white--text">Todos</v-tab>
          <v-tab class="blue white--text">Design</v-tab>
          <v-tab class="blue white--text">Modelagem 3d</v-tab>
          <v-tab class="blue white--text">Desenvolvimento Web</v-tab>

          <v-tab-item class="mx-6">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                  <a href="#">
                    <v-card color="grey lighten-4" elevation="01" class="mx-6 my-6">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require('../assets/cursos/photoshop.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe Photoshop cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ {{photoshop}}</H1>
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
                        :src="require('../assets/cursos/ilustrator.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe Illustrator cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
                        :src="require('../assets/cursos/after.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe After effects cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
                        :src="require('../assets/cursos/premiere.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe Premiere Pro cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
                      <v-img
                        height="18rem"
                        contain
                        width="18rem"
                        :src="require('../assets/cursos/c.jpg')"
                      ></v-img>
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
          </v-tab-item>

          <v-tab-item class="mx-6">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                  <a href="#">
                    <v-card fill-height color="grey lighten-4" ele class="mx-6 my-6" elevation="01">
                      <v-img
                        height="18rem"
                        contain
                        width="18rem"
                        :src="require('../assets/cursos/photoshop.png')"
                      ></v-img>
                      <v-row justify="center">
                        <v-card-title
                          class="align-center justify-center flex-nowrap"
                        >Adobe Photoshop cs6</v-card-title>
                      </v-row>
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
                        :src="require('../assets/cursos/ilustrator.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe Illustrator cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
                        :src="require('../assets/cursos/after.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe After effects cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
                        :src="require('../assets/cursos/premiere.png')"
                      ></v-img>
                      <v-card-title
                        class="align-center justify-center fill-height"
                      >Adobe Premiere Pro cs6</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="textopadrao">
                        <H1>Preço: R$ 800,00</H1>
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
          </v-tab-item>

          <v-tab-item class="mx-6">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
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
          </v-tab-item>

          <v-tab-item class="mx-6">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
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
                      <v-img
                        height="18rem"
                        contain
                        width="18rem"
                        :src="require('../assets/cursos/c.jpg')"
                      ></v-img>
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
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
    <section class="depoimento mt-5 mb-5">
      <p
        class="ml-5"
      >"Estou gostando do curso, aulas bem explicativas, já tinha algum conhecimento sobre o assunto mais não tão bem explicado como agora com esse conteúdo que a Diorama proporciona, também estou conciliando o Tempo. Enfim, a Diorama está me surpreendendo bastante."</p>
      <p class="ml-5">Luana Carla | Piracicaba - SP</p>
    </section>
    <v-row justify="center" dense class="my-5">
      <v-col cols="12" xl="12" lg="9" md="8" sm="12">
        <v-row justify="center">
          <v-card class="mx-6" width="40rem" height="16rem" tile>
            <v-card-text class="text-center my-5 tamanho white--text">Assine nossa Newsletter!</v-card-text>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              class="mx-6 my-6"
              color="indigo"
              label="Digite seu e-mail"
            >
              <v-icon class="mx-1" slot="prepend" color="indigo">mdi-email</v-icon>
            </v-text-field>

            <v-card-actions class="align-center justify-center">
              <v-btn dark :disabled="!valid" color="indigo" class="mb-5" @click="validate">Assinar</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  data() {
    return {
      photoshop: "150,00",
      photopaint: "120,00",
      blender: "800,00",
      max: "800,00",

      bulma: "120,00",
      vue: "120,00",
      bootstrap: "120,00",
      materialize: "120,00",

      javascript: "548,00",
      python: "548,00",
      php: "548,00",
      c: "548,00"
    };
  },
  components: {
    AppHeader
  }
};
</script>

<style>
.bordagreen {
  border: 2px solid green;
}

.bordayellow {
  border: 2px solid yellow;
}

.bordapurple {
  border: 2px solid purple;
}

.depoimento {
  background-color: rgb(113, 113, 255);
  color: rgb(255, 253, 253);
  height: 7rem;
}
</style>