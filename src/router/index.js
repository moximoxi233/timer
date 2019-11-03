import Vue from 'vue'
import Router from 'vue-router'
import Timer from '@/components/Timer'
import SetTimer from '@/components/SetTimer'
import Complate from '@/components/Complate'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Timer', component: Timer},
    {path: '/timer', name: 'Timer', component: Timer},
    {path: '/setTimer', name: 'setTimer', component: SetTimer},
    {path: '/complate', name: 'complate', component: Complate}
  ]
})
