<template>
  <div class="container centered">

    <h1>Liste des utilisateurs</h1>
    <hr>

    <div class="userlist">
      <UserCard v-for="user in users" :user="user" :key="user.id" />
    </div>

  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import axios from 'axios'

export default {
  name: 'ListUser',

  components: {
    UserCard
  },

  data() {
    return {
      users : [],
    }
  },

  created() {
    axios.get('http://localhost:9000/collaborateurs').then(response => {
      this.users = response.data;
    })
  }
}

</script>

<style scoped>
.userlist {
  display: flex;
  flex-wrap: wrap;
}
  .userlist > * {
    box-sizing: border-box;
    width: calc(94%/3);
    margin: 1%;
  }
</style>
