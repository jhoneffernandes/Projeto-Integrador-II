<template>
  <div>
    <v-card color="mt-5">
      <ul>
        <li>
          <a href="#top" accesskey="1">Ir para o Conteúdo Principal [Alt + 1]</a>
        </li>
        <li>
          <a href="#menu" accesskey="2">Início do Menu [Alt + 2]</a>
        </li>
        <li>
          <a
            href="#altocontraste"
            id="altocontraste"
            accesskey="3"
            onclick="window.toggleContrast()"
            onkeydown="window.toggleContrast()"
          >Alto contraste [Alt + 3]</a>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>

export default {
};
</script>
