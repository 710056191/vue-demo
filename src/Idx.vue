<template>
  <div class="idx">
		<Header></Header>
		<IdxMain @select="goDetail"></IdxMain>
		<TabBar></TabBar>
  </div>
</template>
<script>
import Header from './components/common/Header.vue';
import TabBar from './components/common/TabBar.vue';
import IdxMain from './components/IdxMain/IdxMain.vue';
import IdxYYMain from './components/IdxMain/IdxYYMain.vue';
export default {
	name: 'Idx',
	components:{Header,TabBar,IdxMain,IdxYYMain},
	data () {
		return {
		}
	},
	methods:{
		goDetail(item){
			window.localStorage.setItem('msg',JSON.stringify(item));
			this.$router.push({
				path:`/detail/${item.id}`,
				params:{itm:item}
			})
		}
	}
	
}
</script>
<style lang="less" scoped="scoped">
	@import '../styles/main.less';
	// @import '../../styles/sass/idx.scss';
.idx{
	position: relative;
	}
</style>
