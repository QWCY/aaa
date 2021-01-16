<template>
	<div class="homes">
		<div class="top">
			<div class="g_n left">
				<div>
					<img src="../../assets/img/main/wf.png" />
					遊戲玩法
				</div>
			</div>
			<div class="g_n center">
				<img src="../../assets/img/main/yuan.png" />
			</div>
			<div class="g_n right">
				<div class="langBox" @click="showPopover = true">
					<van-popover v-model:show="showPopover" :actions="actions" @select="onSelect" placement="bottom-end">
						<template #reference>
							<span v-if="$i18n.locale == 'zh-HK'">
								<img src="../../assets/img/main/lang_zh.png" />
								<b>HK</b>
							</span>
							<span v-else-if="$i18n.locale == 'zh-EN'">
								<img src="../../assets/img/main/lang_en.png" />
								<b>EN</b>
							</span>
						</template>
					</van-popover>
				</div>
			</div>
		</div>
		<div class="assets_box">
			<div class="left">
				<span>我的積分: 10000000000000</span>
				<div class="xian"></div>
				<span>ETH資產: 10000000000000</span>
				<div class="b_l">
					1ETH = 1000積分
				</div>
			</div>
			<div class="right">充值</div>
		</div>
		<div class="game_list">
			<div class="game_box g1" @click="many()">
				<div class="left">
					<img src="../../assets/img/main/game_1.png" />
					多人競猜
				</div>
				<img class="right" src="../../assets/img/main/go.png" />
			</div>
			<div class="game_box g2">
				<div class="left">
					<img src="../../assets/img/main/game_2.png" />
					雙人競猜
				</div>
				<img class="right" src="../../assets/img/main/go.png" />
			</div>
			<div class="game_box g3">
				<div class="left">
					<img src="../../assets/img/main/game_3.png" />
					多人搶莊
				</div>
				<img class="right" src="../../assets/img/main/go.png" />
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
		name: "homes",
		components: {},
		data() {
			return {
				showPopover: false,
				actions: [{
						text: '中文繁体',
						icon: require('../../assets/img/main/lang_zh.png'),
						data: 'zh-HK'
					},
					{
						text: 'English',
						icon: require('../../assets/img/main/lang_en.png'),
						data: 'zh-EN'
					}
				]
			};
		},
		methods: {
			onSelect(e) {
				this.$i18n.locale = e.data
			},
			many(){
				this.$router.push({
					path : '/roomType'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homes{
		padding-top: 0.76rem;
		height: 100vh;
		overflow-y: scroll;
	}
	.top{
		width: 100%;
		display: flex;
		align-items: center;
		.g_n{
			width: 33.3%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.left{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.24rem;
			color: #fff;
			img{
				width: 0.48rem;
				height: 0.48rem;
				vertical-align: -0.15rem;
			}
		}
		.center{
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				display: block;
				width: 1.44rem;
				height: 1.44rem;
			}
		}
		.right{
			display: flex;
			justify-content: center;
		}
	}
	
	.assets_box{
		width: 6.86rem;
		height: 1.44rem;
		background-image: url(../../assets/img/main/btn_back.png);
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 0.8rem;
		padding: 0 0.4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.1rem;
		.left{
			width: 4.36rem;
			font-size: 0.3rem;
			font-weight: bold;
			text-indent: 0.28rem;
			position: relative;
			.b_l{
				position: absolute;
				top: -0.5rem;
				left: 0;
				color: #fff;
				font-size: .18rem;
			}
			span{
				display: block;
				padding: 0.1rem 0;
			}
			.xian{
				width: 100%;
				border: 0.015rem solid #fff;
			}
		}
		.right{
			width: 1.28rem;
			height: 0.56rem;
			background: #fff;
			text-align: center;
			line-height: 0.56rem;
			color: #6A79FF;
			font-size: 0.24rem;
			border-radius: 0.15rem;
		}
	}
	.game_list{
		width: 100%;
		margin-top: 0.24rem;
		.game_box{
			width: 100%;
			height: 4.8rem;
			background: url(../../assets/img/main/game_back1.png) no-repeat;
			background-size: 100% 100%;
			padding: 0.68rem 0.8rem;
			display: flex;
			justify-content: space-between;
			.left{
				font-size: 0.62rem;
				text-shadow: 0.06rem 0.06rem 0px rgba(0, 0, 0, 0.2);
				color: #fff;
				font-weight: bold;
				img{
					width: 1.08rem;
					height: 1.08rem;
					vertical-align: -0.36rem;
					margin-right: 0.44rem;
				}
			}
			.right{
				display: block;
				width: 0.56rem;
				height: 0.34rem;
				margin-top: 0.58rem;
			}
		}
		.g2{
			background: url(../../assets/img/main/game_back2.png) no-repeat;
			background-size: 100% 100%;
			margin-top: -2rem;
			.left{
				text-shadow: 0.06rem 0.06rem 0px rgba(0, 0, 0, 0.16);
				color: #000038;
			}
		}
		.g3{
			background: url(../../assets/img/main/game_back3.png) no-repeat;
			background-size: 100% 100%;
			margin-top: -2rem;
		}
	}
	.langBox {
		color: #333;
		font-weight: bold;
		width: 1.28rem;
		height: 0.48rem;
		border: 0.02rem solid #fff;
		border-radius: 0.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	
		img {
			width: 0.32rem;
		}
	
		b {
			font-weight: 400;
			color: #fff;
			margin-left: 0.2rem;
		}
	}
</style>
