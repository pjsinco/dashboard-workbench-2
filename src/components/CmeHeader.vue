<template>
  <div class="column">
    <div class="control" v-if="showPrimarySelect">
      <div class="select">
        <select v-model="selectedPrimary">
          <option v-for="primary in primaries" :value="primary.desc">{{ primary.desc }}</option>
        </select>
      </div>
    </div>
    <div v-else-if="showPrimaryName">
      {{ selectedPrimary }}
    </div>
  </div>
</template>

<script>
export default {

  name: 'cme-header',

  computed: {
    
    primaries() {
      return this.$store.state.cmeData.primaries.map(primary => {
        return Object.assign({}, 
                             primary ,
                             { general: this.$store.state.cmeData.general })
      })
    },

    showPrimaryName() {
      return !this.showPrimarySelect && this.selectedPrimary !== ''
    },

    selectedPrimary: {

      get: function() {
        return this.$store.state.selectedPrimary
      },
      set: function(primary) {
        this.$store.commit('setSelectedPrimary', primary)
      }
    },
  },

  created() {
    if (this.primaries.length > 0) {
      this.$data.selectedPrimary = this.primaries[0].desc
    } 

    if (this.primaries.length > 1) {
      this.showPrimarySelect = true
    }
  },

  data() {

    return {
      showPrimarySelect: false,
    }
  }
}
</script>

<style>
</style>
