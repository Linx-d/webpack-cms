//入口文件
//导入Vue
import Vue from "vue";

//导入App组件
import app from "./App.vue";

//按需导入mint-ui组件
import {Header} from "mint-ui";
//导入mint-ui组件的样式
import "mint-ui/lib/style.css"
//在Vue上安装组件
Vue.component(Header.name, Header);

//导入mui样式
import "./lib/mui/css/mui.min.css"

var vm = new Vue({
	el: "#app",
	data: {},
	methods: {},
	render: c=>c(app)
})