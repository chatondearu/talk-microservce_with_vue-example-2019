<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title" style="flex: 1">
              My Awesome Channel App
            </span>
          </div>

          <div class="md-toolbar-section-end">
            <md-avatar class="md-avatar-icon md-primary">
              <img src="./assets/logo.png">
            </md-avatar>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab md-label="Channel" @click="$router.push('/')" />
            <md-tab md-label="Custom Elements" @click="$router.push('custom-element')" />
            <md-tab md-label="Custom Elements with Vuejs" @click="$router.push('vue-custom-element')" />
            <md-tab md-label="Lazy Loading" @click="$router.push('vue-lazy-load')" />
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active="false">
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.md-app {
  min-height: 100vh;
  max-height: 100vh;
}

.md-app-content{
  padding: 0;
}
</style>
