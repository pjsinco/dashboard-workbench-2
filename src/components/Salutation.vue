<template>
  <span>{{ salutation }}</span>
</template>

<script>
export default {

  name: 'salutation',

  props: {
    name: {
      required: true,
    },
  },

  data() {
    return {
      hour: null,
    }
  },

  created() {
    this.$data.hour = new Date().getHours();
  },

  computed: {

    salutation() {
      let timeOfDay

      if (this.hour > 16 || this.hour < 4) {
        timeOfDay = 'evening'
      } else if (this.hour > 11) {
        timeOfDay =  'afternoon'
      } else {
        timeOfDay =  'morning'
      }
      return `Good ${timeOfDay}, Dr. ${this.name}!`
    },
  },

}
</script>

<style>
</style>

