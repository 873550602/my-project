import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'

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