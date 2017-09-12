<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
  export default {

    name: 'tab',

    props: {
      name: {
        required: true,
        type: String,
      },
      selected: {
        type: Boolean,
        default: false,
      }
    },

    computed: {
      href: function() {
        return 'profile/' + this.name.toLowerCase().replace(/ /g, '-');
      },
    },

    data() {
      return {
        isActive: false,
      }
    },

    mounted() {
      this.isActive = this.selected
    }

  }
</script>

<style lang="scss">
</style>
