<template>
<div>
<AppDrawer/>

  <v-container>
    <v-data-table
      :headers="headers"
      :items="cursos"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Usuários</v-toolbar-title>
          <v-spacer />
          <v-btn
            color="primary"
            to="/painel/cursos/incluir"
            class="elevation-1"
            small
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          color="primary"
          class="mr-2"
          @click="editar(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="pink"
          @click="excluir(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        Não há registros cadastrados!
      </template>
    </v-data-table>
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
      headers: [
        { text: 'Nome do curso', value: 'nome' },
        { text: 'Professor do curso', value: 'profcurso' },
        { text: 'Duração do curso', value: 'duracao' },
        { text: 'Preço do curso', value: 'preco' },
        { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],

      cursos: []
    }
  },

  created () {
    const cursos = this.$ls.get('cursos')
    if (cursos) this.cursos = cursos
  },

  methods: {
    editar (item) {
      this.$router.push(`/painel/cursos/${item.id}`)
    },

    excluir (item) {
      let dadoscurso = this.$ls.get('cursos')
      dadoscurso = dadoscurso.filter(u => u.id != item.id)
      this.$ls.set('cursos', dadoscurso)
      this.cursos = dadoscurso
    }
  }
}
</script>
