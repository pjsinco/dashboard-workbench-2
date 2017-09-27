<template>
  <span>{{ salutation }}</span>
</template>

<script>
export default {

  name: 'salutation',

  props: ['name'],

  computed: {

    salutation() {
      const hour = new Date().getHours();

      let timeOfDay

      if (hour > 16 || hour < 4) {
        timeOfDay = 'evening'
      } else if (hour > 11) {
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

