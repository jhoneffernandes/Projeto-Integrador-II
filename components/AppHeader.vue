<template>
  <v-row>
    <v-toolbar id="menu" elevation="1">
      <v-toolbar-items>
        <v-btn text max-width="16rem">
          <router-link to="/" accesskey="1" title="botão para ir a página inicial">
            <v-img :src="require('~/assets/logos/logo.svg')" alt="Logo da Diorama, um triângulo azul com cantos arredondados de ponta cabeça" height="3rem" contain></v-img>
          </router-link>
        </v-btn>
      </v-toolbar-items>
      <div class="flex-grow-1"></div>
      <v-layout justify-end align-content-center>
        <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
          <router-link to="/Cursos" accesskey="2" title="botão para ir a página de cursos">
            <v-btn class="botao" tile="" text>Cursos</v-btn>
          </router-link>
          <router-link to="/Professores" accesskey="3" title="botão para ir a página de professores">
            <v-btn class="botao" tile="" text>Professores</v-btn>
          </router-link>
          <router-link to="/Sobre" accesskey="4" title="botão para ir a página da história da empresa">
            <v-btn class="botao" tile="" text>Sobre</v-btn>
          </router-link>

          <router-link to="/painel/Entrar" accesskey="5" title="botão para ir a página de acesso administrativo (não é para usuários)">
            <v-btn dark="" class="mx-2 primary">Acessar Conta</v-btn>
          </router-link>
          <router-link to="/painel/Registrar" accesskey="6" title="botão para ir a página de registro de novo usuário">
            <v-btn dark="" class="mx-2 primary">Registrar</v-btn>
          </router-link>

        </v-toolbar-items>
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndDown">
          <v-app-bar-nav-icon @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>

    <v-navigation-drawer class="mob" col="12" app  v-model="menumob" fixed right temporary>
      <v-list nav dense>
        <v-app-bar-nav-icon accesskey="1" title="Menu" @click.stop="menumob = !menumob"></v-app-bar-nav-icon>
        <v-divider></v-divider>

        <v-list-item-group>

<router-link to="/" accesskey="2" title="botão para ir a página inicial">
          <v-list-item>
              <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
            </router-link>

            <router-link to="/Cursos" accesskey="3" title="botão para ir a página de cursos">
          <v-list-item>
              <v-list-item-title>Cursos</v-list-item-title>
          </v-list-item>
            </router-link>

            <router-link to="/Professores" accesskey="4" title="botão para ir a página de professores">
          <v-list-item>
              <v-list-item-title>Professores</v-list-item-title>
          </v-list-item>
            </router-link>

            <router-link to="/Sobre" accesskey="5" title="botão para ir a página da história da empresa">
          <v-list-item>
              <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
            </router-link>

          <v-divider></v-divider>

            <router-link to="/painel/Entrar" accesskey="6" title="botão para ir a página de acesso administrativo (não é para usuários)">
          <v-list-item>
              <v-list-item-title>Acesse sua conta</v-list-item-title>
          </v-list-item>
            </router-link>


            <router-link to="/painel/Registrar" accesskey="7" title="botão para ir a página de registro de novo usuário">
          <v-list-item>
              <v-list-item-title>Registre Sua Conta</v-list-item-title>
          </v-list-item>
            </router-link>
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


<style >

.botao:hover{
    border-bottom: 3px solid rgb(0, 17, 255);
}

 
</style>

