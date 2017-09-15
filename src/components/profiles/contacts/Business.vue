<template>
    <div>
      <h3 class="is-size-4 title has-text-weight-bold">Business <span class="has-text-weight-light has-text-grey">contact information</span></h3>
      <form @submit.prevent="onSubmit">

        <div class="field">
          <label class="label" for="email">Business Email</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="email" id="email" v-model="form.email" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('email')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <label class="label" for="address1">Addresss 1</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="address1" id="address1" v-model="form.address1" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('address1')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <label class="label" for="address2">Address 2</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="address2" id="address2" v-model="form.address2" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('address2')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <label class="label" for="city">City</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="city" id="city" v-model="form.city" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('city')"></span>
          </div>
        </div> <!-- .field -->

        <div class="columns">
          <div class="column is-half">
            <div class="field">
              <label class="label" for="state">State</label>
              <div class="control is-expanded">
                <div class="select is-medium is-fullwidth">
                  <select name="state" id="state" v-model="form.state">
                    <option v-for="state in states" key="state.abbr" :value="state.abbr">{{ state.name }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label" for="zip">Zip</label>
              <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
                <input class="input is-medium" type="text" name="zip" id="zip" v-model="form.zip" @input="form.errors.clear()">
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('zip')"></span>
              </div>
            </div>
          </div> <!-- .column -->
        </div> <!-- .columns -->

        <div class="field">
          <label class="label" for="businessPhone">Business Phone</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="businessPhone" id="businessPhone" v-model="form.businessPhone" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('businessPhone')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <div class="control is-pulled-right">
            <button class="button is-primary is-medium" v-bind:disabled="form.errors.any()">Update profile</button>
          </div>
        </div>
      </form>
      
    </div>
</template>

<script>
  import Form from './../../../utils/Form';
  import states from './../../../data/states.json';

  export default {

    name: 'contact-form',

    methods: {
      onSubmit() {
        console.log('submitted');
      },

      fetchData(wait = 2000) {
        const that = this;
        setTimeout(function() {
          that.isLoading = false;
          that.form.email = 'basher@wellstar.com';
          that.form.city = 'Kennesaw';
          that.form.address1 = '750 Townpark Ln NW';
          that.form.state = 'GA';
          that.form.zip = '30144';
          that.form.businessPhone = '4043650966';
        }, wait);
      },
    },


    mounted() {
      this.fetchData(1000);
    },

    data () {

      return {
        isLoading: true,
        form: new Form({
          email: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          businessPhone: '',
        }),

        states,
      }
    }
  }
</script>

<style lang="scss">
</style>
