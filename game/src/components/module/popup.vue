<template>
    <div class="alert">
		<van-popup v-model:show="show" position="top" :close-on-click-overlay="false">
			<div class="popBox">
				<div class="content">
					<div class="c_name" v-text="titleText"></div>
					<slot></slot>
					<div class="lan_btn" v-text="comfirmText" @click="submitFun"></div>
				</div>
				<div class="close">
					<img @click="closeFun()" src="../../assets/img/close.png" />
				</div>
			</div>
		</van-popup>
    </div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import {
		Icon,Popup 
	} from "vant";
	Vue.use(Icon).use(Popup);
	
	export default {
		name: "alert",
		components: {},
		data() {
			return {
				
			};
        },
		computed:{
			initInfo(){
				return this.$store.state.initInfo
			},
		},
        props:{
            show : Boolean,
			titleText : String,
			comfirmText : String,
			submitFun : Function,
			
        },
		methods:{
			closeFun(){
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.van-popup--top{
		width: 100vw;
		position: absolute;
	}
	.popBox{
		width: 6.1rem;
		min-height: 6.3rem;
		margin: 0 auto;
		margin-top: 3rem;
		.content{
			width: 100%;
			height: 4.8rem;
			background: #fff;;
			border-radius: 0.25rem;
			padding-top: 0.48rem;
			.c_name{
				font-size: 0.34rem;
				font-weight: bold;
				color: #312E9E;
				text-align: center;
			}
			.lan_btn{
				margin-top: 0.3rem;
				width: 3rem;
				height: 1rem;
				line-height:0.9rem;
			}
		}
		.close{
			display: flex;
			justify-content: center;
			img{
				height: 1.5rem;
			}
		}
	}
	.van-popup{
		background: rgba(0,0,0,0);
	}
</style>