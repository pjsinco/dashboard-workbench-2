/**
 * @see https://www.reddit.com/r/vuejs/comments/5lbw9b/how_do_you_handle_forms_in_the_context_of_vuex/
 *
 * TODO call Vuex actions in Form class?
 */

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
              <input class="input is-medium" :class="[ form.errors.has('last_name') ? 'is-danger' : '' ]" type="text" name="last_name" id="last_name" v-model="form.last_name" @input="form.errors.clear()">
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
import _ from 'lodash';
import Form from './../../utils/Form';
import Errors from './../../utils/Errors';


export default {

  name: 'profile-personal',

  methods: {

    handleInputUpdate(evt) {
      this.form.errors.clear()
      this.$store.commit('updateUser', { [evt.target.name]: evt.target.value })
    },

    onSubmit() {
      this.form.post('http://dashboardproto.app/api/v1/users/' + 
                     this.$store.state.user.id)
        .then(response => {
          this.$store.dispatch('updateUser', response)
          this.$toast.popUp('Updated the info')
        })
        .catch(error => {
console.log(this.errors.has('last_name'));
        });
    },


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
        })
      },
  },

  created() {
    /**
     * @see https://vuex.vuejs.org/en/api.html#vuexstore-instance-methods
     * 
     * We'll watch for store changes and then update
     * our local form data.
     */
    this.$store.subscribe((mutation, state) => {

      if (mutation.type === 'updateUser') {
        this.$data.form = new Form(Object.assign({}, {
          first_name:  mutation.payload.first_name,
          middle_name: mutation.payload.middle_name,
          last_name:   mutation.payload.last_name,
          suffix:      mutation.payload.suffix,
          email:       mutation.payload.email,
          website:     mutation.payload.website,
        }))
      }
    });
  },


  data () {
    return {

      /**
       * Clone user data for our local form.
       * When we have new, validated data that the store
       * should know about, we'll call mutations.
       */
      form: new Form(Object.assign({}, {
        first_name:  this.$store.state.user.first_name,
        middle_name: this.$store.state.user.middle_name,
        last_name:   this.$store.state.user.last_name,
        suffix:      this.$store.state.user.suffix,
        email:       this.$store.state.user.email,
        website:     this.$store.state.user.website,
      }))
    };
  }
}
</script>

<style lang="scss">
</style>
