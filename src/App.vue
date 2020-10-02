<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <div class="content">
        <SubHeader />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SubHeader from './components/SubHeader';

export default {
  name: 'App',
  components: {
    Header,
    SubHeader,
  }
}
</script>

<style lang="scss">

</style>
