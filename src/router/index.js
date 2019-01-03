import Vue from 'vue'
import Router from 'vue-router'
import Idx from '../Idx'
import Mint from 'mint-ui'
import HangQing from '../HangQing'
import KuaiXun from '../KuaiXun'
import My from '../My'
Vue.use(Router)
Vue.use(Mint)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Idx',
      component: Idx
    },
		{
			path:'/hangqing',
			name:'HangQing',
			component:HangQing
		},
		{
			path:'/kuaixun',
			name:'KuaiXun',
			component:KuaiXun
		},
		{
			path:'/my',
			name:'My',
			component:My
		}
  ]
})
