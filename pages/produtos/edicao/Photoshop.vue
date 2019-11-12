<template>
  <div>
    <AppHeader />
    <v-container pa-0 ma-0 fluid>
      <section class="mt-1">
        <v-btn class="ma-2" color="blue darken-2" dark @click="voltar">
          <v-icon dark left>mdi-arrow-left</v-icon>Voltar
        </v-btn>
      </section>

      <v-card outlined class="emlinha blue">
        
          <v-row justify="center">
            <v-col md="2" sm="5" xl="2">
              <v-img
                class="ml-5 mt-5 mb-5"
                height="10rem"
                contain
                width="10rem"
                :src="require('~/assets/cursos/photoshop.png')"
              ></v-img>
            </v-col>
       
  
          <v-col class="cortexto" md="3" sm="5" xl="2">
            <p class="nomecurso">
              Curso
              <br />
              {{nomecurso}}
            </p>
  
            <div class="text-center">
              <v-rating v-model="rating" color="yellow"></v-rating>
            </div>
          </v-col>
          </v-row>
      </v-card>

      <v-col lg="10" md="12" sm="12">
        <v-row class="ml-5 fdn">
          <h1 class="fonte">Resumo</h1>
          <p>Neste Curso de Adobe Photoshop do Básico ao Avançado, vamos aprender na pratica a utilizar o programa criando diversos trabalhos e exercícios de forma que possamos trabalhar em um nível avançado e até mesmo profissional mas sem deixar a parte teórica de lado.</p>

          <h1 class="fonte">Requisitos</h1>
          <p>
            Os alunos não precisam ter nenhum conhecimento no programa pois ensinamos do zero
            Basta o aluno ter um conhecimento básico de informatica e possuir o programa photoshop cs5 , cs6 ou cc.
          </p>
        </v-row>
      </v-col>

      <section class="centro fundo tmn backgroundt">Conteúdo</section>

      <v-col md="5" class="mx-auto">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>+ Apresentação do curso</v-expansion-panel-header>
            <v-expansion-panel-content>CONHECENDO MELHOR O CURSO</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Apresentando o Photoshop</v-expansion-panel-header>
            <v-expansion-panel-content>INTRODUÇÃO AO PHOTOSHOP</v-expansion-panel-content>
            <v-expansion-panel-content>O QUE É O PHOTOSHOP</v-expansion-panel-content>
            <v-expansion-panel-content>PRINCIPAIS TECLAS DE ATALHO</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Ferramentas de seleçao</v-expansion-panel-header>
            <v-expansion-panel-content>O QUE É SELEÇÃO</v-expansion-panel-content>
            <v-expansion-panel-content>SELEÇÔES DE LETREIRO</v-expansion-panel-content>
            <v-expansion-panel-content>SELEÇÕES DE LAÇO</v-expansion-panel-content>
            <v-expansion-panel-content>SELEÇÕES RÁPIDAS</v-expansion-panel-content>
            <v-expansion-panel-content>SELEÇOES DE INTERVALO DE CORES</v-expansion-panel-content>
            <v-expansion-panel-content>SELEÇÃO DE MÁSCARA RÁPIDA</v-expansion-panel-content>
            <v-expansion-panel-content>MENU SELECIONAR</v-expansion-panel-content>
            <v-expansion-panel-content>SALVAR E CARREGAR SELEÇÕES</v-expansion-panel-content>
            <v-expansion-panel-content>EXERCÍCIO 01 SELEÇÕES</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Pinceis</v-expansion-panel-header>
            <v-expansion-panel-content>Inicio de seção - Pinceis</v-expansion-panel-content>
            <v-expansion-panel-content>DIFERENÇA ENTRE LÁPIS E PINCEL</v-expansion-panel-content>
            <v-expansion-panel-content>SELETOR DE CORES</v-expansion-panel-content>
            <v-expansion-panel-content>PRINCIPAIS CONFIGURAÇÕES DOS PINCÉIS</v-expansion-panel-content>
            <v-expansion-panel-content>BAIXAR E CARREGAR PINCEIS</v-expansion-panel-content>
            <v-expansion-panel-content>CRIANDO PINCÉIS</v-expansion-panel-content>
            <v-expansion-panel-content>MENU AVANÇADO DOS PINCEIS</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Camadas e Máscaras</v-expansion-panel-header>
            <v-expansion-panel-content>CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>O QUE SÃO CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>EDIÇÃO DESTRUTIVA E EDIÇÃO NÃO DESTRUTIVA</v-expansion-panel-content>
            <v-expansion-panel-content>MENU DAS CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>MODOS DE MESCLAGEM</v-expansion-panel-content>
            <v-expansion-panel-content>ENTENDENDO O QUE É MÁSCARAS DE CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 01</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Textos</v-expansion-panel-header>
            <v-expansion-panel-content>TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>TEXTOS DE PONTO E TEXTOS DE PARAGRAFO</v-expansion-panel-content>
            <v-expansion-panel-content>CONFIGURANDO TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>INSTALANDO FONTES DE TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>ESTILOS DE CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 02</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 03</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Trabalhando imagens</v-expansion-panel-header>
            <v-expansion-panel-content>PRINCIPAIS AJUSTES DE IMAGENS</v-expansion-panel-content>
            <v-expansion-panel-content>FERRAMENTAS DE CORREÇÃO DE IMAGEM</v-expansion-panel-content>
            <v-expansion-panel-content>FERRAMENTA CARIMBO</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 04</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 05</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Animação Gif</v-expansion-panel-header>
            <v-expansion-panel-content>ANIMAÇÃO GIF</v-expansion-panel-content>
            <v-expansion-panel-content>CONCEITOS BÁSICOS DE ANIMAÇÃO GIF</v-expansion-panel-content>
            <v-expansion-panel-content>LIMITE DE CORES DO FORMATO GIF</v-expansion-panel-content>
            <v-expansion-panel-content>CRIANDO ANIMAÇÃO GIF</v-expansion-panel-content>
            <v-expansion-panel-content>ANIMAÇÃO GIF COM TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 06</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Conceitos Teóricos</v-expansion-panel-header>
            <v-expansion-panel-content>CONCEITOS TEÓRICOS</v-expansion-panel-content>
            <v-expansion-panel-content>EIXO CARTESIANO</v-expansion-panel-content>
            <v-expansion-panel-content>PRINCIPAIS TAMANHO DE ARQUIVOS</v-expansion-panel-content>
            <v-expansion-panel-content>O QUE É FORMATOS DE IMAGENS</v-expansion-panel-content>
            <v-expansion-panel-content>QUAIS OS PRINCIPAIS FORMATOS DE IMAGENS</v-expansion-panel-content>
            <v-expansion-panel-content>COLOCANDO TEORIA EM PRATICA</v-expansion-panel-content>
            <v-expansion-panel-content>TEORIA DAS CORES</v-expansion-panel-content>
            <v-expansion-panel-content>COLOCANDO TEORIA EM PRATICA - 2</v-expansion-panel-content>
            <v-expansion-panel-content>CONCEITO PARA IMPRESSÃO</v-expansion-panel-content>
            <v-expansion-panel-content>CONCEITO TEORICO</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Filtros</v-expansion-panel-header>
            <v-expansion-panel-content>FILTROS</v-expansion-panel-content>
            <v-expansion-panel-content>OBJETOS INTELIGENTES OU SMART OBJECT</v-expansion-panel-content>
            <v-expansion-panel-content>GALERIA DE FILTROS</v-expansion-panel-content>
            <v-expansion-panel-content>MINI BRIDGE E BRIDGE</v-expansion-panel-content>
            <v-expansion-panel-content>EXERCÍCIO - 03 BANNERS</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Seção de Trabalhos</v-expansion-panel-header>
            <v-expansion-panel-content>INICIO DE SEÇÃO - TRABALHOS</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 07</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 08</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 09</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 10</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 11</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 12</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 13</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 14</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 15</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 16</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 17</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO FINAL ALUNO</v-expansion-panel-content>
            <v-expansion-panel-content>CONCLUSÃO FINAL</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <AppCertificado />

      <v-row align="center">
        <v-card width="100%">
          <h1 class="centro mt-7">Recomendações</h1>

          <v-card outlined elevation="0" class="mt-3 itenslado">
            <v-img
              class="ml-5 mt-5 mb-5"
              height="10rem"
              contain
              width="10rem"
              :src="require('~/assets/cursos/ilustrator.png')"
            ></v-img>

            <v-card-title class="title">Adobe Illustrator cs6</v-card-title>

            <v-card-text class="subtitle text-center">
              <h3>Preço: R$ 150,00</h3>
              <v-rating v-model="rating" color="yellow"></v-rating>
              <router-link to="./ilustrator">
                <v-btn color="primary">Saiba mais</v-btn>
              </router-link>
            </v-card-text>

            <v-img
              class="ml-5 mt-5 mb-5"
              height="10rem"
              contain
              width="10rem"
              :src="require('~/assets/cursos/corel.png')"
            ></v-img>

            <v-card-title>Corel Draw x8</v-card-title>

            <v-card-text class="subtitle text-center">
              <h3>Preço: R$ 150,00</h3>

              <v-rating v-model="rating" color="yellow"></v-rating>

              <router-link to="./corel">
                <v-btn color="primary">Saiba mais</v-btn>
              </router-link>
            </v-card-text>
          </v-card>
        </v-card>
      </v-row>

      <v-banner single-line class="mb-5 mt-5">
        <v-icon slot="icon" color="warning" size="36">mdi-account</v-icon>Professor deste curso
        <template v-slot:actions>
          <router-link to="./professores">
            <v-btn color="primary" text>Ver todos os professores</v-btn>
          </router-link>
        </template>
      </v-banner>

      <v-row>
        <v-card class="ml-5 mb-5" max-width="30rem" tile>
          <v-img height="100%" :src="require('~/assets/banners/background.png')">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-img :src="require ('~/assets/professores/prof1.jpg')"></v-img>
              </v-col>
              <v-col class="py-0">
                <v-list-item dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{professor}}</v-list-item-title>
                    <v-list-item-subtitle>Web Designer</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>

        <v-card class="ml-5 mb-5" max-width="30rem" tile dark>
          <v-img height="100%" :src="require('~/assets/banners/background.png')">
            <v-list-item-content>
              <v-list-item-title class="title ml-5">Currículo do Professor</v-list-item-title>
            </v-list-item-content>

            <ul class="lista ml-5">
              <li>Formado em Ciência da Computação pela PUC-PR</li>
              <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
              <li>Design Gráfico</li>
              <li>Web Designer</li>
              <li>Pós-graduado em Marketing</li>
              <li>Colaborador oficial do framework vuetify</li>
              <li>Trabalhou por 2 anos na Tiwebdesign</li>
              <li>Etec Dr.Adail Nunes da Silva</li>
            </ul>
          </v-img>
        </v-card>
      </v-row>

      <section class="depoimento mt-5 mb-5">
        <v-col md="10" sm="10">
          <p
            class="ml-5"
          >"Já assisti à 1ª aula do curso de Adobe Photoshop CS6, e já fiz os exercícios propostos pós-aula, que, aliás, me deixou bastante empolgado por seu uma aula clara e coesa para com os iniciantes. Parabéns a equipe da Diorama"</p>
          <p class="ml-5">Luciano Renato | Piracicaba - SP</p>
        </v-col>
      </section>
      <AppHelp />
      <AppNewsletter />
    </v-container>
  </div>
</template>
<script>
import AppNewsletter from "~/components/AppNewsletter";
import AppHeader from "~/components/AppHeader";
import AppHelp from "~/components/AppHelp";
import AppCertificado from "~/components/AppCertificado";
export default {
  components: {
    AppHeader,
    AppNewsletter,
    AppHelp,
    AppCertificado
  },
  data() {
    return {
      nomecurso: "Adobe Photoshop cs6",
      tempocurso: "77 aulas | 10 horas",
      professor: "Lucas Santos",
      rating: 5
    };
  },
  methods: {
    voltar() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.professorbanner {
  height: 100%;
  width: auto;
}
.dks {
  background-color: rgba(252, 252, 252, 0.623);
}
.emlinha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.centro {
  text-align: center;
}
.cortexto,
.fundo {
  color: white;
}

.letra {
  font-family: sans-serif;
  height: 4rem;
  font-size: 2rem;
  color: rgb(5, 1, 1);
}
.fonte {
  font-size: 1.5rem;
  color: black;
}
.tmn {
  height: 4rem;
  font-size: 2rem;
}
.textofonte {
  color: white;
  font-size: 1rem;
}

.nomecurso {
  font-size: 3rem;
  color: rgb(255, 255, 255);
}
.horacurso {
  font-size: 2rem;
  color: rgba(0, 0, 124, 0.658);
}
.nomeprof {
  font-size: 1.5rem;
}

.itenslado {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 360px) {
  .itenslado {
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
}

@media (min-width: 730px) {
  .itenslado {
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>