<template>
  <v-row>
    <v-toolbar>
      <v-toolbar-items>
        <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
      </v-toolbar-items>
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn target="_blank" v-on="on" text max-width="16rem">
              <router-link to="/">
                <v-img :src="require('~/assets/logos/logo.svg')" height="3rem" contain></v-img>
              </router-link>
            </v-btn>
          </template>
          <span>Página Inicial</span>
        </v-tooltip>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer class="mob" col="12" app  v-model="menumob" fixed left temporary>
      <v-list nav dense>
        <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        <v-divider></v-divider>

        <v-list-item-group>
          <router-link to="/painel/painel">
            <v-list-item>
              <v-list-item-title>Voltar ao painel inicial</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider></v-divider>

          <router-link to="/painel/usuarios/Perfis">
            <v-list-item>
              <v-list-item-title>Usuários</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/painel/cursos/Curso">
            <v-list-item>
              <v-list-item-title>Cursos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/painel/professores/Profs">
            <v-list-item>
              <v-list-item-title>Professores</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider></v-divider>
            <v-btn text="" width="100%" icon @click="sair">

          <v-list-item>
            Sair
              <v-icon class="mx-12" color="red">mdi-logout</v-icon>

          </v-list-item>
            </v-btn>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menumob: false
    };
  },
  watch: {
    group() {
      this.menumob = true;
    }
  },
  methods: {
    navegarHome() {
      this.$router.push("/");
    },
    sair() {
      this.$ls.remove("login");
      this.$ls.remove("name");
      this.$router.push("/");
    }
  }
};
</script>

