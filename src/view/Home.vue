<style type="text/css">
	.router-link-active span,
	.router-link-active i{
		color: #2D8CF0;
	}
</style>
<template>
	<div class="layout">
		<Layout>
			<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
				<Menu active-name="" theme="dark" width="auto" :class="menuitemClasses">
					<router-link to="/grid">
						<MenuItem name="1-1">
						<Icon type="grid"></Icon>
						<span>Grid 栅格</span>
						</MenuItem>
					</router-link>
					<router-link to="/layout">
						<MenuItem name="1-2">
						<Icon type="ios-photos-outline"></Icon>
						<span>Layout 布局</span>
						</MenuItem>
					</router-link>
					<MenuItem name="1-3">
					<Icon type="android-color-palette"></Icon>
					<span>Color 色彩</span>
					</MenuItem>
				</Menu>
			</Sider>
			<Layout>
				<Header :style="{padding: 0}" class="layout-header-bar">
					<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
				</Header>
				<Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
					<router-view></router-view>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isCollapsed: false
			}
		},
		computed: {
			rotateIcon() {
				return [
					'menu-icon',
					this.isCollapsed ? 'rotate-icon' : ''
				];
			},
			menuitemClasses() {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				]
			}
		},
		methods: {
			collapsedSider() {
				this.$refs.side1.toggleCollapse();
			}
		}
	}
</script>