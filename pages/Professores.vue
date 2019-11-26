<template>
  <v-container pa-0 ma-0 fluid>
    <div :class="[ isLoading ? 'white' : 'black' ]">
    <AppHeader />
<v-row justify="center" align="end" class="my-5">
<v-btn title="botão para aumentar contraste da página" @click="changeColor">Contraste</v-btn>
<v-btn title="botão para aumentar texto principal da página" v-on:click="fontSize += 0.25">A+</v-btn>
<v-btn title="botão para voltar o texto principal da página ao tamanho padrão" v-on:click="fontSize = 1.5">A</v-btn>
<v-btn title="botão para diminuir o texto principal da página"  v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</v-btn>
</v-row>
      <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card :class="[ isLoading ? 'indigo' : 'grey darken-4' ]" tile width="100%" height="100%" dark>
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">{{ textbannerprof }}</h2>
            </v-card-title>

          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-layout class="ml-5 mr-3">
      <v-row>
        <v-card-text>
          <p :class="[ isLoading ? '' : 'white--text' ]" class="textop2 text-justify" v-bind:style="{ fontSize: fontSize + 'rem' }">
            Os professores dos nossos cursos online são mestres desenvolvimento web, programação, edição, e são web designers experientes, que tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única para nossos cursos online, que faz questão de proporcionar aos alunos a experiência de cursos online presenciais, com todas as vantagens que só o meio online oferece. Logo abaixo você confere os docentes por trás de todos os nossos cursos online e mais, bem-vindos a mais nova escola online da web.
           <router-link :class="[ isLoading ? '' : 'grey--text text--lighten-1' ]" to="/Cursos">clique aqui para ver os nossos cursos.</router-link>
          </p>
        </v-card-text>
      </v-row>
    </v-layout>

    <v-row align="center" justify="center"  id="principal">
  
        <v-card class="mx-12 mb-12 flex-row tamanhocard"  v-for="p of professores" :key="p.id" min-width="300px" max-width="450px" tile>
          <v-tabs show-arrows="center">
            <v-tab>
              <v-icon title="botão que leva a uma foto do professor" left>mdi-account</v-icon>Professor
            </v-tab>
            <v-tab>
              <v-icon title="botão que leva as formações do professor (currículo)" left>mdi-account-card-details-outline</v-icon>Currículo
            </v-tab>
            <v-tab>
              <v-icon title="botão que leva aos cursos que esse professor leciona na Diorama" left>mdi-application</v-icon>Cursos
            </v-tab>

            
            <v-tab-item>
              <v-card flat>
                <v-img alt="Desenho de um homem de costas,sentado numa cadeira programando num computador com 2 telas com um café ao lado" height="100%" :src="require('../assets/banners/background.png')">
                  <v-row>
                    <v-col align-self="start" class="pa-0" cols="12">
                      <v-avatar class="profile" color="grey" size="164" tile>
                        <v-img alt="Imagem do professor sorridente utilizando roupas sociais" :src="require(`../assets/professores/${p.imagem}.jpg`)"></v-img>
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
    </div>
  </v-container>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppNewsletter from "../components/AppNewsletter";
export default {
  data() {
    return {
      professores: [],
      fontSize: 1.25,
      isLoading: true,

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
  },
  methods: {
       changeColor(){
                    this.isLoading = !this.isLoading;
                   }}
};
</script>


<style>
.textop2 {
  font-size: 1rem;
  line-height: 1;
}

.depoimento p {
  background-color: rgba(0, 0, 0, 0.3);
}

.lista {
  color: black;
}


@media (max-width: 370px) {
  .tamanhocard {
    height: 16rem;
    width: 19rem;
  }
}
</style>