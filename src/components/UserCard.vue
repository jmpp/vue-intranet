<template>
  <article class="user-card">
    <figure>
      <img src="USER_PHOTO" alt="USER_NAME">
    </figure>
    <div>
      <h1>Prénom NOM</h1>
      <p>
        <i class="fa fa-envelope" /> <a href="mailto:USER_EMAIL" title="Envoyer un email à USER_EMAIL">USER_EMAIL</a><br>
        <i class="fa fa-phone" /> <a href="tel:USER_PHONE" title="Téléphoner à USER_NAME">USER_PHONE</a><br>
        <i class="fa fa-calendar" /> USER_BIRTHDATE (XX ans)<br>
        <i class="fa fa-map-marker" /> USER_CITY, USER_COUNTRY
      </p>
      <a href="#" class="btn btn-small">Supprimer</a>
      <a href="#" class="btn btn-small">Modifier</a>
    </div>
  </article>
</template>

<script>
export default {
  name : 'UserCard'
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
