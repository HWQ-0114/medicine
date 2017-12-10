<template>
	<div>
		<mt-header title="我的关注">
		  <router-link to="/" slot="left">
		    <p @click="run"><mt-button icon="back">微信</mt-button></p>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<section class="cont">
			<div class="cont-div clearfix">
				<div class="cont-left">
					<img src="./images/tu01.jpg" alt="" />
				</div>
				<div class="cont-right">
					<h3>老吃太饱真会撑出十种甲方姜</h3>
					<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出...<span>2015.05.01</span></p>
				</div>
			</div>
		</section>
		<section class="cont">
			<div class="cont-div clearfix">
				<div class="cont-left">
					<img src="./images/tu02.jpg" alt="" />
				</div>
				<div class="cont-right">
					<h3>老吃太饱真会撑出十种甲方姜</h3>
					<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出...<span>2015.05.01</span></p>
				</div>
			</div>
		</section>
		<section class="cont">
			<div class="cont-div clearfix">
				<div class="cont-left">
					<img src="./images/tu03.jpg" alt="" />
				</div>
				<div class="cont-right">
					<h3>老吃太饱真会撑出十种甲方姜</h3>
					<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出...<span>2015.05.01</span></p>
				</div>
			</div>
		</section>
		<section class="cont">
			<div class="cont-div clearfix">
				<div class="cont-left">
					<img src="./images/tu04.jpg" alt="" />
				</div>
				<div class="cont-right">
					<h3>老吃太饱真会撑出十种甲方姜</h3>
					<p>老吃太饱真会撑出十种甲方姜老吃太饱真会撑出...<span>2015.05.01</span></p>
				</div>
			</div>
		</section>
	</div>
</template>
<style scoped lang="less">
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.mint-header{
		margin-bottom:1.5rem;
	}
	.cont{
		background:#fff;
		padding:0.7rem 1rem;
		margin-bottom:1rem;
		border-top:0.1rem solid #E1E1E1;
		border-bottom:0.1rem solid #E1E1E1;
		.cont-left{
			float:left;
			img{
				width:9rem;
			}
		}
		.cont-right{
			width:65%;
			float:left;
			margin-left:1rem;
			h3{
				margin:0.3rem 0rem 0.5rem;
				font-size: 1.4rem;
			}
			p{
				line-height:1.8rem;
				font-size: 1.1rem;
				color:#898A8E;
				span{
					float:right;
				}
			}
		}
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