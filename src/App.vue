<template>
    <div class="app-container">
<!------------顶部 Header区域---------------->
	    <mt-header fixed title="哔哩哔哩干杯( ゜- ゜)つロ"></mt-header>


	<!------------中间的路由 router-view 区域---------------->

		<transition>
			<router-view></router-view>
		</transition>


<!------------底部 Tabbar区域---------------->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.app-container {
	padding-top: 40px;
	overflow-x: hidden;
}
/*切换动画效果*/

.v-enter{
	transform: translateX(100%);
	opacity: 0;
	
}
.v-leave-to {
	transform: translateX(-100%);
	opacity: 0;
	position: absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all .6s ease;
}
</style>