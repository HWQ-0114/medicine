import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import ShouYe from '../components/shouye/shouye.vue';
import WoDe from '../components/wode/wode.vue';
import Information from '../components/information/information.vue';
import Focus from '../components/focus/focus.vue';
import JiangTang from '../components/jiangtang/jiangtang.vue';
import Recommend from '../components/recommend/recommend.vue';
import Request from '../components/request/request.vue';
import Yes from '../components/yes/yes.vue';
export default new Router({
  routes: [
    {
      path: '/',
      component: ShouYe
    },
    {
      path: '/shouye',
      component: ShouYe
    },
    {
      path: '/wode',
      component: WoDe
    },
    {
    	path:'/infor',
    	component: Information
    },
    {
    	path:'/focus',
    	component:Focus
    },
    {
    	path:'/jiangtang',
    	component:JiangTang
    },
    {
    	path:'/recommend',
    	component:Recommend
    },
    {
    	path:'/request',
    	component:Request
    },
    {
    	path:'/yes',
    	component:Yes
    }
  ]
})
