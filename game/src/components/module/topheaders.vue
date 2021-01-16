<template>
	<div class="box">
		<div class="headContent">
			<div class="left" @click="returnLeft()">
				<span class=leftFont>100積分場</span>
			</div>
			<div class="center">
                <div class="boxcenter">
                    <p class="namenumber">
                        房間號：324
                    </p>
                </div>
			</div>
			<div class="right">
                <div class=topRight>
                    <img src="../../assets/img/header/iconfxin.png" alt="">
                    <span class='myjf'>我的积分</span>
                </div>
                <div class="jfbox">
                    <span class='jf'>3653</span>
                </div>
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
	// Vue.use(Icon).use(Popover);

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
		width: 100%;
		position: fixed;
		right: 0;
		top: 0;
		background: url(../../assets/img/back_img.png);
		background-size: 1.5rem auto;
		.left{
			width: 30%;
			padding-left: 0.12rem;
			img{
				display: block;
				width: 0.8rem;
				height: 0.68rem;
			}
            .leftFont{
                color: #fff;
                font-size: .32rem;
                margin-left: .56rem;
                position: relative;
            }
            .leftFont::before{
                content: '';
                position: absolute;
                top: 0.05rem;
                left: -0.2rem;
                width: .2rem;
                height: .2rem;
                transform:rotate(315deg);
                -ms-transform:rotate(315deg); 	/* IE 9 */
                -moz-transform:rotate(315deg); 	/* Firefox */
                -webkit-transform:rotate(315deg); /* Safari 和 Chrome */
                -o-transform:rotate(315deg);
                border-left: 1px  solid #ffffff;
                border-top: 1px solid #ffffff;
            }
		}
		.center{
			width: 40%;
			text-align: center;
			line-height: 1.12rem;
			font-size: 0.32rem;
			font-weight: bold;
			color: #fff;
			// span{
			// 	display: block;
			// 	padding-top: 0.2rem;
			// }
            .boxcenter{
                margin: 0 auto;
                width: 2.06rem;
                height: .42rem;
                background: url(../../assets/img/header/header.png);
                background-size: 2.06rem .42rem;
                .namenumber{
                    font-size: .24rem;
                    margin: 0;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: .34rem;
                    color: #FFFFFF;
                    line-height: .42rem;
                }
            }
		}
		.right{
			width: 20%;
            margin-right: 10%;
            img{
                width: .24rem;
                height: .24rem;
            }
            .topRight{
                text-align: right;
            }
            .myjf{
                color: #819EFF;
                font-size: .24rem;
                font-weight: 400;
                margin-left: 0.06rem;
                font-family: PingFang SC;
            }
            .jf{
                color: #FFFFFF;
                font-size: .28rem;
                font-weight: Bold;
                line-height: .36rem;
            }
            .jfbox{
                text-align: right;
            }
		}
	}
</style>
