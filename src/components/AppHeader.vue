<template>
  <v-row>
    <v-toolbar elevation="1">
      <v-toolbar-items>
        <v-btn text max-width="16rem">
          <router-link to="/">
            <v-img :src="require('../assets/logos/logo.svg')" height="3rem" contain></v-img>
          </router-link>
        </v-btn>
      </v-toolbar-items>
      <div class="flex-grow-1"></div>
      <v-layout justify-end align-content-center>
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
          <router-link to="/classes">
            <v-btn text>Cursos</v-btn>
          </router-link>
          <router-link to="/professores">
            <v-btn text>Professores</v-btn>
          </router-link>
          <router-link to="/about">
            <v-btn text>Sobre</v-btn>
          </router-link>
          <router-link to="/login">
            <v-btn dark>Acessar Conta</v-btn>
          </router-link>
          <router-link to="/registration">
            <v-btn dark>Registrar</v-btn>
          </router-link>
        </v-toolbar-items>
        <v-toolbar-items v-if="$vuetify.breakpoint.smAndDown">
          <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>

    <v-navigation-drawer class="mob" col="12" app  v-model="menumob" fixed right temporary>
      <v-list nav dense>
        <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        <v-divider></v-divider>

        <v-list-item-group>
          <v-list-item>
            <router-link to="/classes">
              <v-list-item-title>Cursos</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/professores">
              <v-list-item-title>Professores</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/about">
              <v-list-item-title>Sobre</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <router-link to="/login">
              <v-list-item-title>Acesse sua conta</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/registration">
              <v-list-item-title>Registre Sua Conta</v-list-item-title>
            </router-link>
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
      menumob: false
    };
  },
  watch: {
    group() {
      this.menumob = false;
    }
  }
};
</script>


