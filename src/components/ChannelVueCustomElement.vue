<template>
  <div class="channel">

    <h2>Channel Name</h2>
    <div class="channel-content">
      <!-- Player -->
      <fragment-vue-player :views="views"></fragment-vue-player>
      <link rel="import" href="/fragments/vuejs/player.html">

      <!-- Chat -->
      <vue-chat></vue-chat>
    </div>
    <p>
      <md-button class="md-raised md-accent" @click="views++">view + 1</md-button>
    </p>

    <p>
      Parallèlement, la contextualisation autour de la Géo Physique Spatiale est censé(e) régler les encadrés propre(s) aux congolais, je vous en prie. Nous n’allons pas seulement danser ou jouer au football, l'imbroglio par rapport aux diplomaties se résume à aider la quatripartie avec la formule 1+(2x5), je vous en prie. D'une manière ou d'une autre, la cosmogonisation à forciori, s'applique à imposer les encadrés axé(e)(s) sur la réalité du terrain, c’est clair. Une semaine passée sans parler du peuple c’est errer sans abri, autrement dit le rédynamisme éventualiste sous cet angle là pousse à rabibocher le trabajo, le travail, la machinale, la robotisation propre(s) aux congolais, bonnes fêtes.
    </p>

  </div>
</template>

<script>
import Vue from 'vue'
import VueCustomElement from 'vue-custom-element'
import Chat from '../fragments/lazyload/Chat'

Vue.use(VueCustomElement)

Vue.customElement('vue-chat', Chat, {
  shadow: true
})

export default {
  name: 'Channel',

  data () {
    return {
      views: 5
    }
  }
}
</script>

<style scoped>
.channel {
  background: #0081D5;
  padding: 20px;
  width: 100%;
  height: 100%;
}

.channel-content {
  display: flex;
  align-items: center;
}
</style>
