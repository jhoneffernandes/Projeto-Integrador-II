<template>
<div>
    <AppDrawer/>

  <v-container>

    <v-form v-model="valid">
      <v-card>
        <v-card-title>Registro de usuário</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="nome"
            :counter="50"
            :rules="nomeRegras"
            label="Nome completo"
            required />

          <v-text-field
            v-model="cel"
            :counter="15"
            :rules="celRegras"
            label="Celular"
            required />

              <v-text-field
            v-model="cpf"
            :counter="15"
            :rules="cpfRegras"
            label="CPF"
            required />

          <v-text-field
            v-model="email"
            :counter="100"
            :rules="emailRegras"
            label="E-mail"
            autocomplete="new-password"
            required />

          <v-text-field
            type="password"
            v-model="senha"
            :counter="50"
            :rules="senhaValidacao"
            label="Senha"
            autocomplete="new-password" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="salvar" :disabled="!valid">
            <v-icon small class="mr-2">mdi-content-save</v-icon>
            Salvar
          </v-btn>
          <v-btn color="secondary" text @click="cancelar">
            <v-icon small class="mr-2">mdi-undo</v-icon>
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</div>
</template>

<script>
import AppDrawer from '~/components/AppDrawer'
export default {
  components: {
      AppDrawer
  },
  data () {
    return {
      id: this.$route.params.id,
      nome: '',
      email: '',
      cel: '',
      senha: '',
      valid: true,
      nomeRegras: [
        v => !!v || 'Nome completo é obrigatório',
        v => (v && v.length <= 50) || 'Nome completo deve ter no máximo 50 caracteres'
      ],
      celRegras: [
        v => !!v || 'Celular é obrigatório',
        v => (v && v.length <= 15) || 'Celular deve ter no máximo 15 caracteres'
      ],
      cpfRegras: [
        v => !!v || 'CPF é obrigatório',
        v => (v && v.length <= 15) || 'CPF deve ter no máximo 15 caracteres'
      ],
      emailRegras: [
        v => !!v || 'E-mail é obrigatório',
        v => (v && v.length <= 100) || 'E-mail deve ter no máximo 100 caracteres',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ter um formato válido'
      ],
      senhaValidacao: [
        v => this.modo == 'Incluir' && (!!v || 'Senha é obrigatória'),
        v => this.modo == 'Incluir' && ((v && v.length <= 100) || 'Senha deve ter no máximo 50 caracteres')
      ]
    }
  },

  methods: {
    gerarId () {
      return Math.round(Math.random() * 9999)
    },

    salvar () {
      let dados = this.$ls.get('usuarios')

      if (this.valid == true) {
        dados.push({
          id: this.gerarId(),
          nome: this.nome,
          cel: this.cel,
          cpf: this.cpf,
          email: this.email,
          senha: this.senha
        })
      }

      this.$ls.set('usuarios', dados)
      this.$router.push('/Cursos')
    },

    cancelar () {
      this.$router.push('/')
    }
  }
}
</script>
