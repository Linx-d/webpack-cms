<template>
	<div>
<!------------轮播图------------>
		<mt-swipe :auto="3000">
		  <!--<mt-swipe-item v-for="item in lunbotuList" :key="item.url"><img :src="item.img" alt=""></mt-swipe-item>-->
		  
		
		  <mt-swipe-item><img src="../images/a8.png" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../images/a9.png" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../images/a10.jpg" alt=""></mt-swipe-item>	
		</mt-swipe>

<!------------九宫格改六宫格------------>
<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
                <img src="../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
                <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
                <img src="../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4"><a href="#">
                <img src="../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
		
	</div>
</template>

<script>
import { Toast } from "mint-ui";	

export default {
	data(){
		return {
			lunbotuList: []//保存轮播图的数组
		}
	},
	created(){
		//this.getLunbotu();
	},
	methods: {
		getLunbotu(){
			this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
				//console.log(result.body);
				if(result.body.status===0){
					this.lunbotuList = result.body.message;
				}else {
					Toast("加载录播图失败...");
				}
				
			});
		}
	}
}	
</script>

<style lang="scss" scoped>
.mint-swipe {
	height: 400px;
	.mint-swipe-item {
		&:nth-child(1) {
			background-color: hotpink;
		}
		&:nth-child(2) {
			background-color: lightpink;
		}
		&:nth-child(3) {
			background-color: lightgreen;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border: 0;
	.mui-table-view-cell {
		border: 0;
		/*这是主页的六宫格图片字体大小的样式 暂时关闭的样式，如果后期测试觉得大了则开启这个样式
		mui-media-body {
			font-size: 13px;
		}
		img {
			width: 60px;
			height: 60px;
		}
		*/
	}
}
</style>