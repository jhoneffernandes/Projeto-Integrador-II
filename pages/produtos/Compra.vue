<template>
  <div>
    <AppHeader />
    <v-container pa-0 ma-0 fluid>
      
      <section class="mt-1">
        <v-btn class="ma-2 " color="blue darken-2" dark @click="voltar">
          <v-icon dark left>mdi-arrow-left</v-icon>Voltar
        </v-btn>
      </section>

      <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card width="100%" height="100%" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh text-center">Área de compra</h2>
            </v-card-title>

          </v-layout>
        </v-card>
      </v-row>
    </v-layout>



    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Carrinho</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Pedido</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Pagamento</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          height="260px"
          elevation="0"
        >
        <p>
          Produtos
        </p>
        <v-divider></v-divider>
        <v-img
        class="ml-5"
            height="10rem"
            contain
            width="10rem"
           :src="require('~/assets/cursos/photoshop.png')"
          >
          </v-img>
          <section title="Nome do curso e preço" class="ml-5 mt-3">
            <p>
             Curso: Adobe Photoshop<br>
             Preço: R$ 150,00
            </p> 
          </section>
        <v-divider></v-divider>
        
        </v-card>

        <v-btn
          color="primary mr-2"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          height="260px"
          elevation="0"
        >
         <p>
          Produtos
        </p>
        <v-divider></v-divider>
        <v-img
        class="ml-5"
            height="10rem"
            contain
            width="10rem"
           :src="require('~/assets/cursos/photoshop.png')"
          >
          </v-img>
          <section title="Nome do curso e preço" class="ml-5 mt-3">
            <p>
             Curso: Adobe Photoshop<br>
             Preço: R$ 150,00
            </p> 
          </section>
        <v-divider></v-divider>
        
        
        </v-card>
         
        <v-btn
          color="primary mr-2"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          height="260px"
          elevation="0"
        >
        
        Aqui fica o formulario de compra
        
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

    </v-container>
  </div>
</template>
<script>
import AppHeader from "~/components/AppHeader";
export default {
  components: {
    AppHeader
  },
  data () {
      return {
        e1: 0,
      }
    },
  methods:{
    voltar() {
      this.$router.push("/photoshop");
    }
  },
};
</script>