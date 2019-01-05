<template>
	<div class="kuaixun">
		<div class="kxtop">
			<h1>快讯</h1>
			<svg-icon icon-class="nav_icon_xiaoxi_default"></svg-icon>
		</div>
		<div class="kxtime">
			<div class="date">今天2019年1月4日星期五</div>
		</div>
		<div class="kxmain">
			<div class="contain">
				<div class="kxmainleft">
					<p>16:35</p>
				</div>
				<div class="kxmainright">
					<p>道明证券认为, 尽管美联储主席包威尔向市场 发出了鸽派信号, 但黄金尚未准备突破其交易 区间。道明证券大宗商品策略主管周三表示, 市场需要看到美元回落, 或一些宏观经济数据 逊于预估, 金价才能显著受益, 并突破1,300美 元/蛊司水准。</p>
				</div>
			</div>
			<hr />
			<div class="contain">
				<div class="kxmainleft">
					<p>16:35</p>
				</div>
				<div class="kxmainright">
					<p>港股高开低走, 恒指翻绿, 恒生国指涨幅收窄 至不足0.1%。</p>
				</div>
			</div>
			<hr />
			<div class="contain">
				<div class="kxmainleft">
					<p>16:35</p>
				</div>
				<div class="kxmainright">
					<p>道明证券认为, 尽管美联储主席包威尔向市场 发出了鸽派信号, 但黄金尚未准备突破其交易 区间。道明证券大宗商品策略主管周三表示, 市场需要看到美元回落, 或一些宏观经济数据 逊于预估, 金价才能显著受益, 并突破1,300美 元/蛊司水准。</p>
				</div>
			</div>
			<hr />
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	
	import TabBar from './components/common/TabBar.vue';
	
	export default {
		name:'KuaiXun',
		components:{TabBar},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="scoped">
	
	@import '../styles/main.less';
	.kuaixun{
		width:100%;
		.kxtop{
			.margin(0,15,0,16);
			.h(44);
			text-align: center;
			display:flex;
			align-items:center;
			h1{
				flex:10;
				.h(24);
				.fs(17);
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(58,68,84,1);
				text-align: center;
			}
			svg{
				flex:1;
				.h(19);
				.w(19);
				
			}
		}
		.kxtime{
			.margin(6,0,6,0);
			.date{
				.w(144);
				.h(18);
				.fs(13);
				font-family:PingFangSC-Light;
				font-weight:300;
				color:rgba(177,176,194,1);
				.lh(18);
				.margin(0,0,0,12);
			}
		}
		.kxmain{
			.margin(21,12,16,15);
			height:auto;
			.contain{
				display:flex;
				justify-content: center;
				align-items:center;
				.margin(0,0,15,0);
				.kxmainleft{
					p{
						.w(30);
						.h(18);
						.fs(13);
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(177,176,194,1);
						.margin(0,19,0,0);
					}
				}
				.kxmainright{
					p{
						.w(295);
						height:auto;
						.fs(15);
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(0,0,0,1);
						.lh(21);
					}
				}
				
			}
			hr{
				.w(295);
				.margin(16,0,15,50);
				background:#F2F2F2;
				.h(1);
				border:none;
			}
		}
	}

</style>
