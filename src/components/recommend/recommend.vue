<template>
	<div>
		<mt-header title="账户设置">
		  <router-link to="/" slot="left">
		    <p @click="run"><mt-button icon="back">微信</mt-button></p>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="box">
			<img src="./images/tu01.jpg" alt="" />
		</div>
		<div class="asked">
			<p>邀请码&nbsp;:&nbsp;<span>2345</span></p>
		</div>
		<div class="local">
			<p><span><img src="./images/tu02.png" alt="" /></span>推荐地址</p>
			<p class="net-link"><span>http://www.baidu.com</span></p>
			<p class="recommends">推荐</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			run:function(){
				window.history.go(-1)
			}
		}
	}
</script>

<style scoped lang="less">
	.box{
		width:20rem;
		margin:6rem auto 0;
		img{
			width:20rem;
		}
	}
	.asked{
		p{
			text-align:center;
			font-size: 1.4rem;
			margin-top:2rem;
		}
	}
	.local{
		margin-top:2rem;
		p{
			width:90%;
			margin:0 auto;
			font-size: 1.4rem;
			color:#999999;
			img{
				width:1.8rem;
				vertical-align: middle;
				margin-top:-0.3rem;
				margin-right:0.5rem;
			}
		}
		.net-link{
			width:90%;
			margin:0 auto;
			padding:0.7rem 0;
			background:#EEEEEE;
			border-radius:0.5rem;
			margin-top:1rem;
			span{
				margin-left:2rem;
				color:#118DF0;
				text-decoration: underline;
			}
		}
		.recommends{
			width:90%;
			color:#fff;
			background:#F08C34;
			padding:0.7rem 0;
			text-align: center;
			border-radius: 0.5rem;
			margin-top:2rem;
		}
	}
</style>