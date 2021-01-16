<template>
	<div class="homes">
		<div class="viewContent">
			<van-swipe @change="onChange" class="swiperBox" :show-indicators="false"  ref="swipers">
				<van-swipe-item>
					<home></home>
				</van-swipe-item>
				<van-swipe-item>
					<invate></invate>
				</van-swipe-item>
				<van-swipe-item>
					<wallet></wallet>
				</van-swipe-item>
			</van-swipe>
		</div>
		<van-tabbar v-model="active" active-color="#FFFFFF" inactive-color="#6A79FF" :border="false" @change="tabbarChange">
			<van-tabbar-item>
				<span>首页</span>
				<template #icon="props">
					<img :src="props.active ? icon.active1 : icon.inactive1" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item>
				<span>推荐好友</span>
				<template #icon="props">
					<img :src="props.active ? icon.active2 : icon.inactive2" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item>
				<span>我的钱包</span>
				<template #icon="props">
					<img :src="props.active ? icon.active3 : icon.inactive3" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import Vue from "vue";
	import {
		Tabbar,
		TabbarItem,
		Toast,
		Notify,
		Swipe, SwipeItem
	} from "vant";
	Vue.use(Tabbar).use(TabbarItem).use(Notify).use(Swipe).use(SwipeItem);

	import Bus from "@/components/bus.js";
	import home from '../components/mains/home.vue'
	import invate from '../components/mains/invate.vue'
	import wallet from '../components/mains/wallet.vue'
	
	export default {
		name: "homes",
		components: {
			home,invate,wallet
		},
		data() {
			return {
				active: 0,
				icon: {
					active1: require('../assets/img/tabbar/tabbar_1_active.png'),
					inactive1: require('../assets/img/tabbar/tabbar_1.png'),
					active2: require('../assets/img/tabbar/tabbar_2_active.png'),
					inactive2: require('../assets/img/tabbar/tabbar_2.png'),
					active3: require('../assets/img/tabbar/tabbar_3_active.png'),
					inactive3: require('../assets/img/tabbar/tabbar_3.png'),
				}
			};
		},
		created() {
			this.active = this.$store.state.homeViewActive;
		},
		computed: {},
		mounted() {
			this.$refs.swipers.swipeTo(this.$store.state.homeViewActive,{immediate:true})
		},
		watch: {
			active(newval, oldval) {
				if (newval > oldval) {
					this.transitionName = "vux-pop-in";
				} else {
					this.transitionName = "vux-pop-out";
				}
				this.active = newval;
				this.activeAfter = newval;
				this.$store.commit("homeViewActiveChange", newval);
			}
		},
		methods: {
			onChange(e){
				this.active = e;
			},
			tabbarChange(e){
				this.active = e;
				this.$refs.swipers.swipeTo(e)
			}
		}
	};
</script>

<style lang="scss" scoped="scoped">
	div {
		box-sizing: border-box;
	}

	.homes {
		height: 100%;
		color: #fff;
		font-size: 0.24rem;
	}

	.viewContent {
		width: 100%;
		height: calc(100vh - 1.76rem);
		overflow-y: scroll;
	}

	/deep/.van-tabbar,
	/deep/.van-tabbar-item--active {
		background: linear-gradient(180deg, #4B31D0 0%, #261772 100%);
	}
	/deep/.van-tabbar-item__icon img{
		width: 0.8rem;
		height: 0.8rem;
	}
	/deep/.van-tabbar{
		height: 1.76rem;
		border-top: 0.09rem solid #A594FF;
	}
	// /deep/.van-tabbar{
	// 	padding-bottom: constant(safe-area-inset-bottom);
	// }
	.swiperBox{
		height: 100%;
	}
</style>
