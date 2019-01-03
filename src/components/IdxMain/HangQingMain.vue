<template>
	<div class="hangqingmain">
		<div class="top">
			<h2>行情</h2>
		</div>
		<div class="banner">
			<ul>
				<li class="name">伦敦金</li>
				<li class="price">1216.550</li>
				<li class="gain">+4.47%</li>
			</ul>
			<ul>
				<li class="name">伦敦金</li>
				<li class="price">1216.550</li>
				<li class="gain">+4.47%</li>
			</ul>
			<ul>
				<li class="name">伦敦金</li>
				<li class="price">1216.550</li>
				<li class="gain">+4.47%</li>
			</ul>
		</div>
		<div class="main">
			<ul>
				<li>期货</li>
				<li>原油</li>
			</ul>
			<QiHuo></QiHuo>
		</div>
	</div>
</template>

<script>
	import YuanYou from '../hangqing/YuanYou.vue';
	import QiHuo from '../hangqing/QiHuo.vue';
	export default {
		name:'HangQingMain',
		components:{YuanYou,QiHuo},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	ul li{
		list-style: none;
	}
	.hangqingmain{
		.w(375);
		.h(667);
		background:rgba(245,248,251,1);
		.top{
			background: #fff;
			.h(44);
			width: 100%;
			.margin(0,0,10,0) ;
			h2{
				.w(34);
				.h(24);
				.fs(17);
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(58,68,84,1);
				.lh(44);
				text-align: center;
				margin: 0 auto;
			}
		}
		.banner{
			.w(351);
			.h(117);
			.bdradius(4);
			background:rgba(255,255,255,1);
			display: flex;
			justify-content: center;
			margin: 0 auto;
			ul{
				flex: 1;
				margin: auto;
				
				li{
					width: 100%;
					text-align: center;
				}
				.name{
					.h(18);
					.fs(13);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(74,74,74,1);
					.lh(18);
				}
				.price{
					.h(21);
					.fs(15);
					font-family:PingFangSC-Semibold;
					font-weight:600;
					color:rgba(0,0,0,1);
					.lh(21);
				}
				.gain{
					.h(20);
					.fs(14);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(0,200,115,1);
					.lh(20);
				}
			}
		}
		.main{
			background: #fff;
			.margin(10,0,0,0) ;
			ul{
				.h(40);
				width:100%;
				display: flex;
				justify-content: center;
				border-bottom: 1px solid #F2F2F2;
				li{
					flex: 1;
					.h(21);
					.fs(15);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(155,155,155,1);
					.lh(40);
					text-align: center;
				}
			}
		}
	}

</style>
