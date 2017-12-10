<template>
	<div>
		<mt-header title="购买成功">
		  <router-link to="/" slot="left">
		    <p @click="run"><mt-button icon="back">微信</mt-button></p>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="success">
			<img src="./images/tu01.png" alt="" />
		</div>
		<div class="share">分享</div>
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
	.success{
		width:8rem;
		margin:0 auto;
		margin-top:8rem;
		img{
			width:8rem;
		}
	}
	.share{
		width: 90%;
		margin:0 auto;
		background:#F08C34;
		padding:0.8rem 0;
		text-align: center;
		border-radius:0.2rem;
		font-size: 1.4rem;
		color:#fff;
		margin-top:5rem;
	}
</style>