<template>
	<div class="idxfooter">
		<div class="tabbar">
			<div class="shouye">
				<svg-icon class="selected" icon-class="(home)_SFont.CN"></svg-icon>
				<p class="active1">首页</p>
			</div>
			<div class="hangqing">
				<svg-icon icon-class="tab_icon_hangqingan_default" id="active"></svg-icon>
				<p>行情</p>
			</div>
			<div class="kuaixun">
				<svg-icon icon-class="tab_icon_kuaixunan_default" id="active"></svg-icon>
				<p>快讯</p>
			</div>
			<div class="wode">
				<svg-icon class="active" icon-class="(user_avatar_login_account_profile_people)_SFont.CN (1)" id="active"></svg-icon>
				<p>我的</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	export default {
		name: 'TabBar',
		components:{Tabbar, TabItem},
		data(){
			return {
				active:true
			};
			
		}
	}
</script>

<style lang="less" scoped="scoped">
@import '../../../styles/main.less';
	.selected{
		fill: #78B5CC;
	}
	.active{
		fill: #AFB5BB;
	}
	.active1{
		color: #78B5CC;
	}
.idxfooter{
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	.tabbar{
		display: flex;
		justify-content: center;
		div{
			flex: 1;
			text-align: center;
			
			p{
				width:100%;
				.h(16);
				font-size:11px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:#AFB5BB;
				line-height:16px;
				text-align: center;
			}
			
		}
	}
}
</style>
