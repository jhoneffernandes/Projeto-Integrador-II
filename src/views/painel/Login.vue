<template>
<v-app>
  <v-content>
    
    <v-container
      class="fill-height align-center justify-center">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          sm="8"
          md="4">
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat>
              <v-toolbar-title>Acesso Administrativo</v-toolbar-title>
              
            </v-toolbar>
            
            <v-card-text>
              <v-form>
                 <v-text-field v-model="login" label="Usuário" prepend-icon="mdi-account" />
                <v-text-field v-model="password" label="Senha" prepend-icon="mdi-lock" type="password" />
                                <v-alert transition="scale-transition" type="error" :value="!!alerta">{{ alerta}}</v-alert>

              </v-form>
            </v-card-text>
            <v-card-actions class="flex-wrap">
                            <v-btn color="primary" @click="voltar">Voltar a página inicial</v-btn>

              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="acessar">Acessar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
export default {
 data () {
    return {
      login: '',
      password: '',
      alerta: ''
    }
  },

  methods: {
    acessar () {
       if (this.login === 'adm' && this.password === 'adm') {
         this.$ls.set('login' , this.login)
        this.$router.push('/painel')
      }
       else {
        this.alerta = 'Usuário ou senha não correspondentes.'
    }},

        voltar () {
      this.$router.push('/')
    }

  }
}
</script>



