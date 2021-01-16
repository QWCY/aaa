<template>
	<div class="recharge">
		<headers titleText="充值"></headers>
		<div class="integral">
			<div class="num">3653</div>
			<div class="jf">
				<img src="../../assets/img/main/xx.png" /> 我的積分
			</div>
		</div>
		<div class="input_box">
			<input placeholder="請填寫需要充值的ETH數量" />
		</div>
		<div class="info_box">
			<div class="info_group">我的ETH：<span>6.334233</span></div>
			<div class="info_group">
				比例：<span>1</span> 積分 = <span>0.001233</span> ETH
			</div>
		</div>
		<div class="rec_box">
			<div class="lan_btn">確認充值</div>
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
	
	import headers from '../../components/module/header.vue'
	export default {
		name: "homes",
		components: {headers},
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.integral{
		padding-top: 1.2rem;
		.num{
			font-size: 0.44rem;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}
		.jf{
			text-align: center;
			color: #666666;
			font-size: 0.24rem;
			margin-top: 0.2rem;
			img{
				width: 0.24rem;
				height: 0.24rem;
			}
		}
	}
	.input_box{
		width: 6.54rem;
		height: 1.12rem;
		border-radius: 0.5rem;
		border: 0.02rem solid #6A79FF;
		margin: 0 auto;
		margin-top: 1.8rem;
		background: #000038;
		display: flex;
		overflow: hidden;
		input{
			flex: 1;
			background: rgba(0,0,0,0);
			outline: none;
			border: none;
			text-align: center;
			color: #fff;
		}
		input::-webkit-input-placeholder {
			color: #6A79FF;
		}
	}
	.info_box{
		margin-top: 0.4rem;
		.info_group{
			font-size: 0.24rem;
			text-align: center;
			color: #819EFF;
			margin-top: 0.24rem;
			span{
				color: #fff;
			}
		}
	}
	.rec_box{
		position: fixed;
		bottom: 0;
		left: 0;
		background: url(../../assets/img/main/rec_back.png) no-repeat;
		background-size: 100% auto;
		width: 100%;
		height: 4.4rem;
		padding-top: 1.24rem;
	}
</style>
