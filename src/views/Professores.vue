<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>

    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card min-width="auto" width="100%" max-width="auto" height="6rem" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">{{textbannerprof}}</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>
    <v-card-text>
      <p class="textop2 text-justify">
        Os professores dos nossos cursos online são mestres desenvolvimento web, programação, edição, e são web designers experientes, que tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única para nossos cursos online, que faz questão de proporcionar aos alunos a experiência de cursos online presenciais, com todas as vantagens que só o meio online oferece. Logo abaixo você confere os docentes por trás de todos os nossos cursos online e mais, bem-vindos a mais nova escola online da web.
        <a
          href="#/classes"
        >clique aqui para ver os nossos cursos.</a>
      </p>
    </v-card-text>

    <v-row class="teste">
      <v-card class="ml-5 mb-5" max-width="434" tile>
        <v-tabs>
          <v-tab>
            <v-icon left>mdi-account</v-icon>Professor
          </v-tab>
          <v-tab>
            <v-icon left>mdi-account-card-details-outline</v-icon>Currículo
          </v-tab>
          <v-tab>
            <v-icon left>mdi-application</v-icon>Cursos
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-img height="100%" src="../assets/banners/background.png">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img src="../assets/professores/prof1.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{prof1}}</v-list-item-title>
                        <v-list-item-subtitle>Web Designer</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-title class="title">Seu Currículo</v-list-item-title>
                <ul class="lista">
                  <li>Formado em Ciência da Computação pela PUC-PR</li>
                  <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
                  <li>Design Gráfico</li>
                  <li>Web Designer</li>
                  <li>Pós-graduado em Marketing</li>
                  <li>Colaborador oficial do framework vuetify</li>
                  <li>Trabalhou por 2 anos na Tiwebdesign</li>
                  <li>Etec Dr.Adail Nunes da Silva</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-content>
                  <v-list-item-title class="title">Este professor ministra os cursos abaixo:</v-list-item-title>
                </v-list-item-content>
                <ul class="lista">
                  <li>Curso Adobe Photoshop cs6</li>
                  <li>Curso Adobe Premiere Pro cs6</li>
                  <li>Curso Adobe Ilustrator cs6</li>
                  <li>Curso After Effects cs6</li>
                  <li>Curso Corel Drawn X8</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <v-card class="ml-5 mb-5" max-width="434" tile>
        <v-tabs>
          <v-tab>
            <v-icon left>mdi-account</v-icon>Professor
          </v-tab>
          <v-tab>
            <v-icon left>mdi-account-card-details-outline</v-icon>Currículo
          </v-tab>
          <v-tab>
            <v-icon left>mdi-application</v-icon>Cursos
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-img height="100%" src="../assets/banners/background.png">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img src="../assets/professores/prof2.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{prof2}}</v-list-item-title>
                        <v-list-item-subtitle>Desenvolvedor de jogos</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-title class="title">Seu Currículo</v-list-item-title>
                <ul class="lista">
                  <ul>
                    <li>Pós-Graduação | Jogos E Animação Digital: Modelagem 3d, Game Design</li>
                    <li>Desenho e Ilustração Digital</li>
                    <li>Inteligência Artificial.</li>
                    <li>Graduação em Projeto e desenvolvimento de jogos digitais - Universidade Cruzeiro do sul</li>
                    <li>Alta experiência com Realidade Aumentada</li>
                    <li>Pós-graduação lato sensu – Especialização em Produção Artística para Jogos Digitais.</li>
                  </ul>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-content>
                  <v-list-item-title class="title">Este professor ministra os cursos abaixo:</v-list-item-title>
                </v-list-item-content>
                <ul class="lista">
                  <li>Curso Zbrush</li>
                  <li>Curso 3ds Max</li>
                  <li>Curso Cinema 4d</li>
                  <li>Curso Maya</li>
                  <li>Curso Blender</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <v-card class="ml-5 mb-5" max-width="434" tile>
        <v-tabs>
          <v-tab>
            <v-icon left>mdi-account</v-icon>Professor
          </v-tab>
          <v-tab>
            <v-icon left>mdi-account-card-details-outline</v-icon>Currículo
          </v-tab>
          <v-tab>
            <v-icon left>mdi-application</v-icon>Cursos
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-img height="100%" src="../assets/banners/background.png">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img src="../assets/professores/prof3.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{prof3}}</v-list-item-title>
                        <v-list-item-subtitle>Programador Sênior</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-title class="title">Seu Currículo</v-list-item-title>
                <ul class="lista">
                  <li>Formado em Ciência da Computação pela PUC-PR</li>
                  <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
                  <li>Possui diversas certificações na área de TI</li>
                  <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
                  <li>Desenvolvedor de aplicativos para o ambiente iOS da Apple</li>
                  <li>MySQL - Guia do Programador (ed. Novatec)</li>
                  <li>Construindo Aplicações Web com PHP & MySQL (ed. Novatec)</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-list-item-content>
                  <v-list-item-title class="title">Este professor ministra os cursos abaixo:</v-list-item-title>
                </v-list-item-content>
                <ul class="lista">
                  <li>Curso Html5 e CSS3</li>
                  <li>Curso Java</li>
                  <li>Curso Javascript</li>
                  <li>Curso Php</li>
                  <li>Curso Python</li>
                  <li>Curso C#</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>

    <section class="depoimento mt-5 mb-5">
      <p
        class="ml-5"
      >"Achei o curso bastante dinâmico, fluido. Fácil de levar até o final e com informação suficiente para que possamos caminhar sozinhos."</p>
      <p class="ml-5">Luciano Renato | Santos- SP</p>
    </section>

 <AppNewsletter/>

  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppNewsletter from '../components/AppNewsletter'
export default {
  data() {
    return {
      prof1: "Lucas Santos",
      prof2: "Jorge Alcantara",
      prof3: "Fabio Vasconcelos",

      textoinicio1:
        "Os nossos professores são mestres em programação, design, frameworks e tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única , que faz questão de proporcionar aos alunos a experiência de um curso presencial, com todas as vantagens que só o meio online oferece.Abaixo você confere os docentes por trás de todos os nossos cursos:",
      textbannerprof: "Professores da Diorama Digital"
    };
  },
  components: {
    AppHeader,
    AppNewsletter
  }
};
</script>


<style>
.ttl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.textop2 {
  font-size: 1rem;
}
.profimg {
  margin: 10px;
  border-radius: 100rem;
}

.fundo {
  background-image: url(../assets/banners/banner1.svg);
  background-repeat: no-repeat;
  background-size: auto auto;
}
.linha {
  background-color: rgb(0, 0, 185);
  color: white;
  width: auto;
  font-size: 1.7rem;
}
.quebra {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.lista {
  color: black;
}
.teste {
  display: flex;
  justify-content: center;
  align-items: center;
}

.depoimento {
  background-color: rgb(113, 113, 255);
  color: rgb(255, 253, 253);
  height: 7rem;
}

@media (max-width: 600px) {
  .tituloh {
    font-size: 1.3rem;
  }
}

@media (max-width: 700px) {
  .teste {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>