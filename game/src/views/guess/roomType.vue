<template>
    <div class="roomType">
		<headers titleText="競猜">
			<div class="right_top">
				遊戲玩法 <img src="../../assets/img/main/wf.png" />
			</div>
		</headers>
		<div class="game_type">
			<span>4</span> 4球
		</div>
		<div class="game_list">
			<div class="li">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
		</div>
		<div class="game_type">
			<span>8</span> 8球
		</div>
		<div class="game_list">
			<div class="li zi">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li zi">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li zi">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
			<div class="li zi">
				<span>1 積分場</span>
				<div>
					<img class="xx" src="../../assets/img/guess/xx.png" />
					<img class="go" src="../../assets/img/guess/go.png" />
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import {
		Icon,Popup 
	} from "vant";
	Vue.use(Icon).use(Popup);
	
	import headers from '../../components/module/header.vue'
	export default {
		name: "roomType",
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
			closeFun(){
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right_top{
		color: #fff;
		font-size: 0.24rem;
		img{
			width: 0.48rem;
			height: 0.48rem;
			vertical-align: -0.15rem;
		}
	}
	.game_type{
		color: #fff;
		font-size: 0.32rem;
		font-weight: bold;
		margin-left: 0.64rem;
		margin-top: 0.5rem;
		span{
			display: inline-block;
			width: 0.4rem;
			height: 0.4rem;
			background: #FFFFFF;
			text-align: center;
			line-height: 0.4rem;
			font-size: 0.28rem;
			color: #333;
			border-radius: 50%;
			vertical-align: 0.04em;
		}
	}
	.game_list{
		width: 6.86rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.li{
			width: 3.28rem;
			height: 2rem;
			background: url(../../assets/img/guess/lan.png) no-repeat;
			background-size: 100% 100%;
			color: #fff;
			font-size: 0.36rem;
			font-weight: bold;
			justify-content: space-between;
			display: flex;
			align-items: center;
			padding: 0 0.2rem;
			padding-bottom: 0.2rem;
			margin-top: 0.32rem;
			img{
				vertical-align: -0.1rem;
			}
			.xx{
				width: 0.36rem;
				height: 0.36rem;
				margin-right: 0.06rem;
			}
			.go{
				width: 0.56rem;
				height: 0.34rem;
			}
		}
		.zi{
			background: url(../../assets/img/guess/zi.png) no-repeat;
			background-size: 100% 100%;
		}
	}
</style>