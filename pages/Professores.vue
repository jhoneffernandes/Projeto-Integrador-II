<template>
  <v-container pa-0 ma-0 fluid>
    <AppHeader />

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

    <v-layout class="ml-5 mr-3">
      <v-row>
        <v-card-text>
          <p class="textop2 text-justify">
            Os professores dos nossos cursos online são mestres desenvolvimento web, programação, edição, e são web designers experientes, que tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única para nossos cursos online, que faz questão de proporcionar aos alunos a experiência de cursos online presenciais, com todas as vantagens que só o meio online oferece. Logo abaixo você confere os docentes por trás de todos os nossos cursos online e mais, bem-vindos a mais nova escola online da web.
            <a
              href="#/classes"
            >clique aqui para ver os nossos cursos.</a>
          </p>
        </v-card-text>
      </v-row>
    </v-layout>

    <v-row v-for="p of professores" :key="p.id" align="center" justify="center"  id="principal">
      <v-col lg="4" md="4" sm="6" xl="5">
        <v-card class="ml-5 mb-5 tamanhocard" max-width="434" tile>
          <v-tabs show-arrows="center">
            <v-tab>
              <v-icon left>mdi-account</v-icon>Professor
            </v-tab>
            <v-tab>
              <v-icon left>mdi-account-card-details-outline</v-icon>Currículo
            </v-tab>
            <v-tab>
              <v-icon left>mdi-application</v-icon>Cursos
            </v-tab>

            <v-tab-item >
              <v-card flat>
                <v-img height="100%" :src="require('../assets/banners/background.png')">
                  <v-row>
                    <v-col align-self="start" class="pa-0" cols="12">
                      <v-avatar class="profile" color="grey" size="164" tile>
                        <v-img :src="require(`../assets/professores/${p.imagem}.jpg`)"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                      <v-list-item color="rgba(0, 0, 0, .4)" dark>
                        <v-list-item-content>
                          <v-list-item-title class="title">{{ p.nome }}</v-list-item-title>
                          <v-list-item-subtitle>{{ p.area }}</v-list-item-subtitle>
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
                    <li>{{ p.curriculo }}</li>
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
                    <li>{{ p.cursolecionado }}</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>

    

    <section class="mt-5 mb-5">
      <v-row justify="center">
        <v-card height="100%" width="100rem" dark class="depoimento">
          <p
            class="mx-5"
          >"Achei o curso bastante dinâmico, fluido. Fácil de levar até o final e com informação suficiente para que possamos caminhar sozinhos."</p>
          <p class="mx-5">Luciano Renato | Santos- SP</p>
        </v-card>
      </v-row>
    </section>

    <AppNewsletter />
  </v-container>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppNewsletter from "../components/AppNewsletter";
export default {
  data() {
    return {
      professores: [],

      textoinicio1:
        "Os nossos professores são mestres em programação, design, frameworks e tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única , que faz questão de proporcionar aos alunos a experiência de um curso presencial, com todas as vantagens que só o meio online oferece.Abaixo você confere os docentes por trás de todos os nossos cursos:",
      textbannerprof: "Professores da Diorama Digital"
    };
  },
  components: {
    AppHeader,
    AppNewsletter
  },
  created() {
    const professores = this.$ls.get("professores");
    if (professores) this.professores = professores;
  },
  head: {
    titleTemplate: "%s - Professores",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Página contendo todos os professores da Diorama Cursos online, mostrando seus nomes, currículos e os cursos ministrados na Diorama"
      }
    ]
  }
};
</script>


<style>
.textop2 {
  font-size: 1rem;
}

.depoimento p {
  background-color: rgba(0, 0, 0, 0.3);
}

.lista {
  color: black;
}

@media (max-width: 600px) {
  .tituloh {
    font-size: 1.3rem;
  }
}
@media (max-width: 370px) {
  .tamanhocard {
    height: 16rem;
    width: 19rem;
  }
}
</style>