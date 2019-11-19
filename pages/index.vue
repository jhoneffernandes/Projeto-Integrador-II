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
    AppHeader,
    
  },
   head: {
    titleTemplate: '%s - Início',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web' },
        // OpenGraph data (Most widely used)
    {property: 'og:title', content: 'Início - Diorama Cursos'},
    {property: 'og:site_name', content: 'Diorama Cursos'},
    // The list of types is available here: http://ogp.me/#types
    {property: 'og:type', content: 'website'},
    // Should the the same as your canonical link, see below.
    {property: 'og:url', content: 'http://localhost:3000/'},
    {property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'},
    // Often the same as your meta description, but not always.
    {property: 'og:description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},

    // Twitter card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'http://localhost:3000/Professores'},
    {name: 'twitter:title', content: 'Início - Diorama Cursos'},
    {name: 'twitter:description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},
    
    // Google / Schema.org markup:
    {itemprop: 'name', content: 'Início - Diorama Cursos'},
    {itemprop: 'description', content: 'Página inicial da Diorama Cursos online, contem promoções de cursos e vários materiais de desenvolvimento web'},
    {itemprop: 'image', content: 'https://media.licdn.com/dms/image/C4E0BAQHlFp3lz14QbQ/company-logo_200_200/0?e=2159024400&v=beta&t=XMte2KZYAlHN0yCB6xfSQtB3wYfEirImqu2uLhFy44w'}
,         {rel: 'canonical', href: 'http://localhost:3000/'}

    ]
  }
};
</script>
