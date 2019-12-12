<template>
  <div id="app" class="container">
    <form class="pt-3" @submit="onSubmit" autocomplete="off">

      <div class="form-group">
        <label for="email">email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{
            'is-invalid': $v.email.$error,
            'is-valid': $v.email.$dirty && !$v.email.$error
          }"
          @blur="$v.email.$touch()"
          v-model="email"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">this field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">email is not valid</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">email is not unique</div>
      </div>

      <div class="form-group">
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          autocomplete="off"
          :class="{
            'is-invalid': $v.password.$error,
            'is-valid': $v.password.$dirty && !$v.password.$error
          }"
          @input="$v.password.$touch()"
          v-model="password"
        />
        <div class="invalid-feedback" v-if="!$v.password.required">this field is required</div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}.
        </div>

      </div>

      <div class="form-group">
        <label for="password2">confirm password</label>
        <input
          type="password"
          id="password2"
          class="form-control"
          autocomplete="off"
          :class="{
            'is-invalid': $v.password2.$error,
            'is-valid': $v.password2.$dirty && !$v.password2.$error
          }"
          @input="$v.password2.$touch()"
          v-model="password2"
        />
        <div class="invalid-feedback" v-if="!$v.password.sameAs">
          passwords should match.
        </div>
      </div>

      <button
        class="btn btn-success"
        type="submit"
        :disabled="$v.$invalid"
      >
        submit
      </button>

    </form>
  </div>
</template>

<script>

  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
  const minL = 8;
  const emails = [
    'test@test.ru',
  ];
  export default {
    data() {
      return {
        email: '',
        password: '',
        password2: '',
        minL,
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        console.log(event);
      }
    },
    validations: {
      email: {
        required,
        email,
        uniqEmail: newEmail => {
          if (newEmail === ''){
            return true
          }
          if (emails.includes(newEmail)) {
            return false
          }
          return true;
        }
      },
      password: {
        required,
        minLength: minLength(minL)
      },
      password2: {
        sameAs: sameAs('password')
      }
    },
    components: {

    }
  }
</script>

<style scoped>

</style>
