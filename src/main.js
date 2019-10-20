//入口文件
//导入Vue
import Vue from "vue";
//1.1 导入路由的包
import VueRouter from "vue-router";
//1.2在Vue上安装路由
Vue.use(VueRouter);
//1.3导入自定义路由组件router.js
import router from "./router.js";


//导入vue-resource包
import VueResource from "vue-resource";
//安装 vue-resource
Vue.use(VueResource);

//导入App组件
import app from "./App.vue";

//按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from "mint-ui";
//导入mint-ui组件的样式
import "mint-ui/lib/style.css"
//在Vue上安装组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui样式
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

var vm = new Vue({
	el: "#app",
	data: {},
	methods: {},
	render: c=>c(app),
	router   //1.4将router组件(路由对象)挂载到vm实例上
})