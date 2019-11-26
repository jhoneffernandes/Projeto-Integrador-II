<template>
  <v-container pa-0 ma-0 fluid>
                <div  :class="[ isLoading ? 'white' : 'black' ]">
    <AppHeader />

<v-row justify="center" align="end" class="my-5">
<v-btn title="botão para aumentar contraste da página" @click="changeColor">Contraste</v-btn>
<v-btn title="botão para aumentar texto principal da página" v-on:click="fontSize += 0.25">A+</v-btn>
<v-btn title="botão para voltar o texto principal da página ao tamanho padrão" v-on:click="fontSize = 1.5">A</v-btn>
<v-btn title="botão para diminuir o texto principal da página"  v-on:click="fontSize < 0.5? fontSize = 0.25: fontSize -= 0.25">A-</v-btn>
</v-row>

    <v-row class="my-5">
      <v-card :class="[ isLoading ? 'indigo' : 'grey darken-4' ]"
       width="100%" height="100%" dark tile="">
        <v-layout class="flex-wrap" justify-center align-center>
          <v-card-title>
            <h2 class="tituloh text-center">Nossos cursos</h2>
          </v-card-title>
        </v-layout>
      </v-card>
    </v-row>

    <v-row align="center" justify="center" class="mt-12 my-5 mx-5">
      <p :class="[ isLoading ? '' : 'white--text' ]" v-bind:style="{ fontSize: fontSize + 'rem' }"
        class="text-center"
      >Nos cursos online da Diorama Cursos você sempre terá acesso a um conteúdo atualizado, já que os cursos de programação, de edição de web designer e todos os outros são frequentemente modificados. É possível assistir às aulas dos nossos cursos online a partir de qualquer computador com acesso à internet, desde que o mesmo cumpra os requisitos mínimos, e então é só começar a aprender com nossos cursos online e a realizar seu desenvolvimento web. Além das aulas, pelo fato de sermos a mais nova escola de cursos online o ambiente de aprendizado também é totalmente online, de forma que você pode usá-lo para esclarecer suas dúvidas com os instrutores e realizar outras atividades propostas. Por estes motivos, os cursos da Diorama Cursos online não são disponibilizados em formato DVD e foi optado que a nossa escola online se mante-se totalmente ligada à web.</p>
    </v-row>

    <v-row id="principal">
      <v-col>
        <v-tabs slider-size="4" show-arrows centered>
          <v-tabs-slider :class="[ isLoading ? 'teal lighten-3' : 'grey darken-1' ]"></v-tabs-slider>

          <v-tab :class="[ isLoading ? 'blue white--text' : 'white black--text' ]">Todos</v-tab>
          <v-tab :class="[ isLoading ? 'blue white--text' : 'white black--text' ]">Design</v-tab>
          <v-tab  :class="[ isLoading ? 'blue white--text' : 'white black--text' ]">Modelagem 3d</v-tab>
          <v-tab :class="[ isLoading ? 'blue white--text' : 'white black--text' ]">Desenvolvimento Web</v-tab>

          <v-tab-item :class="[ isLoading ? '' : 'black']">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                <router-link
                    v-for="c of cursos" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                        alt="Caixa com cantos achatados contendo a logo da empresa e o nome do curso"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item :class="[ isLoading ? '' : 'black']">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                <router-link
                    v-for="c of cursosDesign" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                        alt="Caixa com cantos achatados contendo a logo da empresa e o nome do curso"

                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>

        <v-tab-item :class="[ isLoading ? '' : 'black']">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                <router-link
                    v-for="c of cursosModelagem" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                        alt="Caixa com cantos achatados contendo a logo da empresa e o nome do curso"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>

  <v-tab-item :class="[ isLoading ? '' : 'black']">
            <v-row dense justify="center" class="my-5">
              <v-col cols="6" xl="12" lg="10" md="9" sm="8">
                <v-row justify="center" class="flex-wrap">
                <router-link
                    v-for="c of cursosDesenvolvimento" :key="c.id"
                    :to="`/produtos/${c.url}`">
                    <v-card :class="[ isLoading ? 'blue lighten-3' : 'white' ]" shaped="" elevation="01" class="mx-6 my-6 ">
                      <v-img
                        contain
                        width="18rem"
                        height="18rem"
                        :src="require(`../assets/cursos/${c.imagem}.png`)"
                        alt="Caixa com cantos achatados contendo a logo da empresa e o nome do curso"
                      ></v-img>
                      <v-card-title 
                        class="align-center justify-center fill-height headline font-weight-bold"
                      >{{ c.nome }}</v-card-title>
                    
                      <v-card-text class="textopadrao black--text">
                        <H1>Preço: R$ {{ c.preco }}</H1>
                      </v-card-text>
                     
                      <v-card-text class="textopadrao black--text">
                        <H1>Duração: {{ c.duracao }}</H1>
                      </v-card-text>
                      <v-card-text class="text-center">
                        <v-btn class="white--text" :class="[ isLoading ? 'primary' : 'black' ]">Saiba mais</v-btn>
                      </v-card-text>
                    </v-card>
                 </router-link>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>

        </v-tabs>
      </v-col>
    </v-row>

    <section class="mt-5 mb-5">
    <v-row justify="center">
      <v-card height="100%" width="100rem" dark="" class="depoimento">
      <p
        class="mx-5"
      >"Estou gostando do curso, aulas bem explicativas, já tinha algum conhecimento sobre o assunto mais não tão bem explicado como agora com esse conteúdo que a Diorama proporciona, também estou conciliando o Tempo. Enfim, a Diorama está me surpreendendo bastante."</p>
      <p class="mx-5">Luana Carla | Piracicaba - SP</p>
      </v-card>
    </v-row>
    </section>

    <AppNewsletter/>
                </div>
</v-container>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppNewsletter from '../components/AppNewsletter'
export default {
   components: {
    AppHeader,
    AppNewsletter,
   
  },
  
  data() {
    return {
      cursos: [],
      fontSize: 1.25,
      isLoading: true,
    }
  },
  created(){
    const cursos = this.$ls.get('cursos')
    if (cursos) this.cursos = cursos
  },
  computed: {
    cursosDesign () {
      return this.cursos.filter(c => c.categoria == 'Design')
    },

    cursosModelagem () {
      return this.cursos.filter(c => c.categoria == 'Modelagem 3D')
    },
        cursosDesenvolvimento () {
      return this.cursos.filter(c => c.categoria == 'Desenvolvimento Web')
    }
  },
  head: {
    titleTemplate: '%s - Cursos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página contendo todos os cursos da Diorama Cursos online, cursos de design, cursos de modelagem 3D e cursos de desenvolvimento web, todos ministrados por professores capacitados ' },
        // OpenGraph data (Most widely used)
    {property: 'og:title', content: 'Cursos - Diorama Cursos'},
    {property: 'og:site_name', content: 'Diorama Cursos'},
    // The list of types is available here: http://ogp.me/#types
    {property: 'og:type', content: 'website'},
    // Should the the same as your canonical link, see below.
    {property: 'og:url', content: 'http://localhost:3000/Classes'},
    {property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'},
    // Often the same as your meta description, but not always.
    {property: 'og:description', content: 'Página contendo todos os cursos da Diorama Cursos online, cursos de design, cursos de modelagem 3D e cursos de desenvolvimento web, todos ministrados por professores capacitados '},

    // Twitter card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'http://localhost:3000/Professores'},
    {name: 'twitter:title', content: 'Cursos - Diorama Cursos'},
    {name: 'twitter:description', content: 'Página contendo todos os cursos da Diorama Cursos online, cursos de design, cursos de modelagem 3D e cursos de desenvolvimento web, todos ministrados por professores capacitados'},
    
    // Google / Schema.org markup:
    {itemprop: 'name', content: 'Cursos - Diorama Cursos'},
    {itemprop: 'description', content: 'Página contendo todos os cursos da Diorama Cursos online, cursos de design, cursos de modelagem 3D e cursos de desenvolvimento web, todos ministrados por professores capacitados '},
    {itemprop: 'image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'}
    ,         {rel: 'canonical', href: 'http://localhost:3000/Classes'}

    ]
  },
  methods: {
       changeColor(){
                    this.isLoading = !this.isLoading;
                   }}
  
}
</script>
