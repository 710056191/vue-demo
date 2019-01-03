<template>
  <div class="idx">
		<Header></Header>
		<IdxMain></IdxMain>
		<TabBar></TabBar>
  </div>
</template>
<script>
import Header from './components/common/Header.vue';
import TabBar from './components/common/TabBar.vue';
import IdxMain from './components/IdxMain/IdxMain.vue';
export default {
	name: 'Idx',
	components:{Header,TabBar,IdxMain},
	data () {
		return {
		  show:true,
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
