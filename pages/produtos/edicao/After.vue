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
        <p>A ideia desse curso é ensinar a ferramenta com um direcionamento para a demanda do mercado real! Eu quero que você termine o curso e já esteja preparado para sair à caça de trabalho. Por isso a ideia é que ao final você tenha o seu próprio demoreel (portfolio) com os tipos de videos mais solicitados do mercado. Pois todo cliente antes de te contratar vai pedir que você mostre algum material seu que se assemelhe ao que ele está precisando. Sem ter o que mostrar, não tem cliente.</p>

        <h1 class="fonte">Requisitos</h1>
        <p>
          Não é necessário ter nenhum conhecimento prévio para fazer este curso.
          Um computador com o Adobe After Effects CC instalado.
        </p>
      </v-row>
    </v-col>

    <section class="centro fundo tmn backgroundt">Conteúdo</section>

    <v-col md="5" class="mx-auto">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>+ Introdução</v-expansion-panel-header>
          <v-expansion-panel-content>CONHECENDO O SEU INSTRUTOR</v-expansion-panel-content>
          <v-expansion-panel-content>ÁREAS DE ATUAÇÃO</v-expansion-panel-content>
          <v-expansion-panel-content>COMO USAR O MATERIAL EM ANEXO</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 01#KinectType</v-expansion-panel-header>
          <v-expansion-panel-content>ENTENDENDO A INTERFACE</v-expansion-panel-content>
          <v-expansion-panel-content>CRIANDO UM PROJETO</v-expansion-panel-content>
          <v-expansion-panel-content>PAINEL PROJECT</v-expansion-panel-content>
          <v-expansion-panel-content>PAINEL TIMELINE</v-expansion-panel-content>
          <v-expansion-panel-content>PAINEL DE VISUALIZAÇÃO</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 02#Whiteboard</v-expansion-panel-header>
          <v-expansion-panel-content>CRIANDO O CAMINHO</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO O STROKE</v-expansion-panel-content>
          <v-expansion-panel-content>O EFEITO FILL</v-expansion-panel-content>
          <v-expansion-panel-content>RECORTANDO UMA IMAGEM</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO A MÃO</v-expansion-panel-content>
          <v-expansion-panel-content>COPIANDO A MASK</v-expansion-panel-content>
          <v-expansion-panel-content>MENU SELECIONAR</v-expansion-panel-content>
          <v-expansion-panel-content>MONTANDO A COMPOSIÇÃO</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 03#Infográficos</v-expansion-panel-header>
          <v-expansion-panel-content>DESENHANDO O PIN</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO O TEXTO</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO O PIN</v-expansion-panel-content>
          <v-expansion-panel-content>CLONANDO UMA COMPOSIÇÃO</v-expansion-panel-content>
          <v-expansion-panel-content>MONTANDO A COMPOSIÇÃO</v-expansion-panel-content>
          <v-expansion-panel-content>A TEORIA DO MATTE</v-expansion-panel-content>
          <v-expansion-panel-content>MONTANDO A ANIMAÇÃO FINAL</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 04#Personagem básico</v-expansion-panel-header>
          <v-expansion-panel-content>DESENHANDO A CAIXA</v-expansion-panel-content>
          <v-expansion-panel-content>DESENHANDO A ESTEIRA</v-expansion-panel-content>
          <v-expansion-panel-content>DESENHANDO A RODA</v-expansion-panel-content>
          <v-expansion-panel-content>DESENHANDO O CORPO</v-expansion-panel-content>
          <v-expansion-panel-content>DESENHANDO A GARRA</v-expansion-panel-content>
          <v-expansion-panel-content>PARENTANDO</v-expansion-panel-content>
          <v-expansion-panel-content>DESPARENTANDO</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO A ESTEIRA</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMANDO A GARRA</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 05#Animação de logo</v-expansion-panel-header>
          <v-expansion-panel-content>TEXTOS</v-expansion-panel-content>
          <v-expansion-panel-content>TEXTOS DE PONTO E TEXTOS DE PARAGRAFO</v-expansion-panel-content>
          <v-expansion-panel-content>CONFIGURANDO TEXTOS</v-expansion-panel-content>
          <v-expansion-panel-content>INSTALANDO FONTES DE TEXTOS</v-expansion-panel-content>
          <v-expansion-panel-content>ESTILOS DE CAMADAS</v-expansion-panel-content>
          <v-expansion-panel-content>TRABALHO - 02</v-expansion-panel-content>
          <v-expansion-panel-content>TRABALHO - 03</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 06#Efeitos visuais básicos</v-expansion-panel-header>
          <v-expansion-panel-content>PRINCIPAIS AJUSTES DE IMAGENS</v-expansion-panel-content>
          <v-expansion-panel-content>FERRAMENTAS DE CORREÇÃO DE IMAGEM</v-expansion-panel-content>
          <v-expansion-panel-content>FERRAMENTA CARIMBO</v-expansion-panel-content>
          <v-expansion-panel-content>TRABALHO - 04</v-expansion-panel-content>
          <v-expansion-panel-content>TRABALHO - 05</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>+ Técnica 07#Personagem avançado</v-expansion-panel-header>
          <v-expansion-panel-content>ANIMAÇÃO GIF</v-expansion-panel-content>
          <v-expansion-panel-content>CONCEITOS BÁSICOS DE ANIMAÇÃO GIF</v-expansion-panel-content>
          <v-expansion-panel-content>LIMITE DE CORES DO FORMATO GIF</v-expansion-panel-content>
          <v-expansion-panel-content>CRIANDO ANIMAÇÃO GIF</v-expansion-panel-content>
          <v-expansion-panel-content>ANIMAÇÃO GIF COM TEXTOS</v-expansion-panel-content>
          <v-expansion-panel-content>TRABALHO - 06</v-expansion-panel-content>
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

      <v-card class="ml-5 mb-5" max-width="30rem" tile>
        <v-list-item-content>
          <v-list-item-title class="title ml-5 black--text">Currículo do Professor</v-list-item-title>
        </v-list-item-content>

        <ul class="lista ml-4 black--text">
          <li>Formado em Ciência da Computação pela PUC-PR</li>
          <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
          <li>Design Gráfico</li>
          <li>Web Designer</li>
          <li>Pós-graduado em Marketing</li>
          <li>Colaborador oficial do framework vuetify</li>
          <li>Trabalhou por 2 anos na Tiwebdesign</li>
          <li>Etec Dr.Adail Nunes da Silva</li>
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
    titleTemplate: "%s - Curso de After effects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Página do curso de After effects da Diorama Cursos online"
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Curso de After effects - Diorama Cursos"
      },
      { property: "og:site_name", content: "Diorama Cursos" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "http://localhost:3000/produtos/edicao/After"
      },
      {
        property: "og:image",
        content:
          "https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: "Página do curso de After effects da Diorama Cursos online"
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "http://localhost:3000/produtos/edicao/After"
      },
      {
        name: "twitter:title",
        content: "Curso de After effects - Diorama Cursos"
      },
      {
        name: "twitter:description",
        content: "Página do curso de After effects da Diorama Cursos online"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Curso de After effects - Diorama Cursos" },
      {
        itemprop: "description",
        content: "Página do curso de After effects da Diorama Cursos online"
      },
      {
        itemprop: "image",
        content:
          "https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w"
      },
      { rel: "canonical", href: "http://localhost:3000/produtos/edicao/After" }
    ]
  },
  data() {
    return {
      nomecurso: "Adobe After Effects cs6",
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

.itenslado {
  display: flex;
  justify-content: center;
  align-items: center;
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