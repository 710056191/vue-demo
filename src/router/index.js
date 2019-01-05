import Vue from 'vue'
import Router from 'vue-router'
import Idx from '../Idx'
import Mint from 'mint-ui'
import HangQing from '../HangQing'
import KuaiXun from '../KuaiXun'
import My from '../My'
import Login from '../components/user/login'
import Reg from '../components/user/reg'
import RetrievePwd from '../components/user/RetrievePwd'
import Detail from '../components/Detail'
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
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		},
		{
			path:'/reg',
			name:'Reg',
			component:Reg
		},
		{
			path:'/password',
			name:'RetrievePwd',
			component:RetrievePwd
		},
		{
			path:'/detail/:id',
			name:'Detail',
			component:Detail
		}
  ]
})
