<template>
  <div class="columns">
    <div class="column is-12">
      <form @submit.prevent="onSubmit">

        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="firstName" id="firstName" v-model="form.firstName" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('firstName')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <label class="label" for="middleName">Middle Name</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="middleName" id="middleName" v-model="form.middleName" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('middleName')"></span>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <label class="label" for="lastName">Last Name</label>
          <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
            <input class="input is-medium" type="text" name="lastName" id="lastName" v-model="form.lastName" @input="form.errors.clear()">
            <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('lastName')"></span>
          </div>
        </div> <!-- .field -->

        <!-- TODO fix one-off style change below -->
        <div class="field is-horizontal" style="padding-top: 1rem;">
          <div class="field-label is-normal">
            <label class="label" for="suffix">Suffix</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
                <input class="input is-medium" type="text" name="suffix" id="suffix" v-model="form.suffix" @input="form.errors.clear()">
                <span class="help is-danger" v-if="form.errors.has('suffix')" v-text="form.errors.get('suffix')"></span>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label" for="designation">Designation</label>
              </div>
              <div class="field-body">
                <div :class="[ isLoading ? 'is-loading control is-pulled-right' : 'control is-pulled-right' ]">
                  <input class="input is-medium" type="text" name="designation" id="designation" v-model="form.designation" @input="form.errors.clear()">
                  <span class="help is-danger" v-if="form.errors.has('designation')" v-text="form.errors.get('designation')"></span>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- .field -->

        <div class="field">
          <div class="control is-pulled-right">
            <button class="button is-primary is-medium" v-bind:disabled="form.errors.any()">Update profile</button>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
  import Form from './../../utils/Form';

  export default {

    name: 'profile-personal',

    methods: {

      onSubmit() {
        console.log('submitted');
      },


      fetchData() {
        const that = this;
        setTimeout(function() {
          that.isLoading = false;
          that.form.firstName = 'Gracie';
          that.form.lastName = 'Henighan';
          that.form.designation = 'DO';
        }, 2000);
      }

    },

    created() {
      this.fetchData();
    },
    data () {
      return {
        isLoading: true,
        form: new Form({
          firstName: '',
          middleName: '',
          lastName: '',
          suffix: '',
          designation: '',
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
