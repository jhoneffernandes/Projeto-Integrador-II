<template>
  <div>
    <AppHeader />
    <v-container pa-0 ma-0 fluid>
      
      <section class="mt-1">
        <v-btn class="ma-2 " color="blue darken-2" dark @click="voltar">
          <v-icon dark left>mdi-arrow-left</v-icon>Voltar
        </v-btn>
      </section>

      <v-card outlined class=" emlinha blue">
        <v-col md="2" sm="3">
          <v-img
            class="lado"
            height="10rem"
            contain
            width="10rem"
           :src="require('../assets/cursos/photoshop.png')"
          ></v-img>
        </v-col>
        <v-col class="cortexto" md="5" sm="2">
            <p class="nomecurso">{{nomecurso}}</p>
            <p class="horacurso">{{tempocurso}}</p>
        </v-col>

        <v-col md="3" sm="4">
          <section class="cortexto">
            <p class="nomeprof">{{professor}}</p>
          </section>

          <v-img
            longdesc="Homen com sorriso, branco de terno preto"
            aspect-ratio="1"
            width="10rem"
            max-height="300"
            :src="require('../assets/professores/prof1.jpg')"
          ></v-img>
        </v-col>
      </v-card>

      <section class="centro fundo">
        <router-link to="/compra">
          <v-btn tile class="mt-3" outlined>Inscreva-se</v-btn>
        </router-link>
        <p>
          12x s/juros R$ 33
          Preço válido até 31/10/2019.
        </p>
      </section>

      <v-row class="ml-5 fdn">
        <h1 class="fonte">Requisitos</h1>
        <p>
          Os alunos não precisam ter nenhum conhecimento no programa pois ensinamos do zero
          Basta o aluno ter um conhecimento básico de informatica e possuir o programa photoshop cs5 , cs6 ou cc.
        </p>
        <h1 class="fonte">Resumo</h1>
        <p>Neste Curso de Adobe Photoshop do Básico ao Avançado, vamos aprender na pratica a utilizar o programa criando diversos trabalhos e exercícios de forma que possamos trabalhar em um nível avançado e até mesmo profissional mas sem deixar a parte teórica de lado.</p>
      </v-row>

      <section class="centro fundo tmn">Conteúdo</section>

      <v-col md="5" class="mx-auto">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item2</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item3</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item4</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item5</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item6</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item7</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item8</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item9</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item10</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Item11</v-expansion-panel-header>
            <v-expansion-panel-content>Vamo BBODUBUSlamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <section class="fundodois justify">
        <h1 class="centro letra">Certificado</h1>
        <p class="ml-2">
          Ao concluir o curso com nota igual ou superior à 6,5, o aluno recebe o certificado de conclusão do curso em formato digital (PDF). Caso o aluno não atinja a nota necessária, poderá revisar as aulas que desejar e refazer as avaliações.
          A Diorama Cursos Online é associada à ABED (Associação Brasileira de Educação a Distância)
        </p>
      </section>

      <v-col md="5" sm="5" class="mx-auto">
        <section class="centro agd">
          Precisa de ajuda?
          <br />Preencha o formulario com sua dúvida.
        </section>

        <v-form>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nome" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="assunto" label="Assunto"></v-text-field>

          <v-textarea v-model="desc" label="Descrição"></v-textarea>

          <v-btn tile elevation="0" color="primary mr-3">Enviar</v-btn>
          <v-btn tile elevation="0" color="primary">Limpar</v-btn>
        </v-form>
      </v-col>

      <section class="depoimento mt-5 mb-5">
        <p
          class="ml-5"
        >ESTE CURSO E FODA CARAIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
        <p class="ml-5">IUGOSLAVIA | SAO PAULO-SP</p>
      </section>

      <v-row justify="center" dense class="my-5">
        <v-col cols="12" xl="12" lg="9" md="8" sm="12">
          <v-row justify="center">
            <v-card class="mx-6"  tile="" elevation="2" width="35rem" height="16rem">
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
    </v-container>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      nomecurso: "Adobe Photoshop cs6",
      tempocurso: "77 aulas | 10 horas",
      professor: "Lucas Santos"
    };
  },
  methods:{
    voltar() {
      this.$router.push("/");
    }
  },
};
</script>

<style >
.emlinha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.cortexto,
.fundo {
  color: white;
}
.fundo {
  background-color: rgb(184, 184, 255);
}
.fundodois {
  background-color: rgba(211, 207, 248, 0.61);
  height: 7rem;
}
.centro {
  text-align: center;
}
.letra{
  font-family: sans-serif;
  height: 4rem;
  font-size: 2rem;
  color: white;
}
.fonte {
  font-size: 1.5rem;
  color: black;
}
.tmn {
  height: 4rem;
  font-size: 2rem;
}
.agd {
  background-color: rgb(177, 177, 248);
  color: white;
  font-size: 1.5rem;
}
.depoimento {
  background-image: url(../assets/banners/banner1.svg);
  background-repeat: no-repeat;
  color: rgb(255, 0, 0);
  height: 5rem;
}
.nomecurso{
  font-size: 3rem;
  color: rgb(255, 255, 255);
}
.horacurso{
  font-size: 2rem;
  color: rgba(0, 0, 124, 0.658);
}
.nomeprof{
  font-size: 1.5rem;

}
</style>