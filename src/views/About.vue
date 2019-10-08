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

    <v-row  class="ml-2">
      <v-layout>
        <p class="text-justify">
          Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
          Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
        </p>
      </v-layout>
    </v-row>
    <div>
      <p>Vê ai ce ta no commit nao master e nao aceita esse bagulho</p>
    </div>
    <v-layout>
      <div class="mx-auto">
        <section>
          <video
            controls
            height="100%"
            width="100%"
            poster="../assets/poster.jpg"
            :src="require('../assets/teste.mp4')"
          ></video>
        </section>
      </div>
    </v-layout>
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

