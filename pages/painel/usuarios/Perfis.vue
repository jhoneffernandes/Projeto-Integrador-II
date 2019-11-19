<template>
  <div>
    <AppDrawer/>
    <div>
       <v-data-table
       hide-default-footer=""
    :headers="headers"
    :items="usuarios"
    sort-by="cpf"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Controle de Alunos</v-toolbar-title>
               
   <v-btn color="indigo" dark class="mb-2" v-on="on" to="/painel/usuarios/incluir">Cadastrar Aluno</v-btn>       
     
      </v-toolbar>
    </template>


    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editar(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="excluir(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
        Sem registros cadastrados!
    </template>
  </v-data-table>
      </div>

  </div>
</template>

<script>
import AppDrawer from '~/components/AppDrawer';
import { mask } from "vue-the-mask";
export default {
      directives:{
        mask
      },
components: {
    AppDrawer,
  },
  head: {
    titleTemplate: '%s - Controle de alunos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página de controle dos alunos registrados na Diorama Cursos online' }
    ]
  },
  data: () => ({
      maskcell: "(###)-####-####",
      maskcpf:"###.###.###-##",
  
   
  }),

data () {
    return {
      headers: [
        { text: 'Nome', value: 'nome' },
        { text: 'Celular', value: 'cel' },
        { text: 'CPF', value: 'cpf' },
        { text: 'E-mail', value: 'email' },
        { text: '', value: 'action', sortable: false }
      ],
      usuarios: []
    }
  },
   created () {
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) this.usuarios = usuarios
  },
  methods: {
    editar (item) {
      this.$router.push(`/painel/usuarios/${item.id}`)
    },
  excluir (item) {
      let dados = this.$ls.get('usuarios')
      dados = dados.filter(u => u.id != item.id)
      this.$ls.set('usuarios', dados)
      this.usuarios = dados
    }

  }

  }
</script>
