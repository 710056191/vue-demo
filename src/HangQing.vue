<template>
	<div class="HangQing">
		<HangQingMain></HangQingMain>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import TabBar from './components/common/TabBar.vue';
	import HangQingMain from './components/IdxMain/HangQingMain'
	export default {
		components:{TabBar,HangQingMain},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
