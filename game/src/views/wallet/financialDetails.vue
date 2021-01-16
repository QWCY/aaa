<template>
    <div class="financialDetails">
		<headers titleText="財務明細"></headers>
		<div class="top">
			<span>數量</span>
			<span>時間</span>
		</div>
		<div class="group" v-for="i in 20">
			<div class="left">
				<span class="red">充值</span> 0.00000532 ETH
			</div>
			<div class="right">
				2021/01/02 12:12
			</div>
		</div>
    </div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import headers from '../../components/module/header.vue'
	import {
		Icon,Popup 
	} from "vant";
	Vue.use(Icon).use(Popup);
	
	export default {
		name: "financialDetails",
		components: {headers},
		data() {
			return {
				
			};
        },
		computed:{
			
		},
        props:{
			
        },
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.top{
		display: flex;
		justify-content: space-between;
		width: 6.54rem;
		margin: 0 auto;
		margin-top: 0.2rem;
		span{
			color: #819EFF;
			font-size: 0.22rem;
		}
	}
	.group{
		display: flex;
		justify-content: space-between;
		width: 6.54rem;
		margin: 0 auto;
		height: 1rem;
		line-height: 1rem;
		color: #fff;
		font-size: 0.26rem;
		border-bottom: 0.01rem solid #312E9E;
		.red{
			color: #FF8B8B;
		}
		.blue{
			color: #819EFF;
		}
	}
</style>