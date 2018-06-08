<template>
	<div id="app-2" v-if="seen">
		<span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
		<ol>
			<li v-for="todo in todos">
				{{ todo.text }}
			</li>
		</ol>
		<p>{{ message }}</p>
		<button v-on:click="reverseMessage">逆转消息</button>
		 <p>Computed reversed message: "{{ reversedMessagexx }}"</p>
		<input class="message" v-model="message">
		<my-title>123456</my-title>
	</div>
</template>

<script>
	import myTitle from './customComponents/myTitle'
	export default {
		name: 'grid',
		data() {
			return {
				message: '页面加载于 ' + new Date().toLocaleString(),
				seen: true,
				todos: [{
						text: '学习 JavaScript'
					},
					{
						text: '学习 Vue'
					},
					{
						text: '整个牛项目'
					}
				]
			}
		},
		methods: {
			reverseMessage() {
				this.message = this.message.split('').reverse().join('');
			}
		},
		computed:{
			reversedMessagexx(){
				return this.message = this.message.slice(0,5);
			}
		},	
		components:{
			myTitle
		},
		beforeCreate(){
			console.log('beforeCreate...');
			console.log('messege='+this.message);
		},
		created(){
			console.log('created...');
			console.log('messege='+this.message);
		},
		beforeMount(){
			console.log('beforeMount...');
			console.log('app-2='+document.getElementById("app-2"));
		},
		mounted(){
			console.log('mounted...');
			console.log('app-2='+document.getElementById("app-2"));
		},
		beforeUpdate(){
			console.log('beforeUpdate...');
			console.log('input message='+document.querySelector('.message').value);
		},
		updated(){
			console.log('updated...');
			console.log('input message='+document.querySelector('.message').value);
		},
		beforeDestroy(){
			console.log('beforeDestroy...');
			console.log('message='+this.message);
			console.log('input message='+document.querySelector('.message').value);
		},
		destroyed(){
			console.log('destroyed...');
			console.log('message='+this.message);
			console.log('input message='+document.querySelector('.message').value);
		}
	}
</script>

<style>

</style>