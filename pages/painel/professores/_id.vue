<template>
<div>
      <AppDrawer/>

  <v-container>
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
            v-model="imagem"
            :counter="15"
            :rules="imagemRegras"
            label="imagem"
            required />

              <v-text-field
            v-model="area"
            :counter="15"
            :rules="areaRegras"
            label="area"
            required />
              <v-text-field
            v-model="curriculo"
            :counter="15"
            :rules="curriculoRegras"
            label="curriculo"
            required />

            <v-text-field
            v-model="cursolecionado"
            :counter="15"
            :rules="cursoRegras"
            label="Curso lecionado"
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
      imagem: '',
      area: '',
      curriculo: '',
      cursolecionado: '',
      valid: true,
      nomeRegras: [
        v => !!v || 'Nome completo é obrigatório',
        v => (v && v.length <= 50) || 'Nome completo deve ter no máximo 50 caracteres'
      ],
       areaRegras: [
        v => !!v || 'Área lecionada é obrigatória',
        v => (v && v.length <= 50) || 'Área lecionada deve ter no máximo 50 caracteres'
      ],
       curriculoRegras: [
        v => !!v || 'Currículo é obrigatório',
        v => (v && v.length <= 50) || 'Currículo deve ter no máximo 50 caracteres'
      ],
       cursoRegras: [
        v => !!v || 'Curso lecionado é obrigatório',
        v => (v && v.length <= 50) || 'Curso lecionado deve ter no máximo 50 caracteres'
      ],
      imagemRegras: [
        v => !!v || 'imagem é obrigatório',
        v => (v && v.length <= 15) || 'imagem deve ter no máximo 15 caracteres'
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
        this.imagem = professor.imagem
        this.area = professor.area
        this.curriculo = professor.curriculo

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
          imagem: this.imagem,
          area: this.area,
          curriculo: this.curriculo,

        })
      } else {
        const i = dadosprof.findIndex(u => u.id == this.id)
        dadosprof[i].nome = this.nome
        dadosprof[i].cursolecionado = this.cursolecionado
        dadosprof[i].imagem = this.imagem
        dadosprof[i].area = this.area
        dadosprof[i].curriculo = this.curriculo

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
