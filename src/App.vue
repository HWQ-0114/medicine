<template>
	<div>
	  <router-view></router-view>
	  <FootView></FootView>
	</div>
</template>

<script>
import FootView from './common/FootView.vue';
export default {
  components:{
  	FootView
  }
}
</script>

<style>
	
</style>
