<template>
    
      <v-col lg="5" md="5" sm="5">
        <v-card  width="30rem" height="35rem">  
          <section class="centro agd headline">
            Precisa de ajuda?
            <br />Preencha o formulario com sua dúvida.
          </section>
  
          <v-form class="mt-12 ml-5 mr-5">
            <v-text-field title="Digite seu nome nesse campo" v-model="name" :counter="10" :rules="nameRules" label="Nome" required></v-text-field>
            <v-text-field title="Digite seu e-mail nesse campo" v-model="email" :counter="30" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field title="Digite o motivo de contato nesse campo" :counter="10" label="Assunto"></v-text-field>
            <v-textarea title="Digite uma descrição do seu problema nesse campo" :counter="100" label="Descrição"></v-textarea>
  
            <v-btn tile title="Clique aqui para enviar o formulário" elevation="0" color="red mr-3 white--text" @click="enviar">Enviar</v-btn>
            <v-btn tile title="Clique aqui para limpar todos os campos desse formulário" elevation="0" color="green white--text" @click="limpar">Limpar</v-btn>
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