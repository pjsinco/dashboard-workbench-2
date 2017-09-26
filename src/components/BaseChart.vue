<template>
  <svg></svg>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({

    props: ['chartData'],
  
    data() {
  
    },

    mounted() {
      this.renderChart();
    },

    watch: {

      chartData: {
        handler: 'renderChart',
        deep: true,
      },

    },
  
    methods: {
  
      renderChart() {
        throw new Error('Please implement renderChart in a subclass of BaseChart') 
      },
    },
  });

</script>

<style>
</style>
