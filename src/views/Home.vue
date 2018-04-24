<template>
  <div class="container centered">

    <h1>Bienvenue sur l'intranet</h1>
    <p>La plate-forme de l'entreprise</p>
    <hr>
    <h3>Avez-vous dit bonjour aujourd'hui à ...</h3>

    <UserCard :user="user" v-if="user" />

    <div class="actions">
      <a href="#" class="btn" @click.prevent="getRandomUser">
        <i class="fa fa-random" /> Dire bonjour à quelqu'un d'autre
      </a>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import UserCard from '@/components/UserCard.vue'

export default {
  name : 'Home',

  components : { UserCard },

  data() {
    return {
      users : [], // Contiendra la liste complète des utilisateurs, en provenance du serveur back-end
      user : null // Contiendra un objet utilisateur choisi au hasard parmi la liste ci-dessus
    }
  },

  methods: {
    // Prend un utilisateur au hasard dans le tableau 'users'
    getRandomUser() {
      let randIndex;

      // Petite technique pour s'assurer que le prochain utilisateur tiré au hasard ne soit pas le même que celui actuel
      do {
        randIndex = Math.floor(Math.random() * this.users.length)
      } while (randIndex === this.users.indexOf(this.user) && this.users.length > 1);

      this.user = this.users[randIndex];
    }
  },

  created() {
    // A la création de <Home> , on lance une requête Ajax vers le serveur, grâce à la librairie `axios`
    axios.get('http://localhost:9000/collaborateurs').then( response => {
      this.users = response.data; // Lorsqu'on obtient la réponse JSON du serveur, on remplit notre tableau `users` défini dans les data
      this.getRandomUser(); // Prend un utilisateur au hasard dans le tableau `users`
    })
  }
}
</script>

<style scoped>
</style>
