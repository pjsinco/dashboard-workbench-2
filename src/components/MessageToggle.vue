<template>
  <div>
    <p>{{ message }}</p>
    <button id="toggleMessage" @click="toggle">Change message</button>
  </div>
</template>

<script>
  export default {

    name: 'message-toggle',

    methods: {
      toggle() {
        this.message = this.message === 'message' ? 'toggled message' : 'message'
      }
    },

    data () {

      return {
        message: 'default message'
      }
    }
  }
</script>

<style lang="scss">
</style>

