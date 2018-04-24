<template>
  <article class="user-card">
    <figure>
      <img :src="photo" :alt="fullname">
    </figure>
    <div>
      <h1>{{fullname}}</h1>
      <p>
        <i class="fa fa-envelope" /> <a :href="'mailto:'+user.email" :title="'Envoyer un email à '+fullname+' ('+user.email+')'">{{user.email | trim(25) }}</a><br>
        <i class="fa fa-phone" /> <a :href="'tel:'+user.phone" :title="'Téléphoner à '+fullname+' ('+user.phone+')'">{{user.phone}}</a><br>
        <i class="fa fa-calendar" /> {{user.birthdate | dateFr}} ({{user.birthdate | age}} ans)<br>
        <i class="fa fa-map-marker" /> {{user.city}}, {{user.country}}
      </p>
      <a href="#" class="btn btn-small" @click.prevent="remove">Supprimer</a>
      <router-link :to="{ name: 'edit', params : { id:user.id } }" class="btn btn-small">Modifier</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name : 'UserCard',

  // Décrit que ce composant doit impérativement implémenter une prop nomée 'user', et qui doit être un objet
  props : {
    user : { type: Object, required: true }
  },

  computed : {
    photo : function() {
      return this.user.photo || 'https://s1.qwant.com/thumbr/0x0/2/2/6788a08a24aefe72817478982ee2e6/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fgurucul.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fdefault-user-icon-profile.png&q=0&b=1&p=0&a=1'
    },
    fullname : function() {
      return this.user.firstname[0].toUpperCase() + this.user.firstname.slice(1).toLowerCase() + ' ' + this.user.lastname.toUpperCase();
    }
  },

  methods : {
    remove() {
      this.$emit('remove', this.user);
    }
  },
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
      max-width: 128px;
    }

  .user-card > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
  }
</style>
