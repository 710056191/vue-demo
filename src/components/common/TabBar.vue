<template>
	<div class="idxfooter">
		<mt-tabbar v-model="selected" style="background: #fff;">
		  <mt-tab-item id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="GoTo(tab.name)">
			<svg-icon slot="icon" :icon-class="tab.icon"></svg-icon>
			{{tab.text}}
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	export default {
		name: 'TabBar',
		components:{Tabbar, TabItem},
		data(){
			return {
				tabs:[
				    {
				        text:'首页',
				        icon:'(home)_SFont.CN',
				        path:'/',
				        name:'Idx'
				    },{
				        text:'行情',
				        icon:'tab_icon_hangqingan_default',
				        path:'/hangqing',
				        name:'HangQing',
				    },
					{
					    text:'快讯',
					    icon:'tab_icon_kuaixunan_default',
					    path:'/kuaixun',
					    name:'KuaiXun',
					},
					{
				        text:'我的',
				        icon:'(user_avatar_login_account_profile_people)_SFont.CN (1)',
				        path:'/my',
				        name:'My'
				    }
				],
				selected:'Idx'
			};
		},
		methods:{
			GoTo(name){
				// nav.style.color='#FF6354';
				// 编程式导航：利用js实现路由跳转
				// 通过this.$router获取到路由实例对象
				// this.$router.push({name});//等效于<router-link :to="{name:xxx}"/>
				this.$router.push({name})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import '../../../styles/main.less';
	
	.mint-tabbar > .mint-tab-item.is-selected {
	  color: @sfs-color;
	  fill: @sfs-color;
	}
.idxfooter{
	width: 100%;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	.h(49);
}
</style>
