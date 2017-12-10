<template>
	<div class="gouder">
		<mt-header fixed title="销售记录">
		  <mt-button slot="right">
		  	<img src="./images/jiahao.png" alt="" class="jiahao"/>
		  </mt-button>
		</mt-header>
		<mt-swipe :auto="3000" class="lun">
		  <mt-swipe-item>
		  	<img src="./images/banner01.jpg" alt="" class="banner"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="./images/banner02.jpg" alt="" class="banner"/>
		  </mt-swipe-item>
		</mt-swipe>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1" :class="{'is-selected': isBlock}"><span class="week" @click="toggle(true)">本周</span></mt-tab-item>
		  <mt-tab-item id="2" :class="{'is-selected': !isBlock}"><span class="week" @click="toggle(!true)">历史</span></mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1" v-show="isBlock" >
		    <ul class="oUl">
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_11.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周四<span>2016.6.23</span></p>
		    			<p class="tiao"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span>30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周二<span>2016.6.21</span></p>
		    			<p class="tiao_third"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周一<span>2016.6.21</span></p>
		    			<p class="tiao_four"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2" v-show="!isBlock">
		    <ul class="oUl">
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周三<span>2016.6.22</span></p>
		    			<p class="tiao_second"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周二<span>2016.6.21</span></p>
		    			<p class="tiao_third"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    	<li class="clearfix">
		    		<div class="divLeft"><img src="./images/tu_hui_14.png" alt="" class="tu"/></div>
		    		<div class="divCenter">
		    			<p>周一<span>2016.6.21</span></p>
		    			<p class="tiao_four"></p>
		    		</div>
		    		<div class="divRight">
		    			<p><span id="num">30盒</span><em style="font-style:normal">&gt;</em></p>
		    		</div>
		    	</li>
		    </ul>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				selected:'',
				isBlock: true
			}
		},
		methods:{
			toggle:function(x){
				this.isBlock =x;
			}
		}
	}
</script>

<style scoped lang="less">
	.divLeft{
		float:left;
		margin-left:1rem;
	}
	.divCenter{
		float:left;
		margin-left:2rem;
		font-size:1.4rem;
		p{
			span{
				margin-left:1rem;
				font-size: 1.2rem;
				color:#aaaaaa;
			}
		}
		.tiao{
			width:6rem;
			height:0.7rem;
			border-radius:1.5rem;
			background:#ff6b3d;
			margin-top:1rem;
		}
	}
	.clearfix:after{
		content: "";
		display: table;
		clear: both;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom:1px solid #26a2ff;
		margin-bottom:0px;
	}
	.jiahao{
		width:1.5rem;
	}
	.lun{
		width:100%;
		height:15rem;
		margin-top:4rem;
	}
	.banner{
		width:100%;
		height:100%;
	}
	.week{
		font-size:1.4rem;
		display: inline-block;
		width:100%;
		padding:2.4rem 0;
	}
	.tu{
		width:4rem;
		height:100%;
	}
	.oUl{
		margin-top:1rem;
		margin-bottom:2rem;
		li{
			border-top:1px solid #e1e1e1;
			padding:1rem 0rem;
			background:#fff;
			list-style:none;
		}
		li:last-child{
			border-bottom:1px solid #e1e1e1;
		}
	}
	.tiao_second{
		width:12rem;
		height:0.7rem;
		border-radius:1.5rem;
		background:#cdcdcd;
		margin-top:1rem;
	}
	.tiao_third{
		width:10rem;
		height:0.7rem;
		border-radius:1.5rem;
		background:#cdcdcd;
		margin-top:1rem;
	}
	.tiao_four{
		width:16rem;
		height:0.7rem;
		border-radius:1.5rem;
		background:#cdcdcd;
		margin-top:1rem;
	}
	.divRight{
		float:right;
		margin-right:1rem;
		margin-top:0.5rem;
		p{
			span{
				vertical-align: 0.2rem;
				margin-right:0.5rem;
				font-size: 1.6rem;
				color:#f08c34;
			}
			em{
				font-size: 2.4rem;
				color:#d7d7d7;
			}
		}
	}
	#num{
		color:#666666;
	}
	.gouder{
		overflow-y:scroll ;
		width:100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
	}
	.mint-navbar .mint-tab-item{
		padding:0;
	}
</style>