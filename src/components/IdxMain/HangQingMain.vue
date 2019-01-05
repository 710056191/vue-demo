<template>
	<div class="hangqingmain">
		<div class="top">
			<h2>行情</h2>
		</div>
		<div class="banner">
			<ul v-for="item in list" :key="item.symbol">
				<li class="name">{{item.name}}</li>
				<li class="price">{{item.ask}}</li>
				<li class="gain">{{item.pricechange}}</li>
			</ul>
			
		</div>
		<div class="main">
			<ul>
				<li v-for="(nav,index) in nav" :key="index"><p :class="sel===nav?'selected':'unselected'">{{nav}}</p></li>
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
				nav:['期货','原油'],
				sel:'期货',
				list:[]
			};
		},
		methods:{
			getList(){
				//http://data.fk7h.com/yapi/Finance/gold_list?page=1&number=10&asc=0&sort=trade
				this.$axios.get('/api/yapi/Finance/gold_list',{
					page:1,
					number:10,
					asc:0,
					sort:'trade'
				})
				.then((res)=>{
					console.log(res.data);
					this.list=res.data;
				})
				.catch((err)=>{
					console.log(err);
				})
			}
		},
		mounted(){
			this.getList();
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	ul li{
		list-style: none;
	}
	.selected{
		color: @sfs-color;
		border-bottom: 1px solid #78B5CC;
	}
	.unselected{
		color:@fs-color;
		border:none;
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
					p{
						.h(40);
						.w(30);
						.fs(15);
						font-family:PingFangSC-Medium;
						font-weight:500;
						.lh(40);
						text-align: center;
						margin: 0 auto;
					}
					
				}
			}
		}
	}

</style>
