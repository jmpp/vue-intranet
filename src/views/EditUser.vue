<template>
  <div class="container centered">

    <h1>Modifier un collaborateur</h1>
    <hr>

    <UserForm @send="editUser" :user="user" v-if="user"></UserForm>
    <p v-else>Chargement du formulaire d'édition ....</p>

  </div>
</template>

<script>
import UserForm from '@/components/UserForm'
import axios from 'axios'

export default {
  name: 'EditUser',

  components: { UserForm },

  data() {
    return {
      user : null
    }
  },

  methods : {
    editUser(userObjectModified) {
      axios.put('http://localhost:9000/collaborateur/' + userObjectModified.id, userObjectModified)
        .then( response => {
          this.$router.replace({ name : 'list' }) // Redirection vers la liste <ListUser>
        })
    }
  },

  created() {
    axios.get('http://localhost:9000/collaborateur/' + this.$route.params.id).then(response => {
      this.user = response.data
    })
  }
}
</script>

<style scoped>
</style>
