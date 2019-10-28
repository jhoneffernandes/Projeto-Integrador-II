import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },

    {
      path: '/classes',
      name: 'classes',
      component: () => import('./views/Classes.vue')
    },

    {
      path: '/professores',
      name: 'professores',
      component: () => import('./views/Professores.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('./views/painel/Login.vue')
    },


    {
      path: '/registration',
      name: 'registrar',
      component: () => import('./views/painel/Registration.vue')
    },

    {
      path: '/painel',
      name: 'painel',
      component: () => import('./views/painel/Painel.vue')
    },

    {
      path: '/painel/perfis',
      name: 'perfis',
      component: () => import('./views/painel/Perfis.vue')
    },

    {
      path: '/painel/perfis/form',
      name: 'userform',
     
      component: () => import('./views/painel/AppForm.vue')
    },

    {
      path: '/painel/cursos',
      name: 'cursos',
      component: () => import('./views/painel/Cursos.vue')
    },

    {
      path: '/painel/cursos/form',
      name: 'cursosform',
     
      component: () => import('./views/painel/CursosForm.vue')
    },

    {
      path: '/painel/professores',
      name: 'professorescurso',
      component: () => import('./views/painel/Professores.vue')
    },

    {
      path: '/painel/professores/form',
      name: 'profform',
     
      component: () => import('./views/painel/ProfForm.vue')
    },

    {
      path: '/usuario',
      name: 'usuario',
      component: () => import('./views/Usuario.vue')
    },
    {
      path: '/photoshop',
      name: 'photoshop',
      component: () => import('./produtos/Photoshop.vue')
    },

    {
      path: '/compra',
      name: 'compra',
      component: () => import('./produtos/Compra.vue')
    },

  ]
})
