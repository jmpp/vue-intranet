<template>
  <div class="container centered">

    <h1>Bienvenue sur l'intranet</h1>
    <p>La plate-forme de l'entreprise</p>
    <hr>
    <h3>Avez-vous dit bonjour aujourd'hui à ...</h3>

    <UserCard />

    <div class="actions">
      <a href="#" class="btn">
        <i class="fa fa-random" /> Dire bonjour à quelqu'un d'autre
      </a>
    </div>

  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'

export default {
  name : 'Home',

  components : { UserCard }
}
</script>

<style scoped>
</style>
