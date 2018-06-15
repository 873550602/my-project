<template>
	<div class="my-title-box"><span class="text-symbol">#&nbsp;</span>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'myTitle',
	};
</script>
<style>
	.my-title-box {
		font-size: 1.5rem;
		text-align: left;
		padding: 8px;
	}
	
	.text-symbol {
		color: #17A7FA;
		font-size: 1.5rem;
	}
</style>