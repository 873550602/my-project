<template>
	<div class="main">
		<div class="main-name">布局</div>
		<my-title>代码示例</my-title>
		<Row>
			<Col span="24" class="base-title">基本结构</Col>
		</Row>
		<div class="layout">
			<Layout class="layout">
				<Header class="layout-header">{{'Header' | upperCase}}</Header>
				<Content class="layout-content">Content</Content>
				<Footer class="layout-footer" >Footer</Footer>
			</Layout>

			<Layout class="layout">
				<Header class="layout-header">Header</Header>
				<Layout>
					<Sider class="layout-sider" hide-trigger>Sider</Sider>
					<Content class="layout-content">Content</Content>
				</Layout>
				<Footer class="layout-footer">Footer</Footer>
			</Layout>

			<Layout class="layout">
				<Header class="layout-header">Header</Header>
				<Layout>
					<Content class="layout-content">Content</Content>
					<Sider class="layout-sider" hide-trigger>Sider</Sider>
				</Layout>
				<Footer class="layout-footer">Footer</Footer>
			</Layout>

			<Layout class="layout">
				<Sider class="layout-sider" hide-trigger style="height: 253px;">Sider</Sider>
				<Layout>
					<Header class="layout-header">Header</Header>
					<Content class="layout-content">Content</Content>
					<Footer class="layout-footer">Footer</Footer>
				</Layout>
			</Layout>
		</div>
	</div>
</template>

<script>
	import myTitle from '@/components/customComponents/myTitle';
	export default {
		name: 'layout',
		data() {
			return {
			}
		},
		methods: {},
		computed: {},
		watch: {},
		components: {
			myTitle
		},
	}
</script>

<style>
	.base-title {
		background: none;
		border: 0;
		text-align: left;
		font-size: 1.1rem;
		color: #555;
	}
	.layout-header,
	.layout-footer{
		background: #7CBCE9;
	}
	.layout-content,
	.layout-sider{
		height: 120px;
		line-height: 120px;
	}
	
	.layout-content{
		background: #0f8de9;
	}
	.layout-sider{
		background: #3A9FE8;
	}
	.layout:not(:first-child){
		margin: 30px 0 0;
	}
</style>