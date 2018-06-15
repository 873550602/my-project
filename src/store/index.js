import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		message:'hello world'
	},
	mutations:{
		say(){
			alert(this.state.message);
		}
	},
	actions:{},
	modules:{}
})

export default store;
