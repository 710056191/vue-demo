<template>
	<div class="idxmain"  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
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
			<!-- <router-link :to="{path:'/detail'+item.id,query:{id:item[index].id}}" -->
			<div class="main" v-for="item in list" :key="item.id" @click="GoToDetail(item)">
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
	import { InfiniteScroll  } from 'mint-ui';
	export default {
		name:'IdxMain',
		comments:{InfiniteScroll },
		data() {
			return {
				list:[],
				page:1,
				category:5,
				item:[]
			};
		},
		methods:{
			loadMore(){
				this.getDate();
				this.loading = true;
				  setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for (let i = 1; i <= 10; i++) {
					  this.list.push(last + i);
					}
					this.loading = false;
				  }, 2500);
			},
			getDate(){
				this.$axios.get('/api/yapi/article/alistpage/',{
					params:{
						category:this.category,
						page:this.page
					}
				})
				.then((res)=>{
					this.list=res.data.data;
					this.page++;
				})
				.catch((error)=>{
					console.log(error);
				})
			},
			GoToDetail(item){
				this.$emit('select',item);
			}
		},
		mounted(){
			this.getDate();
		}
	}
</script>

<style lang="less" scoped="scoped">
	
@import '../../../styles/main.less';

ul li{
	list-style: none;
}

.idxmain{
	height: auto;
	.margin(60,8,50,8);
	.top{
		.h(105);
		border-bottom: 1px solid #F2F2F2;
		.idxmainleft{
			.w(218);
			height: auto;
			.fs(15);
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(46,53,70,1);
			.lh(21);
			float: left;
			div{
				height: auto;
				p{
					white-space:pre-wrap;
					.w(218);
					height: auto;
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
			background:rgba(255,255,255,1);
		}
	}
	.main{
		.h(105);
		.idxmainleft{
			.w(218);
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
				.bdradius(5);
			}
		}
	}
}

</style>
