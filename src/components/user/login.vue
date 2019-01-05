<template>
	<div class="login">
		<div class="callback">
			<svg-icon icon-class="nav_icon_fanhui_default"></svg-icon>
		</div>
		<div class="logintitle">
			<h1>密码登录</h1>
		</div>
		<div class="form">
			<form method="post" class="layui-form" >
				<label>
					<p>+86</p><input name="username" placeholder="请输入手机号"  type="text" lay-verify="required" class="layui-input" >
				</label>
				<hr />
				<label>
					<p>密码</p><input name="password" lay-verify="required" placeholder="输入密码"  type="password" class="layui-input">
				</label>
				<hr />
				<input value="登录" class="loginbtn" lay-submit lay-filter="login" style="width:100%;" type="submit">
			</form>
		</div>
		<div class="lost">
			<ul>
				<li>忘记密码</li>
				<li>注册账号</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Login',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="scoped">
	
@import '../../../styles/main.less';
.login{
	.callback{
		.h(44);
		width:100%;
		svg{
			.margin(14,0,14,11);
		}
	}
	.logintitle{
		width: 100%;
		.h(25);
		.margin(56,0,80,0);
		h1{
			text-align: center;
			.w(64);
			.h(22);
			.fs(16);
			font-family:PingFangSC-Medium;
			font-weight:500;
			color:rgba(58,68,84,1);
			.lh(22);
			margin:0 auto;
		}
	}
	.form{
		.layui-form{
			.w(248);
			height:auto;
			background:rgba(255,255,255,1);
			margin:0 auto;
			display: flex;
			justify-content: center;
			flex-direction:column;
			hr{
				.w(180);
				.h(2);
				background:#4A4A4A;
				border:none;
				margin-right:0;
				.margin(6,0,21,50);
			}
			label{
				.w(248);
				.h(22);
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(58,68,84,1);
				display:flex;
				justify-content:space-between;
				p{
					.w(32);
					.h(22);
					.fs(16);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(58,68,84,1);
					.lh(22);
				}
				.layui-input{
					border: none;
					.w(180);
					.h(20);
					.fs(14);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(183,183,183,1);
					.lh(20);
					.margin(0,16,0,0);
				}
				
			}
			.loginbtn{
				.w(248);
				.h(38);
				background:rgba(206,206,206,1);
				.bdradius(22);
				border:none;
				.margin(55,0,13,0);
				.fs(16);
				.lh(22);
				color:#fff;
				font-family:PingFangSC-Regular;
			}
		}
	}
	.lost{
		margin:0 auto;
		.w(248);
		height:auto;
		ul{
			display:flex;
			justify-content:space-between;
			.margin(0,16,0,16);
			li{
				text-decoration: none;
				.fs(15);
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(0,120,255,1);
			}
		}
	}
}
</style>
