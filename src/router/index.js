import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/Channel'
import ChannelCustomElement from '@/components/ChannelCustomElement'
import ChannelVueCustomElement from '@/components/ChannelVueCustomElement'
import ChannelVueLazyLaod from '@/components/ChannelVueLazyLaod'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'channel',
      component: Channel
    },

    {
      path: '/custom-element',
      name: 'custom-element',
      component: ChannelCustomElement
    },

    {
      path: '/vue-custom-element',
      name: 'vue-custom-element',
      component: ChannelVueCustomElement
    },

    {
      path: '/vue-lazy-load',
      name: 'vue-lazy-load',
      component: ChannelVueLazyLaod
    }
  ]
})
