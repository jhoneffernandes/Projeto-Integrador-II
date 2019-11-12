<template>
    
      <v-col lg="5" md="5" sm="5" class="mx-auto">
        <v-card width="50rem" height="30rem">  
          <section class="centro agd ">
            Precisa de ajuda?
            <br />Preencha o formulario com sua dúvida.
          </section>
  
          <v-form class="mt-5 ml-5 mr-5">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nome" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field label="Assunto"></v-text-field>
            <v-textarea  label="Descrição"></v-textarea>
  
            <v-btn tile elevation="0" color="red mr-3 white--text" @click="enviar">Enviar</v-btn>
            <v-btn tile elevation="0" color="green white--text" @click="limpar">Limpar</v-btn>
          </v-form>
          </v-card>
        </v-col>
    
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  data: () =>({
  email: "",
    emailRules: [
      v => !!v || " O e-mail deve ser obrigatório",
      v => /.+@.+\..+/.test(v) || "Preencher o campo e-mail é obrigatório"
    ],
     name: "",
    nameRules: [
      v => !!v || "O nome é obrigatório",
      v =>
        (v && v.length <= 10) ||
        "O nome de usuário deve ser menor que 10 caractéres"
    ],
  }),
  methods: {
    enviar() {
      if (this.$refs.form.enviar()) {
        (this.snackbar = true),
          this.$ls.set("name", this.name),
          this.$ls.set("email", this.email);
      }
    },

    limpar() {
      this.$refs.form.limpar();
    },
  }

}

</script>

<style  scoped>

.agd {
  background-color: rgb(0, 0, 138);
  color: white;
  font-size: 1.5rem;
}
.borda{
  border-color: rgb(0, 0, 153);
}
.centro {
  text-align: center;
}
</style>