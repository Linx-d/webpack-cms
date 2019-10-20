//导入vue-router
import VueRouter from "vue-router"; 
//导入对应的路由组件
import HomeContainer from "./components/HomeContainer.vue";
import MemberContainer from "./components/MemberContainer.vue";
import ShopcarContainer from "./components/ShopcarContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";


//创建路由对象
var router = new VueRouter({
	routes: [
	{
		path: "/", redirect: "/home"
	},
	{
		path: "/home", component: HomeContainer
	},
	{
		path: "/member", component: MemberContainer
	},{
		path: "/shopcar", component: ShopcarContainer
	},{
		path: "/search", component: SearchContainer
	}
	],
	linkActiveClass: "mui-active" //覆盖默认的路由高亮的类，默认的类叫做router-link-active
});

export default router;