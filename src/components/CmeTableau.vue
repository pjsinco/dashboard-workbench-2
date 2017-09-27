<template>
  <div class="columns" >
    <div class="column has-text-centered" v-for="(progressBar, index) in progressBars" >
      <progress-bar :key="index" :id="'progress-' + index" :chart-data="progressBar"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {

  name: 'cme-tableau',

  components: {
    ProgressBar,
  },

  props: {
    primary: {
      required: true,
      type: Object,
    },
  },

  computed: {
    
    progressBars() {
      const bars = []    

      if (this.primary.generalRequired > 0) {
        bars.push({
          earned: this.primary.general.earned,
          required: this.primary.generalRequired,
        });
      }

      if (this.primary.cat1aRequired > 0) {
        bars.push({
          earned: this.primary.general.cat1aEarned,
          required: this.primary.cat1aRequired,
        });
      }

      // TODO ... handle primaries, subs
      bars.push({
        earned: this.primary.earned,
        required: this.primary.required,
        subs: this.primary.subs
      })

      return bars
    }
  },

  created() {
  },


  data () {
    return {
    }
  },

}
</script>

<style>
</style>

