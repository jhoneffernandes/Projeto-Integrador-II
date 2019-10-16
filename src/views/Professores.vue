<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>

    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card min-width="auto" width="100%" max-width="auto" height="6rem" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">Professores da Diorama Digital</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>
    <v-card-text>
      <p class="textop2 text-justify">
        Os nossos professores são mestres em programação, design e tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única , que faz questão de proporcionar aos alunos a experiência de um curso presencial, com todas as vantagens que só o meio online oferece.
        Abaixo você confere os docentes por trás de todos os nossos cursos:
      </p>
    </v-card-text>

    <v-row>
      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-10"
            :src="require('../assets/professores/prof.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp mb-3">Professor Lucas</h1>
          </div>

          <v-card>
            <div color="black" dark flat elevation="0">
              <v-tabs slot="extension" v-model="tabs" background-color="indigo" dark centered>
                <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
              </v-tabs>
            </div>

            <v-tabs-items v-model="tabs">
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Sobre ele</v-card-title>

                  <v-card-text>Salve este es uno testito espero q de correct ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Seu curriculo</v-card-title>
                  <v-card-text>
                    <ul>
                      <li>Formado em Ciência da Computação pela PUC-PR</li>
                      <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
                      <li>
                        Possui diversas certificações na área de TI
                        Ele sabe o que faz e vai te ensinar com propriedade!
                      </li>
                      <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
                      <li>
                        Desenvolvedor de aplicativos para o ambiente iOS da Apple, possui aplicações que juntas somam mais de 50.000 downloads na AppStore!
                        E tem mais: além dos cursos, ele quis compartilhar todo o conhecimento que possui também através da publicação de livros de informática.
                        Programando para iPhone e iPad (ed. Novatec)
                      </li>
                      <li>
                        MySQL - Guia do Programador (ed. Novatec)
                        Construindo Aplicações Web com PHP & MySQL (ed. Novatec)
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Curso ministrado</v-card-title>
                  <v-card-text>
                    <v-img
                      :src="require('../assets/cursos/pit.jpg')"
                      aspect-ratio="1"
                      width="18%"
                      min-width="auto"
                      max-height="300"
                    ></v-img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure, recusandae deleniti incidunt esse sunt eligendi, amet ipsum ea ab minima eaque nobis cupiditate assumenda harum consequatur aliquid doloribus? Sit?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-card>
      </v-col>

      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-12 "
            :src="require('../assets/professores/prof3.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp mb-3">Professor Jorge</h1>
          </div>
<v-card>
            <div color="black" dark flat elevation="0">
              <v-tabs slot="extension" v-model="tabs" background-color="indigo" dark centered>
                <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
              </v-tabs>
            </div>

            <v-tabs-items v-model="tabs">
              <v-tab-item>
                <v-card flat>

                  <v-card-title class="headline">Sobre ele</v-card-title>
                  <v-card-text>Salve este es uno testito espero q de correct ex ea commodo consequat.</v-card-text>

                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Seu curriculo</v-card-title>
                  <v-card-text>
                    <ul>
                      <li>Formado em Ciência da Computação pela PUC-PR</li>
                      <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
                      <li>
                        Possui diversas certificações na área de TI
                        Ele sabe o que faz e vai te ensinar com propriedade!
                      </li>
                      <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
                      <li>
                        Desenvolvedor de aplicativos para o ambiente iOS da Apple, possui aplicações que juntas somam mais de 50.000 downloads na AppStore!
                        E tem mais: além dos cursos, ele quis compartilhar todo o conhecimento que possui também através da publicação de livros de informática.
                        Programando para iPhone e iPad (ed. Novatec)
                      </li>
                      <li>
                        MySQL - Guia do Programador (ed. Novatec)
                        Construindo Aplicações Web com PHP & MySQL (ed. Novatec)
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Curso ministrado</v-card-title>
                  <v-card-text>
                    <v-img
                      :src="require('../assets/cursos/pit.jpg')"
                      aspect-ratio="1"
                      width="18%"
                      min-width="auto"
                      max-height="300"
                    ></v-img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure, recusandae deleniti incidunt esse sunt eligendi, amet ipsum ea ab minima eaque nobis cupiditate assumenda harum consequatur aliquid doloribus? Sit?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-card>
      </v-col>

      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-12 "
            :src="require('../assets/professores/prof2.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp mb-3">Professor Fábio</h1>
          </div>

         <v-card>
            <div color="black" dark flat elevation="0">
              <v-tabs slot="extension" v-model="tabs" background-color="indigo" dark centered>
                <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
              </v-tabs>
            </div>

            <v-tabs-items v-model="tabs">
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Sobre ele</v-card-title>

                  <v-card-text>Salve este es uno testito espero q de correct ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Seu curriculo</v-card-title>
                  <v-card-text>
                    <ul>
                      <li>Formado em Ciência da Computação pela PUC-PR</li>
                      <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
                      <li>
                        Possui diversas certificações na área de TI
                        Ele sabe o que faz e vai te ensinar com propriedade!
                      </li>
                      <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
                      <li>
                        Desenvolvedor de aplicativos para o ambiente iOS da Apple, possui aplicações que juntas somam mais de 50.000 downloads na AppStore!
                        E tem mais: além dos cursos, ele quis compartilhar todo o conhecimento que possui também através da publicação de livros de informática.
                        Programando para iPhone e iPad (ed. Novatec)
                      </li>
                      <li>
                        MySQL - Guia do Programador (ed. Novatec)
                        Construindo Aplicações Web com PHP & MySQL (ed. Novatec)
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-title class="headline">Curso ministrado</v-card-title>
                  <v-card-text>
                    <v-img
                      :src="require('../assets/cursos/pit.jpg')"
                      aspect-ratio="1"
                      width="18%"
                      min-width="auto"
                      max-height="300"
                    ></v-img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure, recusandae deleniti incidunt esse sunt eligendi, amet ipsum ea ab minima eaque nobis cupiditate assumenda harum consequatur aliquid doloribus? Sit?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  data() {
    return {
      tabs: null,
      items: ["Sobre ele", "Seu curriculo", "Curso ministrado"]
    };
  },
  components: {
    AppHeader
  }
};
</script>


<style>
.ttl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.textop2 {
  font-size: 1rem;
}
.paragrafo {
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.corp {
  border-radius: 50rem;
  width: 50%;
  background-color: rgb(109, 0, 187);
  color: white;
}
ul {
  padding: 10px;
  background-color: rgb(255, 255, 255);
}
.alinhamento {
  justify-content: center;
}
#profimg {
  margin: 10px;
  border-radius: 100rem;
}
.fundo {
  background-image: url(../assets/banners/banner1.png);
  background-repeat: repeat;
  border-radius: 10px;
}
</style>