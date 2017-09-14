<template>
  <div class="hero banner-hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
          <slot></slot>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import mixins from './../mixins';

  export default {

    name: 'banner',

    mixins: [mixins],

    data () {

      return {
      }
    }
  }
</script>

<style lang="scss">
</style>
