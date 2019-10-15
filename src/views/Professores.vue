<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>

    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card min-width="auto" width="100%" max-width="auto" height="6rem" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">Professores da Diorama Digital</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-card-text>
      <p class="textop2 text-justify">
        Os nossos professores são mestres em programação, design e tem muita paixão por ensinar, a combinação disso estimulou o desenvolvimento de uma metodologia de ensino e aprendizado única , que faz questão de proporcionar aos alunos a experiência de um curso presencial, com todas as vantagens que só o meio online oferece.
        Abaixo você confere os docentes por trás de todos os nossos cursos:
      </p>
    </v-card-text>

    <v-row>
      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-10 mx-auto"
            :src="require('../assets/prof.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp">Professor Lucas</h1>
          </div>

          <p
            class="text-justify paragrafo"
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

      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-12 mx-auto"
            :src="require('../assets/prof3.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp">Professor Jorge</h1>
          </div>

          <p
            class="text-justify paragrafo"
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

      <v-col sm="7" md="12">
        <v-card outlined class="mx-5 fundo">
          <v-img
            id="profimg"
            class="mx-12 mx-auto"
            :src="require('../assets/prof2.jpg')"
            aspect-ratio="1"
            width="18%"
            min-width="auto"
            max-height="300"
          ></v-img>

          <div class="ttl">
            <h1 class="text-center corp">Professor Fábio</h1>
          </div>

          <p
            class="text-justify paragrafo"
          >Tecnologia: eis o que motiva esse professor que adora desenvolver, criar, escrever e ensinar.</p>
          <ul >
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
.ttl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.textop2 {
  font-size: 1rem;
}
.paragrafo {
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.corp {
  border-radius: 50rem;
  width: 50%;
  background-color: rgb(109, 0, 187);
  color: white;
}
ul {
  padding: 10px;
  background-color: rgb(255, 255, 255);
}
.alinhamento {
  justify-content: center;
}
#profimg {
  margin: 10px;
  border-radius: 100rem;
}
.fundo {
  background-image: url(../assets/banner1.png);
  background-repeat: repeat;
  border-radius: 10px;
}

@media (max-width: 340px) {
  .alinhamento {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
@media (max-width: 400px) {
  .alinhamento {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>