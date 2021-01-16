<template>
	<div class="homes">
		<headers></headers>
        <h2 class="title">歷史開獎記錄</h2>
        <div class="boxList">
            <div v-for="(item, index ) in listItem" :key = index class="box_lilte">
                <p class="boxlist-top-span">
                    {{item.key}}
                </p>
                <span class="box-list-span">
                    {{item.value}}
                </span>
            </div>
        </div>
        <h3 class="title_h3">
            我投注的號碼
        </h3>
        <div class="numberto">
            <div v-for="(item, index ) in numbercode" :key = index class="numbercode" >{{item}}</div>
        </div>
        <div class="footer">
           <p class="footer_title">*選擇其中一種球投注，即可配對玩家開獎。</p>
           <div class="footerBox">
               <div class="leftFooter">
                   <img src="../../assets/img/header/lefticon.png" alt="">
               </div>
                <div class="footerBoxlist">
                    <div class="footerlistbox" v-for="(item, index ) in listNumber" :key = index>
                        <div v-if="item.status == 1" class="box_footers">
                            <img src="../../assets/img/header/yuan.png" alt="" class="icon_yuan">
                            <p class="tou">已被投注</p>
                            <div>
                                <img src="../../assets/img/header/ioocon.png" alt="" class="icon_yuan_img">
                                <span class="count">{{item.count}}枚</span>
                            </div>
                        </div>
                        <div v-else-if="item.status == 2"  class="box_footers">
                            <img src="../../assets/img/header/towyuan.png" alt="" class="icon_yuan">
                            <p class="tou">{{item.number}}号投注</p>
                            <div>
                                <img src="../../assets/img/header/ioocon.png" alt="" class="icon_yuan_img">
                                <span class="count">{{item.count}}枚</span>
                            </div>
                        </div>
                        <div v-else-if="item.status == 3" class="box_footers">
                            <img src="../../assets/img/header/three.png" alt="" class="icon_yuan">
                            <p class="tou">?號球</p>
                            <div>
                                <img src="../../assets/img/header/ioocon.png" alt="" class="icon_yuan_img">
                                <span class="count">{{item.count}}枚</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightFotter">
                     <img src="../../assets/img/header/righticon.png" alt="">
                </div>
           </div>
           <div class="tz_img">
               <div class="btn_box">
                   <span class="liiitl_font">每注需消耗1積分</span>
                   <img src="../../assets/img/header/ioocon.png" alt="" class='btn_img'>
               </div>
               <div class='footer_btn'>
                  <span>投注</span>
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
		Popover,NavBar
	} from "vant";
	Vue.use(Icon).use(Popover).use(NavBar);
	
	import headers from '../../components/module/topheaders.vue'
	export default {
		name: "homes",
		components: {headers},
		data() {
			return {
                imgOne: '',
                listNumber:[{
                    status: '1',
                    number: '1',
                    count:'1',
                },
                {
                    status: '2',
                    number: '1',
                    count:'1',
                },
                {
                    status: '3',
                    number: '1',
                    count:'1',
                },
                {
                    status: '1',
                    number: '1',
                    count:'1',
                }
                ],
                numbercode:[1,2,3],
                listItem: [
                    {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                     {
                        key : '第12期',
                        value:'2號'
                    },
                ]
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
p{
     margin: 0;
}   
.homes{
    height: 100vh;
    position: relative;
}
.footer{
    background-image:  url('../../assets/img/header/bottom.png');
    background-repeat: no-repeat;
    // height: calc(100vh - 6.18rem);
    background-size: 100% auto;
    position: absolute;
    bottom: 0;
    top: 5.8rem;
    left: 0;
    right: 0;
    margin: auto;
    .tz_img{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.9rem;
        background-image: url('../../assets/img/header/littleheader.png');
        background-size: 100% auto;
        
        .footer_btn{
            width: 5.6rem;
            height: 1.12rem;
            background: linear-gradient(180deg, #2B40FB 0%, #000E3E 100%, #2252EE 100%);
            box-shadow: .10rem .10rem 0rem rgba(0, 0, 0, 0.16);
            margin: 0 auto;
             border-radius: .2rem;
            //  margin-top: .34rem;
             text-align: center;
           span{
                font-size: .28rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .40rem;
                color: #FFFFFF;
                
                line-height: 1.12rem;
           }
        }
        .btn_box{
            text-align: center;
            margin-top: .56rem;
            margin-bottom: .34rem;
            .liiitl_font{
                font-size: .24rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .34rem;
                color: #000038;
                border: none;
               
            }
            .btn_img{
                width: .2rem;
                height: .2rem;
            }
        }
    }
    .footer_title{
        height: .34rem;
        font-size: .24rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: .34rem;
        color: #FFFFFF;
        margin-top: 1.5rem;
        text-align: center;
    }
    .footerBox{
        display: flex;
        margin-top: .18rem;
        justify-content: space-between;
        align-items: center;
        height: 2.24rem;
        .leftFooter{
            width: .35rem;
            height: .34rem;
            margin-left: .12rem;
            img{
                width:100%;
                height: 100%;
            }
            
        }.rightFotter{
           width: .35rem;
            height: .34rem;
            margin-right: .12rem;
            img{
                width:100%;
                height: 100%;
            }
        }   
        .footerBoxlist{
            // width: 90%;
            width: calc(100vw - .94rem);
            height: 2.24rem;
            display: flex;
            justify-content: space-between;
            .icon_yuan{
                width: .88rem;
                height: .88rem;
            }
            .box_footers{
                // float: left;
                padding-top: .28rem;
                width: 1.6rem;
                text-align: center;
            }
            .tou{
                font-size: .24rem;
                font-family: PingFang SC;
                font-weight: bold;
                line-height: .34rem;
                color: #FFFFFF;
                margin-top: .25rem;
            }
            .count{
                font-size: .18rem;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: .26rem;
                color: #FFFFFF;
                margin-top: .13rem;
            }
            .icon_yuan_img{
                width: .2rem;
                height: .2rem;
            }
        }
    }
}
    .numberto{
        margin-top: .3rem;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-content: center;
        width: 2.36rem;
        .numbercode{
            width: .6rem;
            height: .6rem;
            border-radius: 50%;
            background-image: url('../../assets/img/header/yuantowo.png');
            background-size: .6rem;
            color: #FFFFFF;
            font-size: .22rem;
            line-height: .6rem;
            font-weight: bold;
            text-align: center;
        }
    }
    .title_h3{
        // width: 1.20rem;
        text-align: center;
        height: .28rem;
        font-size: .20rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: .24rem;
        color: #819EFF;
        margin-top: .6rem;
    }
    .boxList{
        margin-right: .32rem;
        margin-left: .32rem;
        overflow: hidden;
        .box_lilte{
            width: .96rem;
            height: .96rem;
            float: left;
            text-align: center;
            margin-right: .51rem;
            margin-top: .16rem;
        }
        .box_lilte:nth-child(5n+5){
            margin-right: 0;
        }
        .boxlist-top-span{
           text-align: center;
           margin-top: .08rem;
            margin-bottom: .1rem;
            height: .28rem;
            font-size: .20rem;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: .24rem;
            color: #3E50EE ;
        }
        .box-list-span{
            width: .44rem;
            height: .40rem;
            font-size: .28rem;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: .24rem;
            color: #FFFFFF;
        }
    }
    .title{
        height: .34rem;
        font-size: .24rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: .24rem;
        color: #FFFFFF;
        // letter-spacing: .1rem;
        opacity: 1;
        text-align: center;
    }
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
				text-shadow: 0rem 0.04rem 0.04rem rgba(0, 0, 0, 0.4);
			}
		}
		.a{
			margin-top: 1.1rem;
		}
	}
</style>
