<template>
  <v-container>
    <AppDrawer/>

    <v-form v-model="valid">
      <v-card>
        <v-card-title>{{ modo }} professor</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="nome"
            :counter="50"
            :rules="nomeRegras"
            label="Nome completo"
            required />

          <v-text-field
            v-model="salario"
            :counter="15"
            :rules="salarioRegras"
            label="salario"
            required />

            <v-text-field
            v-model="cursolecionado"
            :counter="15"
            :rules="cursoRegras"
            label="Curso lecionado"
            required />

          <v-text-field
            v-model="email"
            :counter="100"
            :rules="emailRegras"
            label="E-mail"
            autocomplete="new-password"
            required />

        
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
      modo: this.$route.params.id == 'incluir' ? 'Incluir' : 'Editar',
      nome: '',
      salario: '',
      cursolecionado: '',
      email: '',
      valid: true,
      nomeRegras: [
        v => !!v || 'Nome completo é obrigatório',
        v => (v && v.length <= 50) || 'Nome completo deve ter no máximo 50 caracteres'
      ],
       cursoRegras: [
        v => !!v || 'Curso lecionado é obrigatório',
        v => (v && v.length <= 50) || 'Curso lecionado deve ter no máximo 50 caracteres'
      ],
      salarioRegras: [
        v => !!v || 'salario é obrigatório',
        v => (v && v.length <= 15) || 'salario deve ter no máximo 15 caracteres'
      ],
      emailRegras: [
        v => !!v || 'E-mail é obrigatório',
        v => (v && v.length <= 100) || 'E-mail deve ter no máximo 100 caracteres',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ter um formato válido'
      ]
    }
  },

  created () {
    const professores = this.$ls.get('professores')
    if (professores) {
      const professor = professores.find(u => u.id == this.id)
      if (professor) {
        this.nome = professor.nome
        this.cursolecionado = professor.cursolecionado
        this.salario = professor.salario
        this.email = professor.email
      }
    }
  },

  methods: {
    gerarId () {
      return Math.round(Math.random() * 9999)
    },

    salvar () {
      let dadosprof = this.$ls.get('professores')
      if (!dadosprof) dadosprof = []

      if (this.modo == 'Incluir') {
        dadosprof.push({
          id: this.gerarId(),
          nome: this.nome,
          cursolecionado: this.cursolecionado,
          salario: this.salario,
          email: this.email,
        })
      } else {
        const i = dadosprof.findIndex(u => u.id == this.id)
        dadosprof[i].nome = this.nome
        dadosprof[i].cursolecionado = this.cursolecionado
        dadosprof[i].salario = this.salario
        dadosprof[i].email = this.email
      }

      this.$ls.set('professores', dadosprof)
      this.$router.push('/painel/professores/Profs')
    },

    cancelar () {
      this.$router.push('/painel/professores/Profs')
    }
  }
}
</script>
