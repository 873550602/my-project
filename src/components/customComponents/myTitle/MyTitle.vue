<template>
	<h3><slot></slot></h3>
</template>
<script>
	export default {
		name: 'myTitle',
		props:{
			title:{
				type:String
			}
		}
	};
</script>
