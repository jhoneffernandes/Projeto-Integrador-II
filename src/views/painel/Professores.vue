<template>
  <div>
    <AppDrawer/>
    <div>
       <v-data-table
       hide-default-footer=""
    :headers="headers"
    :items="user"
    sort-by="registro"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Registro dos professores</v-toolbar-title>
       
        <div class="flex-grow-1"></div>
        
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
              <v-btn color="indigo"  dark class="mb-2" v-on="on" >Registrar novo professor</v-btn>
           
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
                    <v-text-field required v-model="editedItem.cursolecionado" label="Curso Lecionado"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.registro" label="Número de registro"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.email" label="E-mail"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-mask="masksal" v-model="editedItem.salario" label="Salário"></v-text-field>
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
import { mask } from "vue-the-mask";
export default {
      directives:{
        mask,
      },
components: {
    AppDrawer,
  },
  data: () => ({
      masksal:"R$ ####.##",

      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'Curso Lecionado', value: 'cursolecionado' },
        { text: 'Número de registro', value: 'registro' },
        { text: 'E-mail', value: 'email' },
        { text: 'Salário', value: 'salario' },
        { text: '', value: 'action', sortable: false },
      ],
      user: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        cursolecionado: 'Curso',
        registro: '',
        email: '',
        salario: 'R$ ####.##',
      },
      defaultItem: {
        nome: '',
        cursolecionado: 'Curso',
        registro: '',
        email: '',
        salario: 'R$ ####.##',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Registrar novo professor' : 'Editar Informações'
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
            nome: 'Lucas Silva',
            cursolecionado: 'Curso de HTML',
            registro: '1',
            email: 'silvalucas@professor.com',
            salario: 'R$ 3400,00',
          },

          {
            nome: 'Fábio Assunção',
            cursolecionado: 'Curso de CSS3',
            registro: '2',
            email: 'fabioprofessor@gmail.com',
            salario: 'R$ 4000,00',
          },
          {
            nome: 'Jorge Castro',
            cursolecionado: 'Curso de JavaScript',
            registro: '3',
            email: 'jorgecastro@professor.com',
            salario: 'R$ 4300,00',
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
        confirm('Deletar o registro desse professor?') && this.user.splice(index, 1)
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
