<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-4 is-parent">
        <div class="tile is-child box is-radiusless">
          <h4 class="title is-size-4 has-text-centered">Licensing</h4>
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th class="has-text-weight-bold">State</th>
                <th class="has-text-weight-bold">Status</th>
                <th class="has-text-weight-bold">Expires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Georgia</th>
                <td><span class="tag is-dark">Active</span></td>
                <td>2019</td>
              </tr>
              <tr>
                <th class="has-text-weight-light">Alabama</th>
                <td><span class="tag is-light">Inactive</span></td>
                <td class="has-text-weight-light">2015</td>
              </tr>
            </tbody>
          </table>
          <p class="content">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </div>
      </div>
      <div class="tile is-4 is-parent">
        <div class="tile is-child box is-radiusless">
          <h4 class="title is-size-4 has-text-centered">AOA Board Certification</h4>
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th class="has-text-weight-bold">Specialty</th>
                <th class="has-text-weight-bold">Expires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pediatrics</td>
                <td>2021</td>
              </tr>
                <td>Family Medicine</td>
                <td>2023</td>
              <tr>
              </tr>
            </tbody>
          </table>
          <p class="content has-text-centered" style="padding-top: 11px;"><button class="button is-primary">See details</button></p>
        </div>
      </div>
      <div class="tile is-4 is-parent">
        <div class="tile is-child box is-radiusless">
          <h4 class="title is-size-4 has-text-centered">AOA Membership</h4>
          <h3 class="has-text-centered title is-size-2 is-primary">Active</h3>
          <h5 class="has-text-centered has-text-weight-light subtitle is-size-5" style="margin-bottom: 23px;">DO Member</h5>
          <div class="tags has-addons" style="justify-content: center; margin-bottom: 0;">
            <div class="tag is-dark">AOA ID</div>
            <div class="tag">023924</div>
          </div>
          <p class="is-size-7 is-primary has-text-centered">Paid through May 31, 2018</p>
          <div class="field has-addons" style="margin-top: 10px; margin-bottom: 0 !important;">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select>
                  <option>Get benefits</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-primary">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor" id="cmeProgress">
      <div class="tile is-12 is-parent">
        <div class="tile is-child box is-radiusless">
          <h4 class="title is-size-4 has-text-centered">CME Progress</h4>
            <div class="columns">
              <cme-header ></cme-header>
            </div>
            <cme-tableau v-for="(primary, index) in primaries" :key="index" :primary="primary" v-if="selectedPrimary === primary.desc"></cme-tableau>
            <p class="content has-text-centered" style="padding-top: 11px;"><button class="button is-primary">See details</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import CmeTableau from './CmeTableau.vue'
import CmeHeader from './CmeHeader.vue'

export default {

  name: 'status',

  components: {

    CmeTableau, CmeHeader

  },

  computed: {

    primaries() {
      return this.$store.state.cmeData.primaries.map(primary => {
        return Object.assign({}, 
                             primary ,
                             { general: this.$store.state.cmeData.general })
      })
    },

    doctor() {
      return this.$store.state.user.lastName
    },

    /**
     * Track the currently selected tableau
     *
     */
    selectedPrimary() {
      return this.$store.state.selectedPrimary
    }
  },

}
</script>

<style lang="scss">
</style>
