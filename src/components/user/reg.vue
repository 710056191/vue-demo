<template>
	<div class="reg">
		<div class="callback">
			<svg-icon icon-class="nav_icon_fanhui_default"></svg-icon>
		</div>
		<div class="regtitle">
			<h1>注册</h1>
		</div>
		<div class="form">
			<form method="post" class="layui-form" >
				<label>
					<p>+86</p><input name="username" placeholder="输入手机号"  type="text" lay-verify="required" class="layui-input" >
				</label>
				<label>
					<p>验证码</p>
					<label class="yanzhengma"><input name="username" placeholder="输入验证码"  type="text" lay-verify="required" class="inp" >
					<a href="#">获取验证码</a></label>
				</label>
				<label>
					<p>设置密码</p>
					<input name="password" lay-verify="required" placeholder="输入新密码"  type="password" class="layui-input">
				</label>
				<label>
					<input name="password" lay-verify="required" placeholder="确认密码"  type="password" class="layui-input pwd">
				</label>
				<div class="txt"><input name="" type="checkbox" class="xieyi" /><p>我已阅读并同意</p><a href="#">黄金期货操盘服务条款</a></div>
				<input value="登录" class="loginbtn" lay-submit lay-filter="login" style="width:100%;" type="submit">
			</form>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'Reg',
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="scoped">
	
@import '../../../styles/main.less';
.reg{
	.callback{
		.h(44);
		width:100%;
		svg{
			.margin(14,0,14,11);
		}
	}
	.regtitle{
		width: 100%;
		.h(25);
		.margin(56,0,58,0);
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
			justify-content: space-between;
			flex-direction:column;
			label{
				.w(248);
				.h(22);
				font-family:PingFangSC-Medium;
				font-weight:500;
				color:rgba(58,68,84,1);
				display:flex;
				justify-content:space-between;
				.margin(19,0,0,0);
				p{
					.w(74);
					.h(22);
					.fs(16);
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(58,68,84,1);
					.lh(22);
					text-align:left;
				}
				.layui-input{
					.w(180);
					.h(20);
					.fs(14);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(183,183,183,1);
					.lh(20);
					border-bottom: 2px solid #4A4A4A;
					.padding-bottom(6);
				}
				.yanzhengma{
					border-bottom: 2px solid #4A4A4A;
					margin:0;
					.w(180);
					.padding-bottom(6);
					.inp{
						height: auto;
						.w(100);
						.fs(14);
					}
					a{
						width:auto;
						.fs(14);
					}
				}
				.pwd{
					.margin(0,0,0,74);
				}
			}
			.txt{
				.w(248);
				.margin(19,0,0,0);
				display:flex;
				justify-content:center;
				.xieyi{
					.h(16);
					.w(16);
					border:none;
					.margin(2,8,2,0)
				}
				p{
					.w(98);
					.h(20);
					.fs(13);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(183,183,183,1);
					.lh(20);
				}
				a{
					.w(140);
					.h(20);
					.fs(13);
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(0,120,255,1);
					.lh(20);
				}
			}
			.loginbtn{
				.w(248);
				.h(38);
				background:rgba(206,206,206,1);
				.bdradius(22);
				border:none;
				.margin(50,0,13,0);
				.fs(16);
				.lh(22);
				color:#fff;
				font-family:PingFangSC-Regular;
			}
		}
	}
}
</style>
