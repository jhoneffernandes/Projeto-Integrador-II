<template>
<div>
<AppDrawer/>

  <v-container>
    <v-data-table
      items-per-page="999"
      :headers="headers"
      :items="cursos"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Cursos</v-toolbar-title>
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
        { text: 'URL da página', value: 'url' },
        { text: 'Categoria do curso', value: 'categoria' },
        { text: 'Nome da imagem', value: 'imagem' },
        { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],

      cursos: [
        {
          categoria: 'Design',
          id: 1,
          profcurso:  'Lucas Santos',
          url: 'edicao/Photoshop',
          imagem: 'photoshop',
          nome: 'Adobe Photoshop CS6',
          preco: '599,00',
          duracao: '40 horas'
        },

        {
          categoria: 'Modelagem 3D',
          id: 2,
          profcurso:  'Jorge Alcantara',
          url: 'modelagem/Blender',
          imagem: 'blender',
          nome: 'Blender',
          preco: '384,00',
          duracao: '40 horas'
        },
         {
          categoria: 'Design',
          id: 3,
          profcurso:  'Lucas Santos',
          url: 'edicao/Corel',
          imagem: 'corel',
          nome: 'Corel Draw X8',
          preco: '144,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Design',
          id: 4,
          profcurso:  'Lucas Santos',
          url: 'edicao/Ilustrator',
          imagem: 'ilustrator',
          nome: 'Adobe Illustrator CS6',
          preco: '599,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Design',
          id: 5,
          profcurso:  'Lucas Santos',
          url: 'edicao/After',
          imagem: 'after',
          nome: 'Adobe After Effects CS6',
          preco: '129,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Design',
          id: 6,
          profcurso:  'Lucas Santos',
          url: 'edicao/Premiere',
          imagem: 'premiere',
          nome: 'Adobe Premiere Pro CS6',
          preco: '294,00',
          duracao: '40 horas'
        },
      {
          categoria: 'Modelagem 3D',
          id: 7,
          profcurso:  'Jorge Alcantara',
          url: 'modelagem/Max',
          imagem: 'max',
          nome: '3ds Max',
          preco: '579,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Modelagem 3D',
          id: 8,
          profcurso:  'Jorge Alcantara',
          url: 'modelagem/Zbrush',
          imagem: 'zbrush',
          nome: 'Zbrush',
          preco: '220,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Modelagem 3D',
          id: 9,
          profcurso:  'Jorge Alcantara',
          url: 'modelagem/Maya',
          imagem: 'maya',
          nome: 'Maya',
          preco: '579,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Modelagem 3D',
          id: 10,
          profcurso:  'Jorge Alcantara',
          url: 'modelagem/Cinema',
          imagem: 'cinema',
          nome: 'Cinema 4D',
          preco: '579,00',
          duracao: '40 horas'
        },
              {
          categoria: 'Desenvolvimento Web',
          id: 11,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/Javascript',
          imagem: 'javascript',
          nome: 'JavaScript',
          preco: '252,00',
          duracao: '40 horas'
        },
                     {
          categoria: 'Desenvolvimento Web',
          id: 12,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/Java',
          imagem: 'java',
          nome: 'Java',
          preco: '200,00',
          duracao: '40 horas'
        },
                     {
          categoria: 'Desenvolvimento Web',
          id: 13,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/Python',
          imagem: 'python',
          nome: 'Python',
          preco: '260,00',
          duracao: '40 horas'
        },
                     {
          categoria: 'Desenvolvimento Web',
          id: 14,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/Php',
          imagem: 'php',
          nome: 'PHP',
          preco: '360,00',
          duracao: '40 horas'
        },
                     {
          categoria: 'Desenvolvimento Web',
          id: 15,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/C',
          imagem: 'c',
          nome: 'C#',
          preco: '268,00',
          duracao: '40 horas'
        },
                     {
          categoria: 'Desenvolvimento Web',
          id: 16,
          profcurso:  'Fabio Vasconcelos',
          url: 'web/HtmlCss',
          imagem: 'htmlecss',
          nome: 'HTML 5 + CSS',
          preco: '120,00',
          duracao: '40 horas'
        },
      ]
    }
  },

  created () {
    const cursos = this.$ls.get('cursos')
    if (cursos) this.cursos = cursos
    else this.$ls.set('cursos', this.cursos)
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
