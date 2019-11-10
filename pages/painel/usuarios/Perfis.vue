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
       
        <div class="flex-grow-1"></div>
        
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo" dark class="mb-2" v-on="on" to="/painel/usuarios/AppForm">Cadastrar Aluno</v-btn>
          </template>
                 </v-dialog>
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
        @click="deleteItem(item)"
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
    }
  }

  }
</script>
