<template>
  <div>
    <AppHeader />
    <v-divider></v-divider>
    <v-layout align-center justify-center text-center class="my-5">
      <v-row>
        <v-card width="100%" height="6rem" dark color="indigo">
          <v-layout justify-center align-center>
            <v-card-title>
              <h2 class="tituloh flex-nowrap">Sobre Diorama Digital</h2>
            </v-card-title>
          </v-layout>
        </v-card>
      </v-row>
    </v-layout>

    <v-card-text class="headline">
      <p>Confira um vídeo introdutório sobre o projeto Diorama Cursos:</p>
    </v-card-text>

    <v-layout >
      <div class="mx-auto">
        <section>
          <video
            controls
            height="10%"
            width="60%"
            poster="../assets/poster.jpg"
            :src="require('../assets/vsobre.mp4')"
          ></video>
        </section>
      </div>
    </v-layout>
    
    <v-row class="ml-2 mt-5">
      <v-layout>
        <p class="text-justify">
          Sobre a empresa, morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
          Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
        </p>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>
