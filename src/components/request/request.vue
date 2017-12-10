<template>
	<div>
		<mt-header title="进药申请">
		  <router-link to="/" slot="left">
		    <p @click="run"><mt-button icon="back">微信</mt-button></p>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<section class="white-yun">
			<div class="top-bottom">
				<div class="top clearfix">
					<div class="top-left">
						<img src="./images/tu01.jpg" alt="" />
					</div>
					<div class="top-right">
						<p class="ganmao">白云山伤风感冒胶囊</p>
						<p>购买时间 : 2015-12-15　两个疗程</p>
						<p class="shuliang">药品疗程 : <button @click="ganmaojian">-</button><input type="text" v-model="ganmaonum"/><button @click="ganmaojia">+</button></p>
					</div>
				</div>
				<div class="bottom clearfix">
					<div class="bottom-left">
						总价 : <span>￥<em style="font-style:normal" v-text="ganmaoprice*ganmaonum"></em></span>
					</div>
					<div class="bottom-right">
						<router-link to="/yes">
							<b style="font-weight:normal">确认</b>
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<section class="white-yun">
			<div class="top-bottom">
				<div class="top clearfix">
					<div class="top-left">
						<img src="./images/tu01.jpg" alt="" />
					</div>
					<div class="top-right">
						<p class="ganmao">白云山伤风感冒胶囊</p>
						<p>购买时间 : 2015-12-15　两个疗程</p>
						<p class="shuliang">药品疗程 : <button @click="jian">-</button><input type="text" v-model="num"/><button @click="jia">+</button></p>
					</div>
				</div>
				<div class="bottom clearfix">
					<div class="bottom-left">
						总价 : <span>￥<em style="font-style:normal" v-text="price*num"></em></span>
					</div>
					<div class="bottom-right">
						<router-link to="/yes">
							<b style="font-weight:normal">确认</b>
						</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				ganmaoprice:100,
				ganmaonum:0,
				num:0,
				price:200
			}
		},
		methods:{
			ganmaojia:function(){
				this.ganmaonum++;
			},
			ganmaojian:function(){
				if(this.ganmaonum<=0){
					this.ganmaonum=0;
				}else{
					this.ganmaonum--;
				}
			},
			jia:function(){
				this.num++;
			},
			jian:function(){
				if(this.num<=0){
					this.num=0;
				}else{
					this.num--;
				}
			},
			run:function(){
				window.history.go(-1)
			}
		}
	}
</script>

<style scoped lang='less'>
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.white-yun{
		background:#fff;
		margin-top:1.5rem;
		padding-top:1rem;
		padding-bottom:1rem;
		border-top:0.1rem solid #E1E1E1;
		border-bottom:0.1rem solid #E1E1E1;
		.top-bottom{
			width:92%;
			margin:0 auto;
			.top{
				border-bottom:0.1rem solid #E1E1E1;
				padding-bottom:1rem;
				.top-left{
					float:left;
					img{
						width:9rem;
					}
				}
				.top-right{
					float:left;
					margin-left:1.5rem;
					.ganmao{
						font-size: 1.4rem;
						margin-bottom:1rem;
						color:#333333;
					}
					p{
						font-size: 1.2rem;
						color:#626368;
					}
					.shuliang{
						margin-top:1rem;
						input{
							width:2.5rem;
							text-align: center;
						}
						button{
							width:2rem;
							text-align: center;
						}
						color:#999999;
					}
				}
			}
			
			.bottom{
				margin-top:1rem;
				font-size: 1.2rem;
				.bottom-left{
					float:left;
					span{
						color:#FF6B3D;
					}
				}
				.bottom-right{
					float:right;
					b{
						display: inline-block;
						width:4rem;
						height:2rem;
						background:#F08C34;
						border-radius:1rem;
						color:#fff;
						text-align: center;
						line-height:2rem;
					}
				}
			}
		}
	}
</style>