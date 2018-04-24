<template>
  <div class="container centered">

    <h1>Ajouter un collaborateur</h1>
    <hr>

    <UserForm @send="addUser"></UserForm>

  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import UserService from '@/services/UserService'

export default {
  name: 'AddUser',

  components: { UserForm },

  methods : {
    addUser(newUserObject) {
      UserService.create(newUserObject).then( res => {
        this.$toast(res.message)

        this.$router.replace({ name : 'list' }) // Redirection vers la page <ListUser>
      }).catch(err => {
        this.$toast(err.message)
      })
    }
  }
}
</script>

<style scoped>
</style>
