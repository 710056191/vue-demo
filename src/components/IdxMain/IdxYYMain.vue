<template>
	<div class="idxmain">
		<div class="top">
			<div class="idxmainleft">
				<div><p>123fsd aagsd gfd w ata sete sdggdszsrqFSA FWG</p></div>
				<div>
					<ul>
						<li>巴比特</li>
						<li>评论</li>
						<li>分钟前</li>
					</ul>
				</div>
			</div>
			<div class="idxmainright">
				<img src="../../../build/logo.png" />
			</div>
		</div>
		<div class="banner">
			<img src="../../assets/me_wenzhangbanner_default.png" />
		</div>
		<div class="txt">
			<div class="main" v-for="item in list" :key="item.id">
				<div class="idxmainleft">
					<div><p>{{item.post_title}}</p></div>
					<div>
						<ul>
							<li>巴比特</li>
							<li>评论</li>
							<li>分钟前</li>
						</ul>
					</div>
				</div>
				<div class="idxmainright">
					<img :src="item.more.thumbnail" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'IdxYYMain',
		data() {
			return {
				list:[]
			};
		},
		methods:{
			getData(){
				//http://data.fk7h.com/yapi/article/alistpage/?category=98&page=1
				this.$axios.get('/api/yapi/article/alistpage',{
					category:98,
					page:1
				})
				.then((res)=>{
					console.log(res.data.data);
					this.list=res.data.data;
				})
				.catch((err)=>{
					console.log(err);
				})
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style lang="less" scoped="scoped">
@import '../../../styles/main.less';

.idxmain{
	height: auto;
	.margin(60,8,50,8);
	.top{
		.h(105);
		border-bottom: 1px solid #F2F2F2;
		.idxmainleft{
			.w(218);
			.h(42);
			.fs(15);
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(46,53,70,1);
			.lh(21);
			float: left;
			div{
				p{
					white-space:pre-wrap;
					.w(218);
					.h(42);
					.fs(15);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(46,53,70,1);
					.lh(21);
				}
				ul{
					.h(40);
					width: 100%;
					.margin(14,0,0,0);
					li{
						float: left;
						.margin(0,0,0,8);
						width:39px;
						.h(18);
						.fs(13);
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(155,155,155,1);
						.lh(18);
					}
				}
			}
		}
		.idxmainright{
			float: right;
			img{
				.w(112);
				.h(73);
			}
		}
	}
	.banner{
		.margin(17,0,18,0);
		img{
			.w(345);
			.h(131);
			margin:0 auto;
			text-align:center;
			background:rgba(255,255,255,1);
		}
	}
	.main{
		.h(105);
		.idxmainleft{
			.w(218);
			.h(42);
			.fs(15);
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(46,53,70,1);
			.lh(21);
			float: left;
			div{
				p{
					white-space:pre-wrap;
					.w(218);
					.h(42);
					.fs(15);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(46,53,70,1);
					.lh(21);
				}
				ul{
					.h(40);
					width: 100%;
					.margin(14,0,0,0);
					li{
						float: left;
						.margin(0,0,0,8);
						width:39px;
						.h(18);
						.fs(13);
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(155,155,155,1);
						.lh(18);
					}
				}
			}
		}
		.idxmainright{
			float: right;
			img{
				.w(112);
				.h(73);
			}
		}
	}
}
</style>
