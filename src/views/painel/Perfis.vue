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
            <v-btn color="indigo" dark class="mb-2" v-on="on">Cadastrar Aluno</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.nome" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.cpf" label="CPF"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.registro" label="Número de registro"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.celular" label="Celular"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.email" label="E-mail"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
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
export default {

components: {
    AppDrawer,
  },
  data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'CPF', value: 'cpf' },
        { text: 'Número de registro', value: 'registro' },
        { text: 'Celular', value: 'celular' },
        { text: 'E-mail', value: 'email' },
        { text: '', value: 'action', sortable: false },
      ],
      user: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        cpf: '000.000.000-00',
        registro: '',
        celular: '',
        email: '',
      },
      defaultItem: {
        nome: '',
        cpf: '000.000.000-00',
        registro: '',
        celular: '',
        email: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Cadastrar Aluno' : 'Editar Informações'
      },
    },

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
            nome: 'Alek Fumac',
            cpf: '241.291.940-20',
            registro: '1',
            celular: '1194191702',
            email: 'hardware@gmail.com',
          },

          {
            nome: 'Everson Zoio',
            cpf: '666.666.666-66',
            registro: '2',
            celular: '1118377303',
            email: 'trolagi@gmail.com',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.user.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.user.indexOf(item)
        confirm('Deletar esse cadastro?') && this.user.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.user[this.editedIndex], this.editedItem)
        } else {
          this.user.push(this.editedItem)
        }
        this.close()
      },
    },

}
</script>
