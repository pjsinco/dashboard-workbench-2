<template>
  <div class="">
    <h3 class="is-size-4 title has-text-weight-bold">Personal <span class="has-text-weight-light has-text-grey">information</span></h3>
    <form @submit.prevent="onSubmit">
      <div class="columns">
        <div class="column is-half" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="firstName">First Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="firstName" id="firstName" v-model="form.firstName" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('firstName')" v-text="form.errors.get('firstName')"></span>
            </div>
          </div> <!-- .field -->
        </div>   

        <div class="column is-half" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="middleName">Middle Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="middleName" id="middleName" v-model="form.middleName" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('middleName')" v-text="form.errors.get('middleName')"></span>
            </div>
          </div> <!-- .field -->
        </div> <!-- .field -->
      </div> <!-- .columns -->

      <div class="columns">
        <div class="column is-10" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="lastName" id="lastName" v-model="form.lastName" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('lastName')" v-text="form.errors.get('lastName')"></span>
            </div>
          </div> <!-- .field -->
        </div> <!-- .column -->

        <div class="column is-2" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="suffix">Suffix</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="suffix" id="suffix" v-model="form.suffix" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('suffix')" v-text="form.errors.get('suffix')"></span>
            </div>
          </div> <!-- .field -->
        </div> <!-- .column -->
      </div> <!-- .columns -->

      <div class="field">
        <label class="label" for="email">Email</label>
        <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
          <input class="input is-medium" type="text" name="email" id="email" v-model="form.email" @input="form.errors.clear()">
          <span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
        </div>
      </div> <!-- .field -->

      <div class="field">
        <label class="label" for="website">Website</label>
        <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
          <input class="input is-medium" type="text" name="website" id="email" v-model="form.website" @input="form.errors.clear()">
          <span class="help is-danger" v-if="form.errors.has('website')" v-text="form.errors.get('website')"></span>
        </div>
      </div> <!-- .field -->

      <div class="field">
        <div class="control is-pulled-right">
          <button class="button is-primary is-medium" v-bind:disabled="form.errors.any()">Update profile</button>
        </div>
      </div>
    </form>
    
  </div>
  <!--</div>-->
</template>

<script>
  import Form from './../../utils/Form';

  export default {

    name: 'profile-personal',

    methods: {

      onSubmit() {
        console.log('submitted');
      },


      fetchData(wait = 2000) {
        const that = this;
        setTimeout(function() {
          that.isLoading = false;
          that.form.firstName = 'Bridgett';
          that.form.lastName = 'Asher';
          that.form.email = 'drbridgett@gmail.com';
          that.form.designation = 'DO';
        }, wait);
      }

    },

    created() {
      this.fetchData(1000);
    },
    data () {
      return {
        isLoading: true,
        form: new Form({
          firstName: '',
          middleName: '',
          lastName: '',
          suffix: '',
          email: '',
          website: '',
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
