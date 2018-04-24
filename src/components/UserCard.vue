<template>
  <article class="user-card">
    <figure>
      <img :src="user.photo" :alt="user.firstname + user.lastname">
    </figure>
    <div>
      <h1>{{user.firstname}} {{user.lastname}}</h1>
      <p>
        <i class="fa fa-envelope" /> <a :href="'mailto:'+user.email" :title="'Envoyer un email à '+user.firstname +' '+ user.lastname+' ('+user.email+')'">{{user.email}}</a><br>
        <i class="fa fa-phone" /> <a :href="'tel:'+user.phone" :title="'Téléphoner à '+user.firstname +' '+ user.lastname+' ('+user.phone+')'">{{user.phone}}</a><br>
        <i class="fa fa-calendar" /> {{user.birthdate }} (XX ans)<br>
        <i class="fa fa-map-marker" /> {{user.city}}, {{user.country}}
      </p>
      <a href="#" class="btn btn-small" >Supprimer</a>
      <a href="#" class="btn btn-small" >Modifier</a>
    </div>
  </article>
</template>

<script>
export default {
  name : 'UserCard',

  // Décrit que ce composant doit impérativement implémenter une prop nomée 'user', et qui doit être un objet
  props : {
    user : { type: Object, required: true }
  }
}
</script>

<style scoped>
.user-card {
  display: inline-flex;
  align-items: stretch;
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;
}

  .user-card > figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
  }

    .user-card > figure > img {
      display: block;
      border-radius: 300px;
    }

  .user-card > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
  }
</style>
