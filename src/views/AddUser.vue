<template>
  <div class="container centered">

    <h1>Ajouter un collaborateur</h1>
    <hr>

    <form class="userform" @submit.prevent="addUser">

      <div class="form-group">
        <input type="radio" name="gender" id="male" value="male" v-model="user.gender">
        <label for="male">Homme</label>

        <input type="radio" name="gender" id="female" value="female" v-model="user.gender">
        <label for="female">Femme</label>
      </div>

      <div class="form-group">
        <label for="lastname">Nom :</label>
        <input type="text" id="lastname" placeholder="DOE" v-model="user.lastname">
      </div>

      <div class="form-group">
        <label for="firstname">Prénom :</label>
        <input type="text" id="firstname" placeholder="John" v-model="user.firstname">
      </div>

      <div class="form-group">
        <label for="email">Email :</label>
        <input type="text" id="email" placeholder="john.doe@example.com" v-model="user.email">
      </div>

      <div class="form-group">
        <label for="phone">Téléphone :</label>
        <input type="text" id="phone" placeholder="06-78-90-12-34" v-model="user.phone">
      </div>

      <div class="form-group">
        <label for="birthdate">Date de naissance :</label>
        <input type="date" id="birthdate" placeholder="04/11/1988" v-model="user.birthdate">
      </div>

      <div class="form-group">
        <label for="city">Ville :</label>
        <input type="text" id="city" placeholder="Paris" v-model="user.city">
      </div>

      <div class="form-group">
        <label for="country">Pays :</label>
        <input type="text" id="country" placeholder="France" v-model="user.country">
      </div>

      <div class="form-group">
        <label for="photo">Photo :</label>
        <input type="url" id="photo" placeholder="http://" v-model="user.photo">
      </div>

      <div class="actions">
        <button type="submit" class="btn">Envoyer</button>
      </div>

    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUser',

  data() {
    return {
      user : {}
    }
  },

  methods : {
    addUser() {
      axios.post('http://localhost:9000/collaborateur', this.user).then( response => {
        this.$router.replace({ name : 'list' }) // Redirection vers la page <ListUser>
      })
    }
  }
}
</script>

<style scoped>
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
