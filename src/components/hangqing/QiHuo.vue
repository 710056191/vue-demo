<template>
	<div class="QiHuo">
		<div class="QiHuonav">
			<ul>
				<li>类型</li>
				<li>卖出</li>
				<li>涨幅价</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
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
	.QiHuo{
		.QiHuonav{
			width:100%;
			.h(30);
			background:rgba(255,255,255,1);
			ul{
				display: flex;
				justify-content: space-between;
				li{
					flex:1;
					.h(16);
					.fs(11);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(196,196,196,1);
					.lh(30);
					.margin(0,15,0,15);
				}
			}
		}
	}

</style>
