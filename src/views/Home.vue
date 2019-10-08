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
};
</script>
