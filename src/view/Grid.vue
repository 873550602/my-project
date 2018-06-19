<template>
	<div class="main">
		<div class="main-name">栅格</div>
		<my-title>代码示例</my-title>
		<Row>
			<Col span="24" class="base-title">基础用法</Col>
		</Row>
		<Row>
			<Col span="12">col-12</Col>
			<Col span="12">col-12</Col>
		</Row>
		<br>
		<Row>
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
		<Row>
			<Col span="24" class="base-title">区间间隔</Col>
		</Row>
		<Row :gutter="24">
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
		<Row>
			<Col span="24" class="base-title">栅格顺序</Col>
		</Row>
		<Row type="flex">
			<Col span="6" order="4">1 | order-4</Col>
			<Col span="6" order="3">2 | order-3</Col>
			<Col span="6" order="2">3 | order-2</Col>
			<Col span="6" order="1">4 | order-1</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">栅格排序</Col>
		</Row>
		<Row>
			<Col span="18" push="6">col-18 | push-6</Col>
			<Col span="6" pull="18">col-6 | pull-18</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">左右偏移</Col>
		</Row>
		<Row>
			<Col span="8">col-8</Col>
			<Col span="8" offset="8">col-8 | offset-8</Col>
		</Row>
		<br>
		<Row>
			<Col span="6" offset="8">col-6 | offset-8</Col>
			<Col span="6" offset="4">col-6 | offset-4</Col>
		</Row>
		<br>
		<Row>
			<Col span="12" offset="8">col-12 | offset-8</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">子元素向左排列</Col>
		</Row>
		<Row type="flex" justify="start" class="code-row-bg">
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">子元素向右排列</Col>
		</Row>
		<Row type="flex" justify="end" class="code-row-bg">
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">子元素居中排列</Col>
		</Row>
		<Row type="flex" justify="center" class="code-row-bg">
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
		</Row>
		<br>
		<Row>
			<Col span="24" class="base-title">子元素等宽排列</Col>
		</Row>
		<Row type="flex" justify="space-between" class="code-row-bg">
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">子元素分散排列</Col>
		</Row>
		<Row type="flex" justify="space-around" class="code-row-bg">
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
			<Col span="4">col-4</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">顶部对齐</Col>
		</Row>
		<Row type="flex" justify="center" align="top" class="code-row-bg">
			<Col span="4">
			<p style="height: 80px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 30px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 100px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 60px">col-4</p>
			</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">底部对齐</Col>
		</Row>
		<Row type="flex" justify="center" align="bottom" class="code-row-bg">
			<Col span="4">
			<p style="height: 80px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 30px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 100px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 60px">col-4</p>
			</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">居中对齐</Col>
		</Row>
		<Row type="flex" justify="center" align="middle" class="code-row-bg">
			<Col span="4">
			<p style="height: 80px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 30px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 100px">col-4</p>
			</Col>
			<Col span="4">
			<p style="height: 60px">col-4</p>
			</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">响应式布局</Col>
		</Row>
		<Row>
			<Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
			<Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
			<Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
		</Row>
		<Row>
			<Col span="24" class="base-title">其它属性的响应式</Col>
		</Row>
		<Row>
			<Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
			<Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
			<Col v-highlight :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
		</Row>
	</div>
</template>

<script>
	import myTitle from '@/components/customComponents/myTitle'
	export default {
		name: 'grid',
		data() {
			return {}
		},
		methods: {},
		computed: {},
		watch: {},
		components: {
			myTitle
		},
		directives:{//局部指令
			highlight:{
				inserted(el){
					el.style.color = '#fdc97b';
				}
			}
		},
		beforeCreate() {},
		created() {
			
		},
		beforeMount() {},
		mounted() {
			
		},
		beforeUpdate() {
			
		},
		updated() {},
		beforeDestroy() {
			this.$store.commit('say');
		},
		destroyed() {}
	}
</script>

<style>
	.ivu-col {
		background-clip: content-box;
	}
	
	.base-title {
		background: none;
		border: 0;
		text-align: left;
		font-size: 1.1rem;
		color: #555;
	}
</style>