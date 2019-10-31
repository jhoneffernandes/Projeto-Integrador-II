<template>
  <div>
    <AppDrawer/>
    <div>
       <v-data-table
       hide-default-footer=""
    :headers="headers"
    :items="user"
    sort-by="cpf"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Controle de Alunos</v-toolbar-title>
       
        <div class="flex-grow-1"></div>
        
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo" dark class="mb-2" @click="cadastrar">Cadastrar Aluno</v-btn>
          </template>
                 </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
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
      <v-btn color="primary" @click="initialize">Resetar</v-btn>
    </template>
  </v-data-table>
      </div>

  </div>
</template>

<script>
import AppDrawer from '../../components/AppDrawer';
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

        computed: {
       novouser(){
          return this.$ls.get('usuarionovo')

        }    
    },


      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'CPF', value: 'cpf' },
        { text: 'Celular', value: 'celular' },
        { text: 'E-mail', value: 'email' },
        { text: '', value: 'action', sortable: false },
      ],
      user: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        cpf: '###.###.###-##',
        celular: '',
        email: '',
      },
      defaultItem: {
        nome: '',
        cpf: '###.###.###-##',
        celular: '',
        email: '',
      },
        adicionar(){
          user_push('usuarionovo')
           }
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.user = [
            {
            nome: 'Everson Silva',
            cpf: '116.524.7746-16',
            celular: '(111)-8377-303',
            email: 'everson-silva@gmail.com',
          },

          {
            nome: 'Alex Santos',
            cpf: '241.291.940-20',
            celular: '(119)-4191-702',
            email: 'alex-santos@gmail.com',
          },

          
        ]
      },

      cadastrar(){
        this.$router.push('/painel/perfis/form')
      },

      editItem (item) {
                        this.$router.push('/painel/perfis/form')

      },

      deleteItem (item) {
        const index = this.user.indexOf(item)
        confirm('Deletar esse cadastro?') && this.user.splice(index, 1)
      

      },

    },

}
</script>
