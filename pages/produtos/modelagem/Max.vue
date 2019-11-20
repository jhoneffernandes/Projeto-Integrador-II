<template>
  <v-container pa-0 ma-0 fluid>
    <AppHeader />

    <section class="mt-1">
      <v-btn class="ma-2" color="blue darken-2" dark @click="voltar">
        <v-icon dark left>mdi-arrow-left</v-icon>Voltar
      </v-btn>
    </section>

    <v-card outlined class="emlinha blue">
      <v-col class="cortexto" md="5" sm="5" xl="2">
        <p class="nomecurso">
          Curso
          <br />
          {{nomecurso}}
        </p>

        <div class="text-center">
          <v-rating v-model="rating" color="yellow"></v-rating>
        </div>
      </v-col>
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

     <section class="fundo-items">
      <h1 class="centered titulo-item mt-8">Recomendações</h1>
      <div class="recomenda-item">
        <div>
          <v-img
            class="ml-5 mt-5 mb-5"
            height="10rem"
            contain
            width="10rem"
            :src="require('~/assets/cursos/ilustrator.png')"
          ></v-img>

          <div class="nome-item mb-6">
            <h1 class="title">Adobe Illustrator cs6</h1>
            <h3>Preço: R$ 150,00</h3>
            <v-rating v-model="rating" color="yellow"></v-rating>
            <router-link to="./ilustrator">
              <v-btn color="primary">Saiba mais</v-btn>
            </router-link>
          </div>
        </div>

        <div>
          <v-img
            class="ml-5 mt-5 mb-5"
            height="10rem"
            contain
            width="10rem"
            :src="require('~/assets/cursos/corel.png')"
          ></v-img>

          <div class="nome-item mb-6">
            <h1 class>Corel Draw x8</h1>
            <h3>Preço: R$ 150,00</h3>
            <v-rating v-model="rating" color="yellow"></v-rating>
            <router-link to="./corel">
              <v-btn color="primary">Saiba mais</v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="container-item mt-5 mb-5">
      <div class="apresenta-item">
        <v-icon slot="icon" color="warning" size="36">mdi-account</v-icon>
        <h1>Profesor deste curso</h1>
      </div>

      <div>
         <router-link to="/Professores">
          <v-btn color="primary" text>Ver todos os professores</v-btn>
        </router-link>
      </div>
    </section>

    <v-row>
      <v-card class="ml-5 mb-5" max-width="30rem" tile>
        <v-img height="100%" :src="require('~/assets/banners/background.png')">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-img :src="require ('~/assets/professores/prof2.jpg')"></v-img>
            </v-col>
            <v-col class="py-0">
              <v-list-item dark>
                <v-list-item-content>
                  <v-list-item-title class="title">{{professor}}</v-list-item-title>
                  <v-list-item-subtitle>Desenvolvedor de Jogos</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>

      <v-card class="ml-5 mb-5" max-width="30rem" tile>
        <v-list-item-content>
          <v-list-item-title class="title ml-5 black--text">Currículo do Professor</v-list-item-title>
        </v-list-item-content>

        <ul class="lista ml-4 black--text">
          <li>Pós-Graduação | Jogos E Animação Digital: Modelagem 3d, Game Design</li>
          <li>Desenho e Ilustração Digital</li>
          <li>Inteligência Artificial.</li>
          <li>Graduação em Projeto e desenvolvimento de jogos digitais - Universidade Cruzeiro do sul</li>
          <li>Alta experiência com Realidade Aumentada</li>
          <li>Pós-graduação lato sensu – Especialização em Produção Artística para Jogos Digitais.</li>
        </ul>
      </v-card>
    </v-row>

    <v-row>
      <section class="depoimento mt-5 mb-5">
        <v-col md="10" sm="10">
          <p
            class="ml-5"
          >"Já assisti à 1ª aula do curso de Adobe Photoshop CS6, e já fiz os exercícios propostos pós-aula, que, aliás, me deixou bastante empolgado por seu uma aula clara e coesa para com os iniciantes. Parabéns a equipe da Diorama"</p>
          <p class="ml-5">Luciano Renato | Piracicaba - SP</p>
        </v-col>
      </section>
    </v-row>
    <v-row class="ml-8" justify="center" align="center">
      <AppHelp />
      <AppNewsletter />
    </v-row>
  </v-container>
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
  head: {
    titleTemplate: "%s - Curso de Corel Draw",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Página do curso de Corel Draw da Diorama Cursos online"
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Curso de Corel Draw - Diorama Cursos" },
      { property: "og:site_name", content: "Diorama Cursos" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "http://localhost:3000/produtos/edicao/Corel"
      },
      {
        property: "og:image",
        content:
          "https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: "Página do curso de Corel Draw da Diorama Cursos online"
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "http://localhost:3000/produtos/edicao/Corel"
      },
      {
        name: "twitter:title",
        content: "Curso de Corel Draw - Diorama Cursos"
      },
      {
        name: "twitter:description",
        content: "Página do curso de Corel Draw da Diorama Cursos online"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Curso de Corel Draw - Diorama Cursos" },
      {
        itemprop: "description",
        content: "Página do curso de Corel Draw da Diorama Cursos online"
      },
      {
        itemprop: "image",
        content:
          "https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w"
      },
      { rel: "canonical", href: "http://localhost:3000/produtos/edicao/Corel" }
    ]
  },
  data() {
    return {
      nomecurso: "Curso de 3ds Max",
      tempocurso: "77 aulas | 10 horas",
      professor: "Jorge Alcantara",
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

.container-item{
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.apresenta-item {
  display: flex;
  justify-content: flex-start;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.fundo-items {
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(12, 12, 14);
}
.titulo-item {
  padding: 10px;
  background-color: blue;
  color: cyan;
  font-size: 2rem;
}
.nome-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.centered {
  text-align: center;
}

.recomenda-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.professorbanner {
  height: 100%;
  width: auto;
}
.backgroundt {
  background-image: url("~assets/banners/certificado.svg");
}
.depoimento {
  background-image: url("~assets/banners/depoimento.svg");
  color: rgb(255, 253, 253);
  height: 10rem;
  width: 100rem;
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

@media (min-width: 600px) {
  .recomenda-item {
    flex-direction: row;
    justify-content: space-evenly;
  }
}
@media (max-width: 370px) {
  .tamanhocardprof {
    height: 16rem;
    width: 16rem;
  }
  .tamanhocurriculo {
    height: 22rem;
    width: 16rem;
  }
  .bannercardprof {
    width: 20rem;
  }
  .tamanhorecomendacard {
    width: 20rem;
  }
  .container-item{
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
}
</style>