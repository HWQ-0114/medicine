<template>
	<div class="gouder">
		<mt-header title="健康百科" fixed>
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<!--切换导航-->
		
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1"><span class="week">最新资讯</span></mt-tab-item>
		  <mt-tab-item id="2"><span class="week">健康专题</span></mt-tab-item>
		  <mt-tab-item id="3"><span class="week">个人收藏</span></mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1" >
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">【专题】　男性&女性</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date">2014-08-03</p>
		    		</div>
		    	</div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		    <div class="box">
		    	<p class="zhuanti">乙肝的共识和误区(上)</p>
		    	<div class="sex-tuzi clearfix">
		    		<div class="tu">
		    			<img src="./images/tu01.jpg" alt="" />
		    		</div>
		    		<div class="zi">
		    			<p>两性健康误区多，搜索殷勤太坑爹电视广告瞎忽悠，信谁？</p>
		    			<p class="date"><span id="day">专题</span></p>
		    		</div>
		    	</div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <div class="shoucang">
		    	<img src="./images/tu02.jpg" alt="" />
		    </div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				selected:'1'
			}
		}
	}
</script>

<style scoped lang="less">
	.shoucang{
		width:20rem;
		margin:5rem auto;
		img{
			width:20rem;
		}
	}
	.mint-tab-container-item{
		margin-bottom:1.5rem;
	}
	.mint-navbar{
		margin-top:4rem;
	}
	.mint-navbar .mint-tab-item{
		padding:0;
	}
	.week{
		display: inline-block;
		width:100%;
		padding:1.4rem 0;		
	}
	.gouder{
		overflow-y: scroll;
		width:100%;
		height:100%;
		position:fixed;
		left:0;
		top:0;
	}
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#F28C24;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom:none;
	}
	.mint-tab-container-item{
		margin-top:1.5rem;	
	}
	.box{
		background:#fff;
		padding:1rem;
		border-top:0.1rem solid #D4DADC;
		border-bottom:0.1rem solid #D4DADC;
		margin-bottom:1rem;
		.zhuanti{
			margin-bottom:0.5rem;
			font-size: 1.4rem;
			letter-spacing: 0.1rem;
		}
		.sex-tuzi{
			.tu{
				float:left;
				img{
					width:9rem;
				}
			}
			.zi{
				float:left;
				width:20rem;
				margin-left:1rem;
				font-size: 1.2rem;
				line-height:2rem;
				.date{
					float:right;
					margin-right:0.8rem;
					color:#8C8C8C;
				}
			}
		}
	}
	#day{
		padding:0rem 0.5rem;
		height:2.2rem;
		background:#F28C24;
		border-radius:0.3rem;
		text-align: center;
		color:#fff;
		line-height: 2.2rem;
	}
</style>