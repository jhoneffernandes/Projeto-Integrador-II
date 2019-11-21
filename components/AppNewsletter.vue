<template>
  <v-row  justify="center"  class="my-5">
    <v-col cols="12" xl="6" lg="9" md="8" sm="12">
    
        <v-row justify="center">
          <v-card width="20rem" height="16rem" tile>
            <v-card-text class="text-center tamanho white--text indigo title headline">Assine nossa Newsletter!</v-card-text>
  
            <v-text-field
              v-model="email"
              :rules="emailRules"
              counter="30"
              required
              class="mx-6 my-6"
              color="indigo"
              label="Digite seu e-mail"
            >
              <v-icon class="mx-1" slot="prepend" color="indigo">mdi-email</v-icon>
            </v-text-field>
  
            <v-card-actions class="align-center justify-center">
              <v-btn dark :disabled="!valid" color="indigo" class="mb-5">Assinar</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
     
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      v => !!v || "O e-mail é obrigatório para assinar o Newsletter!",
      v => /.+@.+\..+/.test(v) || "O e-mail deve ser válido"
    ]
  })
};
</script>
