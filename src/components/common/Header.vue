<template>
	<div class="idxheader">
		<div class="nav">
			<div class="navleft">
				<div class="xiaoxi">
					<svg-icon icon-class="nav_icon_xiaoxi_default"></svg-icon>
				</div>
			</div>
			<div class="navbutton">
				<ul>
					<li>期货</li>
					<li>原油</li>
				</ul>
			</div>
			<div class="navsearch">
				<svg-icon icon-class="nav_icon_sousuo_default"></svg-icon>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Header',
		
	}
</script>

<style lang="less" scoped="scoped">
@import '../../../styles/main.less';
	li{
		list-style: none;
	}
	.active2{
		background: #78B5CC;
	}
	.idxheader{
		position: fixed;
		top: 0;
		left: 0;
		.w(375);
		.h(44);
		background:rgba(255,255,255,1);
		.nav{
			.margin(8,8,8,8);
			height: 100%;
			display: flex;
			justify-content: space-between;
			.navleft{
				.w(19);
				height: 100%;
				.xiaoxi{
					.h(44);
					svg{
						.lh(44);
						.margin(13,0,13,0);
					}
				}
			}
			.navbutton{
				ul{
					.margin(8,0,8,0) ;
					.w(120);
					.h(28);
					background:rgba(255,255,255,1);
					.bdradius(14);
					border:1px solid rgba(120,181,204,1);
					display:flex;
					justify-content: center;
					align-items: center;
					li{
						.w(60);
						.h(28);
						.bdradius(14);
						flex: 1;
						text-align: center;
						.lh(28);
						.fs(15);
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(175,181,187,1);
					}
				}
			}
			.navsearch{
				.w(19);
				height: 100%;
				svg{
					.lh(44);
					.margin(13,0,13,0);
				}
			}
		}
	}
</style>
