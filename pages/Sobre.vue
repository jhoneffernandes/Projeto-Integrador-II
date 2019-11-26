<template>
  <v-container ma-0 pa-0 fluid>
    <div :class="[ isLoading ? 'white' : 'black' ]">
    <AppHeader />
<v-row justify="center" align="end" class="my-5">
<v-btn title="botão para aumentar contraste da página" @click="changeColor">Contraste</v-btn>
<v-btn title="botão para aumentar texto principal da página" v-on:click="fontSize += 0.25">A+</v-btn>
<v-btn title="botão para voltar o texto principal da página ao tamanho padrão" v-on:click="fontSize = 1.5">A</v-btn>
<v-btn title="botão para diminuir o texto principal da página"  v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</v-btn>
</v-row>
      <v-row class="my-5">
        <v-layout align-center justify-center text-center>
          <v-card tile="" width="100%" height="100%" dark :class="[ isLoading ? 'indigo' : 'grey darken-4' ]">
            <v-layout justify-center align-center>
              <v-card-title>
                <h2 class="tituloh flex-nowrap">{{textbannersobre}}</h2>
              </v-card-title>
            </v-layout>
          </v-card>
        </v-layout>
      </v-row>
 <v-row id="content" align="center" justify="center" class="my-5 mx-5">
      <h1 class="mb-5 text-center"  :class="[ isLoading ? '' : 'white--text' ]">A criação da instituição</h1>

      <p v-bind:style="{ fontSize: fontSize + 'rem' }"  :class="[ isLoading ? '' : 'white--text' ]"

        class="text-center"
      >A Diorama cursos online foi criada para o segundo projeto integrador da turma de Sistemas para internet da Fatec Taquaritinga, inspirada na empresa brasileira Diorama Digital, foi escolhido o tema de uma escola online com cursos online, que tem como objetivo além da venda dos mesmos, a propagação do desenvolvimento web, através de materiais como nossos cursos online de programação em Java, JavaScript, Python, também através do nosso material de web designer com nossos cursos online de edição em Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator e Adobe After Effects. Além também do nosso conteúdo de estruturação de sites nos cursos online de HTML e CSS, e com esses materiais a empresa espera propagar a onda de desenvolvimento web através dos nossos cursos online e também formar profissionais de qualidade em programação, edição e também web designers qualificados, e assim também nos tornarmos uma renomada escola de cursos online.</p>
    </v-row>

        <v-row class="my-5">
        <v-card-text class="headline text-center">
      <h5 class="mb-5 text-center"  :class="[ isLoading ? '' : 'white--text' ]">{{textvideo}}</h5>
        </v-card-text>
      </v-row>

      <v-row id="principal" dense justify="center" class="my-5">
        <v-col cols="11" xl="7" lg="8" md="9" sm="10">
          <v-row justify="center" class="flex-wrap">
            <v-card>
              <section title="Dois alunos falando sobre a empresa">
                <vue-plyr>
                  <video height="60rem" width="100%">
                    <source src="../assets/videos/vsobre.mp4#t=2" type="video/mp4" size="1080"/>
                    <track kind="captions" label="Em breve" />
                  </video>
                </vue-plyr>
              </section>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="my-5 mx-5" justify="center" align="center">
        <v-col>
          <v-row class="my-5" justify="center">
      <h1 class="mb-5 text-center" :class="[ isLoading ? '' : 'white--text' ]">{{objetivos}}</h1>
          </v-row>

          <v-row justify="center">
            <v-layout color="grey lighten-5" justify-center>
              <section title="Topicos falando sobre os objetivos da empresa">
                <ul v-bind:style="{ fontSize: fontSize + 'rem' }" :class="[ isLoading ? '' : 'white--text' ]" class="tipografia">
                  <li>Formar profissionais na área de Full-Stack</li>
                  <li>Ensinar de forma eficiente e divertida</li>
                  <li>Gerar empregos aos clientes</li>
                  <li>Ser referência em conteúdo de qualidade</li>
                  <li>Sempre prestar o melhor atendimento e acompanhamento aos usuários</li>
                  <li>Promover a área de desenvolvimento web</li>
                </ul>
              </section>
            </v-layout>
          </v-row>
        </v-col>
      </v-row>
  

      <section class="mt-5 mb-5">
    <v-row justify="center">
        <v-card height="100%" width="100rem" dark="" class="depoimento">
          <p
            class="mx-5"
          >"A instituição de ensino é excelente, fiz um curso de Zbrush a algum certo tempo, e vou voltar a fazer mais cursos aqui, pretendo fazer todos os cursos. Obrigada equipe."</p>
          <p class="mx-5">Ricardo Adalberto | Nova Iguaçu - RJ</p>
        </v-card>
    </v-row>
        </section>

    <AppNewsletter/>
    </div>
  </v-container>
 
</template>

<script>
import AppNewsletter from '../components/AppNewsletter';
import AppHeader from "../components/AppHeader";

export default {
  data() {
    return {
      fontSize: 1.5,
      isLoading: true,
      textvideo:
        "Confira um vídeo introdutório sobre o projeto Diorama Cursos:",
      textbannersobre: "Sobre Diorama Digital",
      objetivos: "Objetivos da Diorama Cursos"
    };
  },
  components: {
    AppHeader,
    AppNewsletter,

  },
   head: {
    titleTemplate: '%s - Sobre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página contendo a história da criação da Diorama Cursos online, o vídeo introdutório da empresa junto aos principais objetivos da Diorama perante a área de desenvolvimento web' },
        // OpenGraph data (Most widely used)
    {property: 'og:title', content: 'Sobre - Diorama Cursos'},
    {property: 'og:site_name', content: 'Diorama Cursos'},
    // The list of types is available here: http://ogp.me/#types
    {property: 'og:type', content: 'website'},
    // Should the the same as your canonical link, see below.
    {property: 'og:url', content: 'http://localhost:3000/Classes'},
    {property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'},
    // Often the same as your meta description, but not always.
    {property: 'og:description', content: 'Página contendo a história da criação da Diorama Cursos online, o vídeo introdutório da empresa junto aos principais objetivos da Diorama perante a área de desenvolvimento web '},

    // Twitter card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'http://localhost:3000/About'},
    {name: 'twitter:title', content: 'Sobre - Diorama Cursos'},
    {name: 'twitter:description', content: 'Página contendo a história da criação da Diorama Cursos online, o vídeo introdutório da empresa junto aos principais objetivos da Diorama perante a área de desenvolvimento web'},
    
    // Google / Schema.org markup:
    {itemprop: 'name', content: 'Sobre - Diorama Cursos'},
    {itemprop: 'description', content: 'Página contendo a história da criação da Diorama Cursos online, o vídeo introdutório da empresa junto aos principais objetivos da Diorama perante a área de desenvolvimento web'},
    {itemprop: 'image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'}
    ,         {rel: 'canonical', href: 'http://localhost:3000/About'}

    ]
  },
  methods: {
       changeColor(){
                    this.isLoading = !this.isLoading;
                   }}
};
</script>

<style >
.objt,
.tipografia {
  font-size: 20px;
}

</style>