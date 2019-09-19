<template>
<v-app>
  <v-footer
  absolute
    dark
    padless
  >
    
    <v-card
      cols="auto"
      flat
      tile
      class="white--text text-center"
    >
      <v-card-text class="text-center">


        <v-layout justify-space-around="" align-center>

         <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>


          <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

          <v-btn icon>
          <v-icon>mdi-gmail</v-icon>
        </v-btn>

          <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>

        </v-layout>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Diorama Digital</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>