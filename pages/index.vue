<template>
<div>
  <AppHeader/>
  <ContentHome/>
</div>
</template>

<script>
import ContentHome from '../components/ContentHome';
import AppHeader from '../components/AppHeader';

export default {
  components: {
    ContentHome,
    AppHeader
  },
   head: {
    titleTemplate: '%s - Início',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web' }
    ]
  }
};
</script>
