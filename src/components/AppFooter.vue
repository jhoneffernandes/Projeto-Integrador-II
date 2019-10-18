<template>
  <v-footer height="0rem" width="100%" absolute padless>
    <v-card width="100%" cols="auto" flat title class="white--text d-flex-row indigo darken-4">
      <v-row>
        <v-layout class="flex-wrap" ma-5>
          <v-btn icon large class="white espacamento">
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>

          <v-btn icon large class="white espacamento">
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>

          <v-btn icon large class="white espacamento">
            <v-icon large>mdi-gmail</v-icon>
          </v-btn>

          <v-btn icon large class="white espacamento">
            <v-icon large>mdi-instagram</v-icon>
          </v-btn>
        </v-layout>
      </v-row>
      <v-card-text class="body-1 white--text">
        CNPJ: 32998352000174
        <br />E-Mail: comunicacoes@dioramadigital.com
          <br />CEP: 14050159
        
      </v-card-text>

      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Diorama Digital</strong>
      </v-card-text>
    </v-card>
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