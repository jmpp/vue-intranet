<template>
  <form class="userform" @submit.prevent="send">

    <div class="form-group">
      <input type="radio" name="gender" id="male" value="male" v-model="user.gender">
      <label for="male">Homme</label>

      <input type="radio" name="gender" id="female" value="female" v-model="user.gender">
      <label for="female">Femme</label>

      <span v-if="$v.user.gender.$error && !$v.user.gender.required">Requis !</span>
    </div>

    <div class="form-group">
      <label for="lastname">Nom :</label>
      <input type="text" id="lastname" placeholder="DOE" v-model="user.lastname" :class="{ 'input-error' : $v.user.lastname.$error }" @blur="$v.user.lastname.$touch()">
      <span v-if="$v.user.lastname.$error && !$v.user.lastname.required">Requis !</span>
      <span v-if="$v.user.lastname.$error && !$v.user.lastname.minLength">Min 2 characters !</span>
    </div>

    <div class="form-group">
      <label for="firstname">Prénom :</label>
      <input type="text" id="firstname" placeholder="John" v-model="user.firstname" :class="{ 'input-error' : $v.user.firstname.$error }" @blur="$v.user.firstname.$touch()">
      <span v-if="$v.user.firstname.$error && !$v.user.firstname.required">Requis !</span>
      <span v-if="$v.user.firstname.$error && !$v.user.firstname.minLength">Min 2 characters !</span>
    </div>

    <div class="form-group">
      <label for="email">Email :</label>
      <input type="text" id="email" placeholder="john.doe@example.com" v-model="user.email" :class="{ 'input-error' : $v.user.email.$error }" @blur="$v.user.email.$touch()">
      <span v-if="$v.user.email.$error && !$v.user.email.required">Requis !</span>
      <span v-if="$v.user.email.$error && !$v.user.email.email">Adresse email invalide !</span>
    </div>

    <div class="form-group">
      <label for="phone">Téléphone :</label>
      <input type="text" id="phone" placeholder="06-78-90-12-34" v-model="user.phone" :class="{ 'input-error' : $v.user.phone.$error }" @blur="$v.user.phone.$touch()">
      <span v-if="$v.user.phone.$error && !$v.user.phone.required">Requis !</span>
    </div>

    <div class="form-group">
      <label for="birthdate">Date de naissance :</label>
      <input type="date" id="birthdate" placeholder="04/11/1988" v-model="user.birthdate" :class="{ 'input-error' : $v.user.birthdate.$error }" @blur="$v.user.birthdate.$touch()">
      <span v-if="$v.user.birthdate.$error && !$v.user.birthdate.required">Requis !</span>
    </div>

    <div class="form-group">
      <label for="city">Ville :</label>
      <input type="text" id="city" placeholder="Paris" v-model="user.city" :class="{ 'input-error' : $v.user.city.$error }" @blur="$v.user.city.$touch()">
      <span v-if="$v.user.city.$error && !$v.user.city.required">Requis !</span>
    </div>

    <div class="form-group">
      <label for="country">Pays :</label>
      <input type="text" id="country" placeholder="France" v-model="user.country" :class="{ 'input-error' : $v.user.country.$error }" @blur="$v.user.country.$touch()">
      <span v-if="$v.user.country.$error && !$v.user.country.required">Requis !</span>
    </div>

    <div class="form-group">
      <label for="photo">Photo :</label>
      <input type="url" id="photo" placeholder="http://" v-model="user.photo">
    </div>

    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
    </div>

  </form>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'UserForm',

  props: {
    user : {
      type: Object,
      default: function() {
        return {}
      }
    }
  },

  methods: {
    send() {
      this.$v.user.$touch()

      if (!this.$v.user.$error) {
        this.$emit('send', this.user)
      }
    }
  },

  validations : {
    user : {
      gender   : { required },
      firstname: { required, minLength: minLength(2) },
      lastname : { required, minLength: minLength(2) },
      email    : { required, email },
      phone    : { required },
      birthdate: { required },
      city     : { required },
      country  : { required }
    }
  }
}
</script>

<style>
  .userform {
    margin: 2em 0;
  }

  .userform .form-group {
    margin-bottom: 1.2em;
  }

  .userform label {
    display: inline-block;
    vertical-align: middle;
    min-width: 150px;
    text-align: right;

  }
  .userform input[type='radio'] + label {
    min-width: 0;
    text-align: left;
    cursor: pointer;
  }

  .userform input:not([type=radio]) {
    min-width: 200px;
    vertical-align: middle;
  }

  .userform input ~ span {
    display: block;
    font-size: 0.8em;
    color: red;
  }

  .userform .input-error {
    border: 1px solid red;
  }
</style>
