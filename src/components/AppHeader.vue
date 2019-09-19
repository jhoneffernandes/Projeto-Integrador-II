<template>
    <v-row>
 <v-toolbar>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

   <v-layout align-center justify-center>
<v-toolbar-items><v-btn text> <router-link to="/">
    <v-img :src="require('../assets/logo2.png')" height="3rem" contain></v-img>
    </router-link>
</v-btn> </v-toolbar-items>
 </v-layout>


      <div class="flex-grow-1"></div>
<v-layout justify-end>
      <v-toolbar-items>
        
      <router-link to="/about">  <v-btn text>Portfólio</v-btn></router-link>
       <router-link to="/classes"> <v-btn text>Cursos</v-btn></router-link>
      <router-link to="/about"> <v-btn text>Sobre</v-btn></router-link>
      </v-toolbar-items>
      </v-layout>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    

    <v-navigation-drawer
    app stateless
      v-model="drawer"
      absolute
      
      temporary
    >
      <v-list nav dense>
                      <v-app-bar-nav-icon align-end @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-list-item-group
         
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-row>

</template>

<script>
export default {
    data () {
      return {

        right: null,
        drawer: false,
        
      }
    },
        watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>


<style>

</style>