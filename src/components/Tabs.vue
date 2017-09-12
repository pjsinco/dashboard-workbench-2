<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" 
            v-bind:class="{ 'is-active': tab.isActive }">
          <a v-bind:href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

    methods: {
      selectTab: function(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (selectedTab.name == tab.name)
        })
      },
    },
  
    created() {
      this.tabs = this.$children;
    },

    data() {
      return {
        tabs: []
      }
    }
  }
</script>

<style lang="scss">
</style>
