<template>
	<div class="box">
		<div class="headContent">
			<div class="left" @click="returnLeft()">
				<img src="../../assets/img/eth_logo.png" />
			</div>
			<div class="center">
				<span v-text="titleText"></span>
			</div>
			<div class="right">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import {
		Icon,
		Popover
	} from "vant";
	Vue.use(Icon).use(Popover);

	export default {
		name: "headContent",
		components: {},
		props:{
			titleText : String
		},
		data() {
			return {
			};
		},
		methods: {
			returnLeft(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 1.12rem;
	}
	.headContent{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 1.12rem;
		width: 7.5rem;
		position: fixed;
		right: 0;
		top: 0;
		background: url(../../assets/img/back_img.png);
		background-size: 1.5rem auto;
		.left{
			width: 25%;
			padding-left: 0.12rem;
			img{
				display: block;
				width: 0.8rem;
				height: 0.68rem;
			}
		}
		.center{
			width: 50%;
			text-align: center;
			line-height: 1.12rem;
			font-size: 0.32rem;
			font-weight: bold;
			color: #fff;
			span{
				display: block;
				padding-top: 0.2rem;
			}
		}
		.right{
			width: 25%;
		}
	}
</style>
