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
                <v-img :src="require('../assets/logo2.png')" height="3rem" contain></v-img>
              </router-link>
            </v-btn>
          </template>
          <span>Página Inicial</span>
        </v-tooltip>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer class="mob" col="12" app stateless v-model="menumob" fixed left temporary>
      <v-list nav dense>
        <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        <v-divider></v-divider>

        <v-list-item-group>
          <router-link to="/painel">
            <v-list-item>
              <v-list-item-title>Voltar ao painel inicial</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider></v-divider>

          <router-link to="/painel/perfis">
            <v-list-item>
              <v-list-item-title>Usuários</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/painel/cursos">
            <v-list-item>
              <v-list-item-title>Cursos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/painel/professores">
            <v-list-item>
              <v-list-item-title>Professores</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-divider></v-divider>

          <v-list-item>
            Sair
            <v-btn class="ml-2" icon @click="sair">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      menumob: true
    };
  },
  watch: {
    group() {
      this.menumob = false;
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

