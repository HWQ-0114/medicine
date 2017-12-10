<template>
	<div>
		<mt-header title="医生档案">
		  <router-link to="/" slot="left">
		    <p @click="run"><mt-button icon="back">微信</mt-button></p>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<section class="oUl-sect">
			<ul class="oUl">
				<li class="clearfix">
					<span>头像</span>
					<div class="tuzi">
						<em style="font-style:normal"><img src="./images/tu01.png" alt="" /></em>
						<b style="font-weight:normal">&gt;</b>
					</div>
				</li>
			</ul>
		</section>
		<section class="oUl-sect-name"> 
			<ul class="oUl-name">
				<li class="clearfix">
					<span>姓名</span>
					<div class="name-tuzi">
						<em style="font-style:normal">张大大</em>
						<b style="font-weight:normal">&gt;</b>
					</div>
				</li>
			</ul>
		</section>
		<section class="oUl-sect-name yourName"> 
			<ul class="oUl-name">
				<li class="clearfix">
					<span>昵称</span>
					<div class="name-tuzi">
						<em style="font-style:normal">静雅居士</em>
						<b style="font-weight:normal">&gt;</b>
					</div>
				</li>
			</ul>
		</section>
		<section class="oUl-sect-name"> 
			<ul class="oUl-name">
				<li class="clearfix">
					<span>性别</span>
					<div class="name-tuzi">
						<em style="font-style:normal">男</em>
						<b style="font-weight:normal">&gt;</b>
					</div>
				</li>
			</ul>
		</section>
		<section class="oUl-sect-name"> 
			<ul class="oUl-name">
				<li class="clearfix">
					<span>出生年月</span>
					<div class="name-tuzi">
						<em style="font-style:normal">1989.12.12</em>
						<b style="font-weight:normal">&gt;</b>
					</div>
				</li>
			</ul>
		</section>
		<div class="keep">
			<span>保存</span>
		</div>
	</div>
</template>
<style scoped lang="less">
	.mint-header{
		margin-bottom:1.5rem;
	}
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.oUl-sect{
		background:#fff;
		padding:1rem 0 0.8rem;
		border-top:0.1rem solid #E5E5E5;
		.oUl{
			width: 92%;
			margin:0 auto;
			list-style:none;
			li{
				span{
					float:left;
					font-size: 1.4rem;
					margin-top:1.5rem;
					color:#333333;
				}
				.tuzi{
					float:right;
					em{
						float:left;
						margin-right:1rem;
						img{
							width:5rem;
							height:5rem;
						}
					}
					b{
						float:left;
						font-size: 2rem;
						color:#CACACA;
						margin-top:1.2rem;
					}
				}
			}
		}
	}
	.oUl-sect-name{
		background:#fff;
		padding:1rem 0;
		border-top:0.1rem solid #E5E5E5;
		.oUl-name{
			width: 92%;
			margin:0 auto;
			list-style: none;
			li{
				span{
					float:left;
					font-size: 1.4rem;
					margin-top: 0.4rem;
					color:#333333;
				}
				.name-tuzi{
					float:right;
					em{
						float:left;
						margin-right:1rem;
						font-size: 1.4rem;
						margin-top:0.4rem;
						color:#777777;
					}
					b{
						float:left;
						font-size: 2rem;
						color:#CACACA;
					}
				}
			}
		}
	}
	.yourName{
		margin-bottom:1.5rem;
	}
	.keep{
		width: 85%;
		margin:0 auto;
		background:#F08C34;
		padding:0.7rem;
		text-align: center;
		color:#fff;
		font-size: 1.4rem;
		border-radius:0.5rem;
		margin-top:2rem;
	}
</style>
<script>
	export default {
		methods:{
			run:function(){
				window.history.go(-1)
			}
		}
	}
</script>