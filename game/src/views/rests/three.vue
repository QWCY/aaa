<template>
	<div class="homes">
		<headers></headers>
        <div class="boxList">
           <div class="numberbox">
                <diiv class="kjian">開獎結果</diiv>
                <div class="counts" v-for='(item ,index) in count' :key='index'>
                    <span>{{item}}</span>
                </div>
           </div>
          <div class="numberboxTwo">
               <diiv class="kjian">開獎結果</diiv>
               <div class="nicles">
                   <div v-for='(item ,index) in countImg' :key='index' class="item">
                        <img src="../../assets/img/header/zzz.png" alt=""   class="countsTwo" v-if="item == 1">
                        <img src="../../assets/img/header/zzz11.png" alt="" v-else class="countsTwo">
                    </div>
               </div>
           </div>
        </div>
        <div class="numberto">
           <span class="titles">開獎結果</span>
           <div class="imgBox_two">
               <img src="../../assets/img/header/zzz2222.png" alt="" class="numberImg">
           </div>
        </div>


        <div class="footer">
           <div class="tz_img">
               <div class="mmnm"></div>
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
                count: [1,2,3,4,5,6,7,8,9,10] ,
                countImg: [1,0,1,0,1,0,1,0,1,0]
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
.numberto{
    margin-top: 1rem;
     text-align: center;
    .titles{
        font-size: .28rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: .24rem;
        color: #FFFFFF;
    }
    .numberImg{
        width: 1.2rem;
        height: 1.2rem;
        margin-top: .28rem;
    }
}
.footer{
    background-image:  url('../../assets/img/header/zzz2.png');
    background-repeat: no-repeat;
    // height: calc(100vh - 6.18rem);
    background-size: 100% auto;
    background-position:top center;
    position: absolute;
    bottom: 0;
    top: 6.7rem;
    left: 0;
    right: 0;
    margin: auto;
    .tz_img::before{
        content: '';
        position: absolute;
        width: 1.20rem;
        top: -.6rem;
        left:0; 
        right: 0;
        margin: 0 auto;
        height: 1.2rem;
         background-image: url('../../assets/img/header/zzz2222.png');
         background-size: 1.2rem;
    }
    .tz_img{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2.9rem;
        background-image: url('../../assets/img/header/littleheader.png');
        background-size: 100% auto;
        .mmnm{
             margin-top: 1.04rem;
             border: 1px solid transparent;
        }
        .footer_btn{
            width: 5.6rem;
            height: 1.12rem;
            background: linear-gradient(180deg, #2B40FB 0%, #000E3E 100%, #2252EE 100%);
            box-shadow: .10rem .10rem 0rem rgba(0, 0, 0, 0.16);
            margin: 0 auto;
             border-radius: .2rem;
            
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
    .boxList{
        margin-top: 1rem;
        margin-right: .32rem;
        margin-left: .32rem;
        overflow: hidden;
        .numberboxTwo{
            margin-top: .26rem;
            display: flex;
            justify-content: space-between;
            .kjian{
                width: 1.12rem;
            }
            .nicles{
                width: calc(100% - 1.12rem);
                display: flex;
                flex-wrap:nowrap;
            }
            .item{
                width: .3rem;
                margin-left: .2rem;
                text-align: center;
            }
        }
        .numberp{
            white-space: nowrap;
        }
        .numberbox{
            display: flex;
            overflow-x: scroll;
            .counts{
                margin-left: .2rem;
                width: .3rem;
                text-align: center;
               span{
                    font-size: .20rem;
                    font-family: PingFang SC;
                    font-weight: 400;
                    line-height: .24rem;
                    color: #FFFFFF;
               }
            } 
        }
        .kjian{
            font-size: .28rem;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: .24rem;
            color: #FFFFFF;
        }
        
         .countsTwo{
             width: .3rem;
             height: .3rem;
        }
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
