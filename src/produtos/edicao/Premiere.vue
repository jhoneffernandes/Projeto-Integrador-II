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
        <v-col md="2" sm="3" >
          <v-img
            class="lado"
            height="10rem"
            contain
            width="10rem"
           :src="require('../../assets/cursos/premiere.png')"
          ></v-img>
        </v-col>
        <v-col class="cortexto" md="5" sm="5">
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
            :src="require('../../assets/professores/prof1.jpg')"
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

      <v-col lg="10" md="12" sm="12">
        <v-row class="ml-5 fdn">
          <h1 class="fonte">Requisitos</h1>
          <p>
            Os alunos não precisam ter nenhum conhecimento no programa pois ensinamos do zero
            Basta o aluno ter um conhecimento básico de informatica e possuir o programa photoshop cs5 , cs6 ou cc.
          </p>
          <h1 class="fonte">Resumo</h1>
          <p>Neste Curso de Adobe Photoshop do Básico ao Avançado, vamos aprender na pratica a utilizar o programa criando diversos trabalhos e exercícios de forma que possamos trabalhar em um nível avançado e até mesmo profissional mas sem deixar a parte teórica de lado.</p>
        </v-row>
      </v-col>

      <section class="centro fundo tmn">Conteúdo</section>

      <v-col md="5" class="mx-auto">
        <v-expansion-panels >
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
            <v-expansion-panel-content>SELEÇÔES DE LETREIRO </v-expansion-panel-content>
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
            <v-expansion-panel-content>Inicio de seção - Pinceis </v-expansion-panel-content>
            <v-expansion-panel-content>DIFERENÇA ENTRE LÁPIS E PINCEL </v-expansion-panel-content>
            <v-expansion-panel-content>SELETOR DE CORES  </v-expansion-panel-content>
            <v-expansion-panel-content>PRINCIPAIS CONFIGURAÇÕES DOS PINCÉIS  </v-expansion-panel-content>
            <v-expansion-panel-content>BAIXAR E CARREGAR PINCEIS</v-expansion-panel-content>
            <v-expansion-panel-content>CRIANDO PINCÉIS </v-expansion-panel-content>
            <v-expansion-panel-content>MENU AVANÇADO DOS PINCEIS </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Camadas e Máscaras</v-expansion-panel-header>
            <v-expansion-panel-content>CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>O QUE SÃO CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>EDIÇÃO DESTRUTIVA E EDIÇÃO NÃO DESTRUTIVA  </v-expansion-panel-content>  
            <v-expansion-panel-content>MENU DAS CAMADAS</v-expansion-panel-content>
            <v-expansion-panel-content>MODOS DE MESCLAGEM</v-expansion-panel-content>                    
            <v-expansion-panel-content>ENTENDENDO O QUE É MÁSCARAS DE CAMADAS </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 01</v-expansion-panel-content>            
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Textos</v-expansion-panel-header>
            <v-expansion-panel-content>TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>TEXTOS DE PONTO E TEXTOS DE PARAGRAFO </v-expansion-panel-content>
            <v-expansion-panel-content>CONFIGURANDO TEXTOS </v-expansion-panel-content>
            <v-expansion-panel-content>INSTALANDO FONTES DE TEXTOS</v-expansion-panel-content>
            <v-expansion-panel-content>ESTILOS DE CAMADAS </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 02 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 03</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Trabalhando imagens</v-expansion-panel-header>
            <v-expansion-panel-content>PRINCIPAIS AJUSTES DE IMAGENS </v-expansion-panel-content>
            <v-expansion-panel-content>FERRAMENTAS DE CORREÇÃO DE IMAGEM  </v-expansion-panel-content>
            <v-expansion-panel-content>FERRAMENTA CARIMBO </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 04  </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 05 </v-expansion-panel-content>
          
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
            <v-expansion-panel-content>CONCEITOS TEÓRICOS </v-expansion-panel-content>
            <v-expansion-panel-content>EIXO CARTESIANO</v-expansion-panel-content>
            <v-expansion-panel-content>PRINCIPAIS TAMANHO DE ARQUIVOS</v-expansion-panel-content>
            <v-expansion-panel-content>O QUE É FORMATOS DE IMAGENS</v-expansion-panel-content>
            <v-expansion-panel-content>QUAIS OS PRINCIPAIS FORMATOS DE IMAGENS </v-expansion-panel-content>
            <v-expansion-panel-content>COLOCANDO TEORIA EM PRATICA  </v-expansion-panel-content>
            <v-expansion-panel-content>TEORIA DAS CORES  </v-expansion-panel-content>
            <v-expansion-panel-content>COLOCANDO TEORIA EM PRATICA - 2 </v-expansion-panel-content>
            <v-expansion-panel-content>CONCEITO PARA IMPRESSÃO</v-expansion-panel-content>
            <v-expansion-panel-content>CONCEITO TEORICO</v-expansion-panel-content>

          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Filtros</v-expansion-panel-header>
            <v-expansion-panel-content>FILTROS  </v-expansion-panel-content>
            <v-expansion-panel-content>OBJETOS INTELIGENTES OU SMART OBJECT </v-expansion-panel-content>
            <v-expansion-panel-content>GALERIA DE FILTROS </v-expansion-panel-content>
            <v-expansion-panel-content>MINI BRIDGE E BRIDGE  </v-expansion-panel-content>
            <v-expansion-panel-content>EXERCÍCIO - 03 BANNERS</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>+ Seção de Trabalhos</v-expansion-panel-header>
            <v-expansion-panel-content>INICIO DE SEÇÃO - TRABALHOS </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 07</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 08</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 09 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 10 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 11 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 12 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 13</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 14</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 15</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 16</v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO - 17 </v-expansion-panel-content>
            <v-expansion-panel-content>TRABALHO FINAL ALUNO</v-expansion-panel-content>
            <v-expansion-panel-content>CONCLUSÃO FINAL </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

        <section class="fundodois justify">
          <v-col lg="12" md="12" sm="12">
            <h1 class="centro letra">Certificado</h1>
            <p class="ml-2">
              Ao concluir o curso com nota igual ou superior à 6,5, o aluno recebe o certificado de conclusão do curso em formato digital (PDF). Caso o aluno não atinja a nota necessária, poderá revisar as aulas que desejar e refazer as avaliações.
              A Diorama Cursos Online é associada à ABED (Associação Brasileira de Educação a Distância)
            </p>
          </v-col>
        </section>
    

      <v-col lg="5" md="5" sm="5" class="mx-auto">
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
        >"Achei o curso bastante dinâmico, fluido. Fácil de levar até o final e com informação suficiente para que possamos caminhar sozinhos."</p>
        <p class="ml-5">Luciano Renato | Piracicaba - SP</p>
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
import AppHeader from "../../components/AppHeader";
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      nomecurso: "Adobe Premiere Pro cs6",
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
  background-color: rgb(113, 113, 255);
  color: rgb(255, 253, 253);
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