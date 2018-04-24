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
import UserService from '@/services/UserService'

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
      UserService.update(userObjectModified)
        .then( res => {
          this.$toast(res.message)

          this.$router.replace({ name : 'list' }) // Redirection vers la liste <ListUser>
        }).catch(err => {
          this.$toast(err.message)
        })
    }
  },

  created() {
    UserService.fetchOne(this.$route.params.id).then(user => {
      this.user = user
    }).catch(err => {
      this.$toast(err.message)
      this.$router.replace({ name : 'home' })
    })
  }
}
</script>

<style scoped>
</style>
