import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Grid from '@/view/Grid'
import Layout from '@/view/Layout'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
		children: [{
				path: '/grid',
				component: Grid
			},
			{
				path: '/layout',
				component: Layout
			},
			{
				path: '',
				redirect: '/grid'
			}
		]
	}]
})