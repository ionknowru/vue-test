<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <SubHeader />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SubHeader from './components/SubHeader';

import './scss/app.scss';

export default {
  name: 'App',
  components: {
    Header,
    SubHeader,
  }
}
</script>
