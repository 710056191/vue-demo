<template>
	<div class="detail">
		<mt-header title="文章详情" class="header">
			<router-link to="/" slot="left">
			<mt-button icon="back" class="button"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right" class="button"></mt-button>
		</mt-header>
		<div class="main">
			<div class="title">
				<h1>{{msg.post_title}}</h1>
			</div>
			<div class="mintitle">
				<ul>
					<li>期货专家</li>
					<li>0评论</li>
					<li>23分钟前</li>
				</ul>
			</div>
			<div v-html="msg.post_content_filtered" class="content">{{msg.post_content_filtered}}</div>
			<div class="comment">
				<div class="commenttxt">
					<ul>
						<li><img /></li>
						<li>用户名</li>
					</ul>
				</div>
			</div>
		</div>
		<Detailtabbar></Detailtabbar>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import Detailtabbar from './detail/Detailtabbar';
	export default {
		name:'Detail',
		components:{ Header,Detailtabbar },
		data() {
			return {
				msg:[],
				id:[]
			};
		},
		methods:{
			getData(){
				var data=window.localStorage.getItem('msg');
				this.msg=JSON.parse(data);
				console.log(this.msg);
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style lang="less" scoped="scoped">
@import '../../styles/main.less';
.detail{
	.header{
		background:@header-bg-color;
		.h(44);
		.fs(17);
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(58,68,84,1);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		.button{
			color: @sfs-color;
			font-weight: 700;
		}
	}
	.main{
		.margin(54,12,12,12);
		.title{
			h1{
				.w(334);
				height: auto;
				.fs(19);
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(46,53,70,1);
				.lh(26);
				text-align: center;
			}
		}
		.mintitle{
			.margin(12,0,19,0) ;
			ul{
				display:flex;
				justify-content: space-around;
				.w(160);
				li{
					width:auto;
					.h(18);
					.fs(13);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(155,155,155,1);
					.lh(18);
				}
			}
		}
		.content{
			.w(338);
			height:auto;
			.fs(16);
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(46,53,70,1);
			.lh(24);
			text-align: justify;
		}
	}
}
</style>
