<template>
  <div>
    <AppDrawer />

    <v-card color="indigo" dark width="100%" class="text-center">
      <v-row align="center" justify="center">
        <v-card-title>Bem-vindo {{ login }}!</v-card-title>
      </v-row>
    </v-card>

    <v-row justify="center">
      <router-link to="/painel/usuarios/Perfis">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-5 my-5" tile width="15rem" height="12rem">
            <v-card-text class="black--text headline justify-center">
              Já temos
              <br />

              <v-avatar class="mt-3 mb-3" color="teal" size="48">
                <span class="white--text headline">{{usuarios}}</span>
              </v-avatar>
              <br />usuários cadastrados!
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>

      <router-link to="/painel/professores/Profs">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-5 my-5" tile width="15rem" height="12rem">
            <v-card-text class="black--text headline justify-center">
              Já temos
              <br />

              <v-avatar class="mt-3 mb-3" color="teal" size="48">
                <span class="white--text headline">{{professores}}</span>
              </v-avatar>
              <br />professores lecionando!
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>

      <router-link to="/painel/cursos/Curso">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-5 my-5" :elevation="hover ? 12 : 2" tile width="15rem" height="12rem">
            <v-card-text class="black--text headline justify-center">
              Já temos
              <br />
              <v-avatar class="mt-3 mb-3" color="teal" size="48">
                <span class="white--text headline">{{cursos}}</span>
              </v-avatar>
              <br />cursos ativos!
            </v-card-text>
          </v-card>
        </v-hover>
      </router-link>
    </v-row>
  </div>
</template>

<script>
import AppDrawer from "../../components/AppDrawer.vue";
export default {
  head: {
    titleTemplate: "%s - Painel administrativo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Painel administrativo para controle de alunos, professores e cursos da Diorama Cursos online"
      }
    ]
  },

  data() {
    return {
      usuarios: 0,
      professores: 0,
      cursos: 0
    };
  },
  computed: {
    login() {
      return this.$ls.get("login");
    }
  },

  created() {
    const usuarios = this.$ls.get("usuarios");
    if (usuarios) this.usuarios = usuarios.length;

    const professores = this.$ls.get("professores");
    if (professores) this.professores = professores.length;

    const cursos = this.$ls.get("cursos");
    if (cursos) this.cursos = cursos.length;
  },
  components: {
    AppDrawer
  }
};
</script>
