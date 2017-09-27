<template>
  <div class="columns">
    <slot></slot>
  </div>
</template>

<script>

export default {


  data () {
    return {
    }
  },

  name: 'cme-tableaux',

  props: {
    primaries: {
      required: true,
      type: Array,
    }
  }
}
</script>

<style>
</style>
