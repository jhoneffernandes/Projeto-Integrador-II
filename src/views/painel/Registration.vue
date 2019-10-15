<template>
  <v-container
      class="fill-height align-center justify-center"
      fluid>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="8"
          md="4">
<v-card class="elevation-12">
    <v-toolbar
              color="indigo"
              dark
              flat>
              <v-toolbar-title>Registro de usuário</v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-btn icon large @click="voltar">
                      <v-icon dark left  @click="voltar">mdi-arrow-left</v-icon>
                    </v-btn>
            </v-toolbar>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

       <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Você precisa aceitar para continuar!']"
      label="Você deseja receber nossos e-mails?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Criar usuário
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar campos
    </v-btn>

    
  </v-form>
  </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
      }
    },

    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'O nome é obrigatório',
        v => (v && v.length <= 10) || 'O nome de usuário deve ser menor que 10 caractéres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
      ],
     
      checkbox: false,

    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true,
                   this.$ls.set(  'name' , this.name),

                  this.$router.push('/painel')

        }
      },
      reset () {
        this.$refs.form.reset()
      },
     
     voltar () {
      this.$router.push('/')
    }
      
    },
    }
  
</script>