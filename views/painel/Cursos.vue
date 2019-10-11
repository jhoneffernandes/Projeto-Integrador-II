<template>
  <div>
    <AppDrawer/>
    <div>
       <v-data-table
       hide-default-footer=""
    :headers="headers"
    :items="user"
    sort-by="preço"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Controle dos Cursos</v-toolbar-title>
       
        <div class="flex-grow-1"></div>
        
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo" dark class="mb-2" v-on="on">Registrar novo curso</v-btn>
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
                    <v-text-field required v-model="editedItem.preço" label="Preço"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.registro" label="Número de registro"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.professor" label="Professor"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field required v-model="editedItem.duracao" label="Duração do curso"></v-text-field>
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
        { text: 'Preço', value: 'preço' },
        { text: 'Número de registro', value: 'registro' },
        { text: 'Professor', value: 'professor' },
        { text: 'Duração do curso', value: 'duracao' },
        { text: '', value: 'action', sortable: false },
      ],
      user: [],
      editedIndex: -1,
      editedItem: {
        nome: 'Curso',
        preço: '00,00 R$',
        registro: '',
        professor: '',
        duracao: 'horas',
      },
      defaultItem: {
        nome: 'Curso',
        preço: '00,00 R$',
        registro: '',
        professor: '',
        duracao: 'horas',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Registrar curso' : 'Editar Informações'
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
            nome: 'Curso HTML 5',
            preço: '140,00 R$',
            registro: '1',
            professor: 'Lucas Silva',
            duracao: '50 horas',
          },

          {
            nome: 'Curso CSS3',
            preço: '150,00 R$',
            registro: '2',
            professor: 'Fábio Assunção',
            duracao: '47 horas',
          },
          {
            nome: 'Curso JavaScript',
            preço: '200,00 R$',
            registro: '3',
            professor: 'Jorge Castro',
            duracao: '70 horas',
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
        confirm('Deletar esse registro de curso?') && this.user.splice(index, 1)
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
