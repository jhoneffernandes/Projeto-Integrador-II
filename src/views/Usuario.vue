<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>

    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card min-width="auto" width="100%" max-width="auto" height="6rem" dark color="indigo">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">{{textbanneruser}}: {{ name }} {{ surname }}</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
        <v-tab-item>
            <v-card flat >
              <v-card-text>
                  <p>{{seus}}</p>
                <v-form>
                    <v-col  cols="12" md="5" sm="6">

                            <v-text-field v-model="name"  label="Seu Nome" outlined=""></v-text-field>
                
                            <v-text-field v-model="surname" label="Seu Sobrenome" outlined=""></v-text-field>
                
                            <v-text-field v-model="cell" v-mask="mask" label=" Seu Celular" outlined=""></v-text-field>
                
                             <v-text-field v-model="email" label="Seu E-mail" outlined="" ></v-text-field>
                     </v-col>
    
               
                  <v-col cols="12" md="12" sm="12">
                      <v-btn color="primary" class="mr-4">Alterar</v-btn>
                      <v-btn color="primary" class="mr-4" >Concluir alteração</v-btn>
                  </v-col>
                
    
                </v-form>
              </v-card-text>
              </v-card>

        </v-tab-item>

          <v-tab-item>
              <v-card height="500px">
                  <v-card-text>
                      <section class="center">
                          <p>{{cursos}}</p>
                      </section>

                     <!-- <v-col  md="10" lg="10">
                         <v-img
                          :src="require('../assets/cursos/vue.png')"
                          alt="Logo vue.js"
                          aspect-ratio="1"
                          width="18%"
                          min-width="auto"
                          max-height="300"
                        > </v-img>
                        <v-btn color="primary" class="mx-10" >Visualizar</v-btn>
                    
                         <v-img
                          :src="require('../assets/cursos/vue.png')"
                          alt="Logo vue.js"
                          aspect-ratio="1"
                          width="18%"
                          min-width="auto"
                          max-height="300"
                        > </v-img>
                        <v-btn color="primary" class="mx-10" >Visualizar</v-btn>
                     </v-col>
 -->
                  </v-card-text>
              </v-card>
          </v-tab-item>

       <v-tab-item >
              <v-card height="500px">
                  <v-card-text class="center">
                      <section>
                          <p>
                             Você não tem nenhum pedido de curso!
                          </p>
                      </section>
                  </v-card-text>
              </v-card>
          </v-tab-item>



    </v-tabs-items>
  </div>
</template>


<script>
import AppHeader from "../components/AppHeader";

export default {
  data() {
    return {
      textbanneruser: "Esta é a sua área do aluno",
      tab: null,
      items: ["Meus dados", "Meus cursos", "Meus pedidos"],
      seus:"Estes são seus dados",
      cursos:"Você não tem nenhum curso",
    };
  },

  computed: {
    login() {
      return this.$ls.get("login");
    },
    name() {
      return this.$ls.get("name");
    },
    surname() {
      return this.$ls.get("surname");
    },
    cell() {
      return this.$ls.get("cell");
    },
    email() {
      return this.$ls.get("email");
    },
  },

  methods:{
      sair() {
      this.$router.push("/");
    }
  },
  components: {
    AppHeader
  }
};
</script>


<style scoped>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}
</style>