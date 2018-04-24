<template>
  <div class="container centered">

    <h1>Liste des utilisateurs</h1>
    <hr>

    <form class="filterform">
      <input type="search" v-model.trim="searchText" placeholder="Tapez un nom ou un lieu ...">

      <label for="filter">Filtrer par :</label>
      <select name="filterBy" v-model="filterBy">
        <option value="name">Nom</option>
        <option value="localisation">Localisation</option>
      </select>
    </form>

    <div class="userlist">
      <UserCard v-for="user in filteredUsers" :user="user" :key="user.id" @remove="removeUser" />
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
      searchText : '',
      filterBy : 'name'
    }
  },

  methods : {
    removeUser(user) {
      axios.delete('http://localhost:9000/collaborateur/' + user.id).then(response => {
        this.users = this.users.filter( u => u.id !== user.id );
      })
    }
  },

  computed: {
    filteredUsers() {
      return this.users.filter( this.filterBy === 'localisation' ? filterByLocalisation.bind(this) : filterByName.bind(this) );
    }
  },

  created() {
    axios.get('http://localhost:9000/collaborateurs').then(response => {
      this.users = response.data;
    })
  }
}

function filterByName(user) {
  return user.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.lastname.toLowerCase().includes(this.searchText.toLowerCase())
}

function filterByLocalisation(user) {
  return user.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
          user.country.toLowerCase().includes(this.searchText.toLowerCase())
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

.filterform {
  margin: 2em 0
}
</style>
