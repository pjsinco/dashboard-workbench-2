<template>
  <div class="">
    <h3 class="is-size-4 title has-text-weight-bold">Personal <span class="has-text-weight-light has-text-grey">information</span></h3>
    <form @submit.prevent="onSubmit">
      <div class="columns">
        <div class="column is-half" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="first_name">First Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="first_name" id="first_name" v-model="form.first_name" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('first_name')" v-text="form.errors.get('first_name')"></span>
            </div>
          </div> <!-- .field -->
        </div>   

        <div class="column is-half" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="middle_name">Middle Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="middle_name" id="middle_name" v-model="form.middle_name" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('middle_name')" v-text="form.errors.get('middle_name')"></span>
            </div>
          </div> <!-- .field -->
        </div> <!-- .field -->
      </div> <!-- .columns -->

      <div class="columns">
        <div class="column is-10" style="padding-bottom: 0;">
          <div class="field">
            <label class="label" for="last_name">Last Name</label>
            <div :class="[ isLoading ? 'is-loading control' : 'control' ]">
              <input class="input is-medium" type="text" name="last_name" id="last_name" v-model="form.last_name" @input="form.errors.clear()">
              <span class="help is-danger" v-if="form.errors.has('last_name')" v-text="form.errors.get('last_name')"></span>
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
        this.form.post('http://dashboardproto.app/api/v1/users/' + 
                       this.$store.state.user.id)
          .then(response => {
            this.$store.dispatch('updateUser', response)
          })
          .catch(error => {
console.dir(error);
          });
//          .then(() => {
//            // this.loading = false;
//          })
//          .catch(error => {
//            console.dir(error);
//          });
      },


      fetchData(wait = 2000) {
        const that = this;
        setTimeout(function() {
          that.isLoading = false;
          that.form.first_name = 'Bridgett';
          that.form.last_name = 'Asher';
          that.form.email = 'drbridgett@gmail.com';
          that.form.designation = 'DO';
        }, wait);
      }

    },

    created() {
      //this.fetchData(1000);
      //console.dir(this.$store.state.user);
      
    },

    computed: {
      isLoading() {
        return this.$store.state.loading;
      },

      form() {
        return new Form({
          first_name:  this.$store.state.user.first_name,
          middle_name: this.$store.state.user.middle_name,
          last_name:   this.$store.state.user.last_name,
          suffix:     this.$store.state.user.suffix,
          email:      this.$store.state.user.email,
          website:    this.$store.state.user.website,
        });
      }
    },

    data () {
      return {
      };
    }
  }
</script>

<style lang="scss">
</style>
