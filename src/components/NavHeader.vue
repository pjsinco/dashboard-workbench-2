<template>
  <header class="header"></header>
</template>

<script>

  export default {

    name: 'nav-header',

    data () {

      return {
      }
    }
  }

</script>

<style lang="scss">

  header.header {
    position: relative;
    width: 100%;
    height: 110px;
    background: #888;
    z-index: 999;

    &:after {
      content: "Site nav";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%);
      color: #555;
      font-size: 24px;
    }
  }
</style>
