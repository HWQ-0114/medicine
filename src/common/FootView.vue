<template>
	<div id="fot">
		<mt-tabbar fixed>
		  <mt-tab-item id="tab1">
		    <router-link to="/shouye" id="footNav">
		    	<i class="icon iconfont icon-shouye"></i><br/>
		    	<span id="tubiao">首页</span>
		    </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="tab2">
		    <router-link to="/jiangtang" id="footNav">
		    	<i class="icon iconfont icon-dajiangtang"></i><br/>
		    	<span id="tubiao">讲堂</span>
		    </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="tab3">
		    <router-link to="/wode" id="footNav">
		    	<i class="icon iconfont icon-wode"></i><br/>
		    	<span id="tubiao">我的</span>
		    </router-link>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	
</script>
<style scoped lang="less">
	#footNav{
		text-decoration: none;
		color:#9c9da0;
		.iconfont{
			font-weight: bold;		}
		#tubiao{
			display: inline-block;
			margin-top:0.2rem;
		}
	}
	#footNav:hover{
		color:#2CA7D8;
	}
</style>

