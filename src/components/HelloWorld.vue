<style lang="less">
	@import '../../static/css/com.less';
</style>
<template>
	<div>
		<Row>
			<Col span="12">col-12</Col>
			<Col span="12">col-12</Col>
		</Row>
		<br>
		<Row :gutter="16">
			<Col span="8">col-8</Col>
			<Col span="8">col-8</Col>
			<Col span="8">col-8</Col>
		</Row>
		<br>
		<Row>
			<Col span="6">col-6</Col>
			<Col span="6">col-6</Col>
			<Col span="6">col-6</Col>
			<Col span="6">col-6</Col>
		</Row>
		<br>
		<Row :gutter="48">
			<Col span="6">
			<div>col-6</div>
			</Col>
			<Col span="6">
			<div>col-6</div>
			</Col>
			<Col span="6">
			<div>col-6</div>
			</Col>
			<Col span="6">
			<div>col-6</div>
			</Col>
		</Row>
		<br>
		<Row type="flex">
			<Col span="6" order="4">1 | order-4</Col>
			<Col span="6" order="3">2 | order-3</Col>
			<Col span="6" order="2">3 | order-2</Col>
			<Col span="6" order="1">4 | order-1</Col>
		</Row>
	</div>
</template>
<script>
	export default {

	}
</script>