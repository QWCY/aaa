<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view />
		</transition>
	</div>
</template>

<script>
	import Vue from "vue";
	import {
		Tabbar,
		TabbarItem,
		Toast,
		Notify,
		Dialog
	} from "vant";
	Vue.use(Tabbar).use(TabbarItem).use(Notify).use(Dialog);
	import store from './store.js'
	import {
		wgxRaiseInit
	} from '@/request/api'

	export default {
		name: 'App',
		components: {},
		data() {
			return {
				transitionName: "vux-pop-out"
			}
		},
		computed: {
			// 窗口宽度
			winWidth: function winWidth() {
				return window.innerWidth;
			},
			// 窗口高度
			winHeight: function winHeight() {
				return window.innerHeight;
			},
		},
		created() {
			document.body.removeChild(document.getElementById('Loading'));

			let _this = this;
			if (document.body.clientWidth > 750) {
				this.mediaChange(375);
			} else {
				this.mediaChange(this.winWidth);
			}
			window.onresize = function() {
				if (document.body.clientWidth > 750) {
					_this.mediaChange(375);
				} else {
					_this.mediaChange(_this.winWidth);
				}
			}
		},
		methods: {
			mediaChange(width) {
				let mediafontSize = width / (750 / 100);
				let mediaHtml = document.querySelector('html');

				mediaHtml.style.fontSize = mediafontSize + 'px';
			}
		},
		mounted() {
			function getQueryString(name) {
				let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				let url = window.location.hash.split('?')[1].match(reg);
				// console.log(url)
				if (url != null) {
					return decodeURI(url[2]) //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码。
				} else {
					return null
				}
			}

			let _this = this;
			//非imtoken钱包
			if (!window.imToken) {
				Dialog.alert({
					title: 'WGLS',
					message: '请在IMTOKEN钱包中打开',
				}).then(() => {
					// on close
				});
				return;
			}
			let data = {}
			if(_this.$route.query.superAddress){
				data = {
					address : _this.$cookies.get('userAddress'),
					inviAddress : _this.$route.query.superAddress
				}
			}else{
				data = {
					address : _this.$cookies.get('userAddress')
				}
			}
			wgxRaiseInit(data).then((res)=>{
				_this.$store.commit('initInfoChange',res.data.map);
			}).catch((err)=>{
				console.error(err);
			})
		},
		watch: {
			'$route'(to, from) {
				if (to.meta.index < from.meta.index) {
					this.transitionName = 'vux-pop-out'
				} else {
					this.transitionName = 'vux-pop-in'
				}
			}
		}

	}
</script>

<style lang="scss">
	@media only screen and (min-width: 750px) {
		#app {
			max-width: 375px;
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
		}

		.navBarTopFixed,
		.navBarTop .van-nav-bar,
		.selTopTab {
			max-width: 375px;
		}
	}

	body,
	html,
	#app {
		padding: 0;
		margin: 0 auto;
		height: 100%;
		position: relative;
		overflow-x: hidden;
		background-image: url(./assets/img/back_img.png);
		background-size: 1.5rem auto;
	}

	body {
		font-size: 14px;
	}

	.fwbHtml {
		padding: 0.2rem;

		p {
			margin: 10px 0;
		}
	}

	//页面切换动画
	.vux-pop-out-enter-active,
	.vux-pop-out-leave-active,
	.vux-pop-in-enter-active,
	.vux-pop-in-leave-active {
		will-change: transform;
		transition: all 400ms;
		width: 100%;
		height: 100%;
		top: 0;
		position: absolute;
		backface-visibility: hidden;
		perspective: 1000;
	}

	.vux-pop-out-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}

	.vux-pop-out-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.vux-pop-in-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}

	.vux-pop-in-leave-active {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	div{
		box-sizing: border-box;
	}
	.no_data{
		text-align: center;
		color: #666;
		font-size: 0.26rem;
		padding: 0.24rem 0;
	}
	.lan_btn{
		background: url(assets/img/main/btn_back.png) no-repeat;
		background-size: 100% 100%;
		height: 1.22rem;
		width: 5.7rem;
		margin: 0 auto;
		text-align: center;
		line-height: 1.1rem;
		color: #fff;
		font-weight: bold;
		font-size: 0.28rem;
	}
</style>
