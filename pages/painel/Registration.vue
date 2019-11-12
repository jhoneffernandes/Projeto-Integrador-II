<template>
  <div>
    <v-divider></v-divider>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark flat>
              <v-toolbar-title>Cadastro de usuário</v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-btn icon large @click="voltar">
                <v-icon dark left @click="voltar">mdi-arrow-left</v-icon>
              </v-btn>
            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field class="mx-6" v-model="name" :counter="10" :rules="nameRules" label="Nome" required></v-text-field>

              <v-text-field class="mx-6"
                v-model="surname"
                :counter="10"
                :rules="surnameRules"
                label="Sobrenome"
                required
              ></v-text-field>

              <v-text-field class="mx-6" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field class="mx-6"
                v-model="confemail"
                :rules="confRules"
                label="Confirme seu e-mail"
                required
              ></v-text-field>

              <v-text-field class="mx-6"
                v-model="cell"
                v-mask="mask"
                :rules="cellRules"
                label="Celular"
                required
              ></v-text-field>

              <v-text-field class="mx-6"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="passRules"
                label="Senha"
                @click:append="show1 = !show1"
                required
              ></v-text-field>

              <v-text-field class="mx-6"
                v-model="confpass"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="confpassRules"
                label="Confirme sua senha"
                @click:append="show2 = !show2"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Você precisa aceitar para continuar!']"
                label="Declaro ter lido e estar de acordo com o Contrato de Prestação de Serviços."
                required
              ></v-checkbox>

              <v-btn color="error" :disabled="!valid" class="mr-4" @click="validate">Cadastrar</v-btn>
              <v-btn color="success" class="mr-4" @click="reset">Limpar campos</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: {
    mask
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      confemail: "",
      cell: "",
      password: "",
      confpass: ""
    };
  },

  data: () => ({
    mask: "(###)-####-####",
    show1: false,
    show2: false,
    valid: true,

    name: "",
    nameRules: [
      v => !!v || "O nome é obrigatório",
      v =>
        (v && v.length <= 10) ||
        "O nome de usuário deve ser menor que 10 caractéres"
    ],

    surname: "",
    surnameRules: [
      v => !!v || "O Sobrenome é obrigatório",
      v =>
        (v && v.length <= 10) || "O Sobrenome deve ser menor que 10 caractéres"
    ],

    email: "",
    emailRules: [
      v => !!v || " O e-mail deve ser obrigatório",
      v => /.+@.+\..+/.test(v) || "Preencher o campo e-mail é obrigatório"
    ],

    confemail: "",
    confRules: [
      v => !!v || " Confirmar o e-mail obrigatório",
      v => /.+@.+\..+/.test(v) || "Os e=mails não são iguais"
    ],

    cell: "",
    cellRules: [
      v => !!v || "O campo celular deve ser obrigatório",
      v => (v && v.length <= 16) || "Preencha o campo corretamente"
    ],

    password: "",
    passRules: [
      v => !!v || " O campo senha deve ser válido",
      v => (v && v.length <= 12) || "Preencha o campo corretamente"
    ],
    confpass: "",
    confpassRules: [
      v => !!v || " Confirmar a senha é obrigatório",
      v => (v && v.length <= 12) || "As senhas não são iguais"
    ],

    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        (this.snackbar = true),
          this.$ls.set("name", this.name),
          this.$ls.set("email", this.email),
          this.$ls.set("confemail", this.confRules),
          this.$ls.set("surname", this.surname),
          this.$ls.set("cell", this.cell),
          this.$ls.set("password", this.password),
          this.$ls.set("confpass", this.confpassRules),
          this.$router.push("/painel");
      }
    },

    reset() {
      this.$refs.form.reset();
    },
    voltar() {
      this.$router.push("/");
    }
  }
};
</script>