<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>

    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card min-width="auto" width="100%" max-width="auto" height="10rem" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">Professores da Diorama Digital</h2>
            </v-card-title>

            <v-card-text>
              <p
                class="textop2 text-center"
              >Os nossos professores são mestres em programação, design e tem muita paixão por ensinar. A combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única , que faz questão de proporcionar aos alunos a experiência de um curso presencial, com todas as vantagens que só o meio online oferece.</p>
            </v-card-text>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-row dense="" class=" flex-wrap">
      <v-layout>
        <v-col sm="5" md="3">
          <v-card  outlined="">
            <v-img
              class="mx-12"
              :src="require('../assets/prof.jpg')"
              aspect-ratio="1"
              min-width="50%"
              max-height="300"
            ></v-img>

            <h1 class="text-center">Professor Lucas</h1>
            <p
              class="text-justify"
            >Tecnologia: eis o que motiva esse professor que adora desenvolver, criar, escrever e ensinar.</p>
            <ul>
              <li>Formado em Ciência da Computação pela PUC-PR</li>
              <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
              <li>
                Possui diversas certificações na área de TI
                Ele sabe o que faz e vai te ensinar com propriedade!
              </li>
              <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
              <li>
                Desenvolvedor de aplicativos para o ambiente iOS da Apple, possui aplicações que juntas somam mais de 50.000 downloads na AppStore!
                E tem mais: além dos cursos, ele quis compartilhar todo o conhecimento que possui também através da publicação de livros de informática.
                Programando para iPhone e iPad (ed. Novatec)
              </li>
              <li>
                MySQL - Guia do Programador (ed. Novatec)
                Construindo Aplicações Web com PHP & MySQL (ed. Novatec)
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-layout>

      <v-layout >
        <v-col sm="5" md="3">
          <v-card  outlined="">
            <v-img
              class="mx-12"
              :src="require('../assets/prof3.jpg')"
              aspect-ratio="1"
              min-width="50%"
              max-height="300"
            ></v-img>

            <h1 class="text-center">Professor Jorge</h1>
            <p
              class="text-justify"
            >Tecnologia: eis o que motiva esse professor que adora desenvolver, criar, escrever e ensinar.</p>
            <ul>
              <li>Formado em Ciência da Computação pela PUC-PR</li>
              <li>Pós-graduado em Business Intelligence pela PUC-PR</li>
              <li>
                Possui diversas certificações na área de TI
                Ele sabe o que faz e vai te ensinar com propriedade!
              </li>
              <li>Atua desde 2003 com desenvolvimento web e treinamentos de profissionais.</li>
              <li>
                Desenvolvedor de aplicativos para o ambiente iOS da Apple, possui aplicações que juntas somam mais de 50.000 downloads na AppStore!
                E tem mais: além dos cursos, ele quis compartilhar todo o conhecimento que possui também através da publicação de livros de informática.
                Programando para iPhone e iPad (ed. Novatec)
              </li>
              <li>
                MySQL - Guia do Programador (ed. Novatec)
                Construindo Aplicações Web com PHP & MySQL (ed. Novatec)
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-layout>

      <v-layout>
        <v-col sm="5" md="3">
          <v-card outlined="">
            <v-img
              class="mx-12"
              :src="require('../assets/prof2.jpg')"
              aspect-ratio="1"
              min-width="50%"
              max-height="300"
            ></v-img>

            <h1 class="text-center">Professor Fábio</h1>
            <p
              class="text-justify"
            >Sua formação não deixa dúvidas: esse professor gosta mesmo dos detalhes tecnológicos.</p>
            <ul>
              <li>Formado em Ciência da Computação pela PUC-PR</li>
              <li>
                Pós-graduado em Desenvolvimento de Jogos para Computador pela Universidade Positivo
                Mestre em Informática na área de Sistemas Distribuídos, também pela PUC-PR.
              </li>
              <li>A experiência profissional reforça: você vai aprender com quem sabe!</li>
              <li>
                Trabalha profissionalmente com Java desde 2002
                Possui 6 anos de experiência no desenvolvimento de sistemas para a IBM dos Estados Unidos, utilizados a nível mundial.
                Atua desde 2005 com treinamentos de
                profissionais em grandes empresas e escreveu
                diversos artigos para a revista Java Magazine.
              </li>
              <li>Possui as certificações da Sun (agora Oracle) SCJP, SCJD,SCWCD, SCBCD, SCEA, IBM SOA e ITIL Foundation</li>
            </ul>
          </v-card>
        </v-col>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>


<style>
.textop2 {
  font-size: 1rem;
}
</style>