<template>
  <div class="container centered">

    <h1>Ajouter un collaborateur</h1>
    <hr>

    <UserForm @send="addUser"></UserForm>

  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'AddUser',

  components: { UserForm },

  methods : {
    addUser(newUserObject) {
      axios.post('http://localhost:9000/collaborateur', newUserObject).then( response => {
        this.$router.replace({ name : 'list' }) // Redirection vers la page <ListUser>
      })
    }
  }
}
</script>

<style scoped>
</style>
