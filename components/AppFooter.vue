<template>
  <v-footer height="0rem" width="100%" absolute padless>
        <v-row>
        <v-card tile="" width="100%" height="100%" dark color="indigo darken-4">
          <v-layout class="flex-wrap" justify-center align-center>
            <v-card-title>
                <v-layout class="flex-wrap">
          <v-btn title="Botão para ir para a página do facebook da Diorama" icon large class="grey darken-4 espacamento">
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>

          <v-btn icon title="Botão para ir para a página do twitter da Diorama" large class="grey darken-4 espacamento">
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>

          <v-btn icon title="Botão para enviar um e-mail para a Diorama" large class="grey darken-4 espacamento">
            <v-icon large>mdi-gmail</v-icon>
          </v-btn>

          <v-btn icon title="Botão para ir para a página do instagram da Diorama" large class="grey darken-4 espacamento">
            <v-icon large>mdi-instagram</v-icon>
          </v-btn>
        </v-layout>
            </v-card-title>

            <v-card-text class="body-1">
               CNPJ: 32998352000174
        <br />E-Mail: comunicacoes@dioramadigital.com
          <br />CEP: 14050159
            </v-card-text>


        <v-card-text>

  <v-divider></v-divider>

        </v-card-text>
        

             <v-card-text class="white--text text-center">
          {{ new Date().getFullYear() }} —
        <strong>Diorama Cursos</strong>
      </v-card-text>
          </v-layout>
        </v-card>
      </v-row>

  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.espacamento {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>