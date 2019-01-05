<template>
	<div class="detailtabbar">
		<div class="btn">
			<input type="text" value="" placeholder="写评论..." class="inp" />
		</div>
		<div class="news">
			<svg-icon icon-class="wenzhangxiangqing_icon_dapinglun_default"></svg-icon>
		</div>
		<div class="share">
			<svg-icon icon-class="wenzhangxiangqing_icon_fenxiang_default"></svg-icon>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Detailtabbar',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="scoped">
	
@import '../../../styles/main.less';
.detailtabbar{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: @bg-color;
	display:flex;
	justify-content:space-around;
	align-items:center;
	.h(49);
	.btn{
		background:@header-bg-color;
		.w(239);
		.h(30);
		background:rgba(255,255,255,1);
		.bdradius(15);
		border:1px solid #ccc;
		box-sizing:border-box;
		.inp{
			.margin(0,15,0,15);
			display:inline-block;
			.w(209);
			.h(30);
			.fs(14);
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(177,176,194,1);
			.lh(30);
		}
	}
	.news{
		
	}
}
</style>
