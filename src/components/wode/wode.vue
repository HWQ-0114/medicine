<template>
	<div>
		<mt-header title="账户设置">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		
			<section class="white">
				<div class="tou clearfix">
					<div class="tou-left">
						<img src="./images/tu01.png" alt="" />
					</div>
					<div class="tou-center">
						<p class="tou-center-firstP">13920484929</p>
						<p class="tou-center-secondP">三聚药业</p>
					</div>
					<div class="tou-right">
						<img src="./images/tu02.png" alt="" />
					</div>
				</div>
			</section>
		<router-link to="/infor">
			<section class="oUl-sect">
				<ul class="oUl">
					<li class="clearfix">
						<span><img src="./images/tu03.png" alt="" /></span>
						<em style="font-style:normal">个人信息</em>
						<b style="font-weight:normal">&gt;</b>
					</li>
				</ul>
			</section>
		</router-link>
		<router-link to="/focus">
			<section class="oUl-sect">
				<ul class="oUl">
					<li class="clearfix">
						<span><img src="./images/tu04.png" alt="" /></span>
						<em style="font-style:normal">我的关注</em>
						<b style="font-weight:normal">&gt;</b>
					</li>
				</ul>
			</section>
		</router-link>
		<router-link to="recommend">
			<section class="oUl-sect a">
				<ul class="oUl">
					<li class="clearfix">
						<span><img src="./images/tu05.png" alt="" /></span>
						<em style="font-style:normal">推荐药店</em>
						<b style="font-weight:normal">&gt;</b>
					</li>
				</ul>
			</section>
		</router-link>
		<router-link to="/request">
			<section class="oUl-sect">
				<ul class="oUl">
					<li class="clearfix">
						<span><img src="./images/tu06.png" alt="" /></span>
						<em style="font-style:normal">进药申请</em>
						<b style="font-weight:normal">&gt;</b>
					</li>
				</ul>
			</section>
		</router-link>	
			<section class="oUl-sect">
				<ul class="oUl">
					<li class="clearfix">
						<span><img src="./images/tu07.png" alt="" /></span>
						<em style="font-style:normal">设置</em>
						<b style="font-weight:normal">&gt;</b>
					</li>
				</ul>
			</section>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.white{
		background:#fff;
		padding:1rem 0;
		margin:1.5rem 0;
		border-top:0.1rem solid #E5E5E5;
		border-bottom:0.1rem solid #E5E5E5;
		.tou{
			width: 92%;
			margin:0 auto;
			.tou-left{
				float:left;
				img{
					width:6rem;
					height:6rem;
				}
			}
			.tou-center{
				float:left;
				margin-left:1rem;
				margin-top:1rem;
				.tou-center-firstP{
					color:#333333;
					font-size: 1.4rem;
				}
				.tou-center-secondP{
					color:#626368;
					font-size:1.3rem;
					margin-top:0.5rem;
				}
			}
			.tou-right{
				float:right;
				img{
					width:5rem;
					height:5rem;
					margin-top:0.5rem;
				}
			}
		}
	}
	.oUl-sect{
		background:#fff;
		padding:1rem 0 0.8rem;
		border-top:0.1rem solid #E5E5E5;
		.oUl{
			width: 92%;
			margin:0 auto;
			li{
				list-style:none;
				span{
					float:left;
					img{
						width:3rem;
						height:3rem;
					}
				}
				em{
					float:left;
					vertical-align: middle;
					margin-left:1rem;
					margin-top:0.5rem;
					font-size: 1.4rem;
					color:#646464;
				}
				b{
					float:right;
					font-size:2rem;
					color:#D1D1D1;
					margin-top:0.2rem;
				}
			}
		}
	}
	.a{
		border-bottom:0.1rem solid #E5E5E5;
		margin-bottom:1.5rem;
	}
</style>