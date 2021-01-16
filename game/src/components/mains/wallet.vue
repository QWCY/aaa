<template>
	<div class="homes">
		<headers titleText="我的錢包"></headers>
		<div class="tools">
			<div class="li" @click="tools(1)">
				<img src="../../assets/img/main/wallet_1.png" />
				<span>兌換</span>
			</div>
			<div class="li" @click="tools(2)">
				<img src="../../assets/img/main/wallet_2.png" />
				<span>充值</span>
			</div>
			<div class="li a" @click="tools(3)">
				<img src="../../assets/img/main/wallet_3.png" />
				<span>財務明細</span>
			</div>
			<div class="li a" @click="tools(4)">
				<img src="../../assets/img/main/wallet_4.png" />
				<span>我的推薦</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import {
		Icon,
		Popover,NavBar
	} from "vant";
	Vue.use(Icon).use(Popover).use(NavBar);
	
	import headers from '../module/header.vue'
	export default {
		name: "homes",
		components: {headers},
		data() {
			return {
				
			};
		},
		methods: {
			tools(val){
				if(val == 1){
					this.$router.push({
						path : '/exchange'
					})
				}else if(val == 2){
					this.$router.push({
						path : '/recharge'
					})
				}else if(val == 3){
					this.$router.push({
						path : '/financialDetails'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tools{
		width: 100%;
		padding: 0 0.42rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 0.42rem;
		.li{
			width: 2.6rem;
			img{
				width: 2.6rem;
				height: 2.6rem;
			}
			span{
				display: block;
				text-align: center;
				font-size: 0.46rem;
				color: #fff;
				font-weight: bold;
				text-shadow: 0px 0.04rem 0.04rem rgba(0, 0, 0, 0.4);
			}
		}
		.a{
			margin-top: 1.1rem;
		}
	}
</style>
