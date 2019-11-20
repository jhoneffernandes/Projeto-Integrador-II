<template>
<div>
  <AppDrawer/>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="professores"
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
            to="/painel/professores/incluir"
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
        { text: 'Nome completo', value: 'nome' },
        { text: 'Salário', value: 'salario' },
        { text: 'Curso(s) lecionado(s)', value: 'cursolecionado' },
        { text: 'E-mail', value: 'email' },
        { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],

      professores: []
    }
  },

  created () {
    const professores = this.$ls.get('professores')
    if (professores) this.professores = professores
  },

  methods: {
    editar (item) {
      this.$router.push(`/painel/professores/${item.id}`)
    },

    excluir (item) {
      let dadosprof = this.$ls.get('professores')
      dadosprof = dadosprof.filter(u => u.id != item.id)
      this.$ls.set('professores', dadosprof)
      this.professores = dadosprof
    }
  }
}
</script>
