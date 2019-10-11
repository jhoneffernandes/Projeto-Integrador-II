<template>
  <div>
    <AppHeader/>
      <v-divider></v-divider>
            <v-layout align-center justify-center text-center>
      <v-row>
        <v-card width="100%" height="6rem" dark color="indigo">
          <v-layout justify-center align-center class="my-4">
            <v-card-title>
              <h2>Sobre a Diorama Digital</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-layout>
      <p class="text-justify mx-5 my-10">
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
      </p>
    </v-layout>

<v-row align="center" justify="center" class="my-10">
          <video controls height="50%" width="50%" poster="../assets/poster.jpg" src=
          "../assets/teste.mp4"></video>
</v-row>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader';
export default {

components: {
    AppHeader,
  }

}
</script>

