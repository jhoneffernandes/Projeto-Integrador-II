<template>
<div>
      <AppDrawer/>

  <v-container
      class="fill-height align-center justify-center mt-12 "
      fluid>
      <v-row align="center"  justify="center" class="mt-12">
        <v-col
          cols="12"
          sm="10"
          md="8"
          >
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
    <v-text-field class="my-5 mx-6"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field class="my-5 mx-6"
      v-model="cel"
      :counter="11"
      :rules="celRules"
      label="Celular"
      required
    ></v-text-field>

    <v-text-field class="my-5 mx-6"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-text-field class="my-5 mx-6"
      v-model="cpf"
      :counter="10"
      :rules="cpfRules"
      label="CPF"
      required
    ></v-text-field>

       <v-checkbox class="my-5 mx-6"
      v-model="checkbox"
      :rules="[v => !!v || 'Você precisa aceitar para continuar!']"
      label="Você deseja receber nossos e-mails?"
      required
    ></v-checkbox>

<v-row align="center" justify="center">
  <v-col cols="6" sm="5" md="4">
    <v-btn
      :disabled="!valid"
      color="success"
      class="mx-10 mb-4"
      @click="validate"
    >
      Criar usuário
    </v-btn>    </v-col>
<v-col cols="6"  sm="5" md="4">
    <v-btn
      color="error"
      class="mx-10 mb-4"
      @click="reset"
    >
      Limpar campos
    </v-btn>
    </v-col>
    </v-row>
  </v-form>
  </v-card>
        </v-col>
      </v-row>
  </v-container>
  </div>
</template>

<script>
import AppDrawer from '../../components/AppDrawer';
export default {
  components: {
    AppDrawer,
  },
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

 cel: '',
      celRules: [
        v => !!v || 'O número de celular é obrigatório',
        v => (v && v.length <= 10) || 'O número de celular deve ser menor que 11 caractéres',
      ],

      cpf: '',
      cpfRules: [
        v => !!v || 'O CPF é obrigatório',
        v => (v && v.length <= 10) || 'O CPF deve ser menor que 11 caractéres',
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
      this.$router.push('/painel/perfis')
    }
      
    },
    }
  
</script>