<template>
	<div class="recharge">
		<headers titleText="我的推薦"></headers>
		<div class="integral">
            <div class="one">
                <div class="top">
                    <img src='../../assets/img/header/qqq2.png' alt="" class="img_top">
                    <span class="img_top_text">我的佣金</span>
                </div>
                <div class="bottom">
                    <span class="img_bottom_text">2236</span>
                </div>
            </div>
            <div class="two">
                <div class="top">
                   <img src='../../assets/img/header/qqq2.png' alt="" class="img_top">
                    <span class="img_top_text">我的佣金</span>
                </div>
                <div class="bottom">
                    <span class="img_bottom_text">2236</span>
                </div>
            </div>
		</div>
        <table class="tables">
            <tr class="toptr">
                <td class="title left">直接推薦好友</td>
                <td class="title">創建時間</td>
                <td></td>
            </tr>
            <tr v-for="(item , index) in listData" :key='index'>
                <td class="aaa left">{{item.number}}</td>
                <td class="aaa">{{item.data}}</td>
                <td>
                    <img src="../../assets/img/header/qqq4.png" alt="" class="icon_img">
                </td>
            </tr>
        </table>


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
				listData:[
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                    {
                        number: '13123456789',
                        data: '2021/01/02 12:12',
                    },
                ]
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.tables{
    border-collapse: collapse;
    margin-bottom: .55rem;
    tr{
        height: 1.02rem;
        border-bottom: 2px solid #312E9E;
    }
    .toptr{
         border-bottom:none;
    }
    width: calc(100% - 1.04rem);
    margin: 0 .52rem;
    margin-top: .4rem;
    .title{
        font-size: .22rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: .32rem;
        color: #819EFF;
        text-align: center;
    }
    .icon_img{
        width: .55rem;
        height: .25rem;
    }
    .aaa{
        font-size: .26rem;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: .36rem;
        color: #FFFFFF;
        text-align: center;
    }
    .left{
        text-align: left !important;
    }
}
	.integral{
        margin: 0 .32rem;
        margin-top: .34rem;
        display: flex;

        .one{
            width: 3.28rem;
            height: 1.44rem;
            background-image: url('../../assets/img/header/qqq.png');
            background-size: 3.28rem 1.44rem ;
            .top{
                margin-bottom: .16rem;
                margin-top: .16rem;
                display: flex;
                align-items: center;
            }
            .bottom{
                text-align: center;
            }
            .img_top{
                width: .4rem;
                height: .4rem;
                margin: 0 .06rem 0 .32rem;
            }
            .img_top_text{
                font-size: .22rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .44rem;
                color: #FFFFFF;
            }
            .img_bottom_text{
                font-size: .32rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .24rem;
                color: #FFFFFF;
            }
        }
         .two{
             margin-left: .3rem;
            width: 3.28rem;
            height: 1.44rem;
            background-image: url('../../assets/img/header/qqq.png');
            background-size: 3.28rem 1.44rem ;
            .top{
               margin-bottom: .16rem;
                margin-top: .16rem;
                display: flex;
                align-items: center;
            }
            .bottom{
                text-align: center;
            }
            .img_top{
                width: .4rem;
                height: .4rem;
                margin: 0 .06rem 0 .32rem;
            }
            .img_top_text{
                font-size: .22rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .24rem;
                color: #FFFFFF;
            }
            .img_bottom_text{
                font-size: .32rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .24rem;
                color: #FFFFFF;
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
