<template>
<div>
    <AppDrawer/>

  <v-container>
    <v-form v-model="valid">
      <v-card>
        <v-card-title>{{ modo }} curso</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="nome"
            :counter="50"
            :rules="nomeRegras"
            label="Nome do curso"
            required />

          <v-text-field
            v-model="profcurso"
            :counter="15"
            :rules="profcursoRegras"
            label="Professor do curso"
            required />

           <v-text-field
            v-model="duracao"
            :counter="15"
            :rules="duracaoRegras"
            label="Duração do curso"
            required />

             <v-text-field
            v-model="preco"
            :counter="15"
            :rules="precocursoRegras"
            label="Preço do curso"
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
      modo: this.$route.params.id == 'incluir' ? 'Incluir' : 'Editar',
      nome: '',
      profcurso: '',
      duracao: '',
      preco: '',
      valid: true,
      nomeRegras: [
        v => !!v || 'Nome do curso é obrigatório',
        v => (v && v.length <= 50) || 'Nome do curso deve ter no máximo 50 caracteres'
      ],
      profcursoRegras: [
        v => !!v || 'Professor do que ministra o curso é obrigatório',
        v => (v && v.length <= 15) || 'Professor do curso deve ter no máximo 15 caracteres'
      ],
      precocursoRegras: [
        v => !!v || 'Preço do curso é obrigatório',
        v => (v && v.length <= 15) || 'Preço do curso deve ter no máximo 15 caracteres'
      ],
      duracaoRegras: [
        v => !!v || 'Duração do curso é obrigatório',
        v => (v && v.length <= 15) || 'Duração do curso deve ter no máximo 15 caracteres'
      ]
    }
  },

  created () {
    const cursos = this.$ls.get('cursos')
    if (cursos) {
      const curso = cursos.find(u => u.id == this.id)
      if (curso) {
        this.nome = curso.nome
        this.profcurso = curso.profcurso
        this.duracao = curso.duracao
        this.preco = curso.preco
      }
    }
  },

  methods: {
    gerarId () {
      return Math.round(Math.random() * 9999)
    },

    salvar () {
      let dadoscurso = this.$ls.get('cursos')
      if (!dadoscurso) dadoscurso = []

      if (this.modo == 'Incluir') {
        dadoscurso.push({
          id: this.gerarId(),
          nome: this.nome,
          profcurso: this.profcurso,
          duracao: this.duracao,
          preco: this.preco,
        })
      } else {
        const i = dadoscurso.findIndex(u => u.id == this.id)
        dadoscurso[i].nome = this.nome
        dadoscurso[i].profcurso = this.profcurso
        dadoscurso[i].duracao = this.duracao
        dadoscurso[i].preco = this.preco

      }

      this.$ls.set('cursos', dadoscurso)
      this.$router.push('/painel/cursos/Curso')
    },

    cancelar () {
      this.$router.push('/painel/cursos/Curso')
    }
  }
}
</script>
