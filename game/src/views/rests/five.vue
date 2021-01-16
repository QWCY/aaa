<template>
    <div class="five">
        <!-- 头部 -->
        <div class="head">
            <div class="title">
                <img src="../../../src/assets/img/left.png" alt="">
                <p>多人抢庄</p>
                <div>房间号: 324</div>
            </div>
            <div class="integralInfo">
                <img src="../../../src/assets/img/star.png" alt="">
                <div>
                    <p>我的积分</p>
                    <span>3653</span>
                </div>
            </div>
        </div>

        <!-- 码数 -->
        <div class="yardage">
            <ul class="yard">
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/skyblue.png" alt="">
                        <span>8</span>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/green.png" alt="">
                        <span>15</span>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/yellow.png" alt="">
                        <span>150</span>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/red.png" alt="">
                        <span>2000</span>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/red.png" alt="">
                        <span>10000</span>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/user.png" alt="">
                    <div>
                        <img src="../../assets/img/red.png" alt="">
                        <span>10000</span>
                    </div>
                </li>
            </ul>

            <div class="record">
                <p>上庄</p>
                <ul>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                    <li>+1000000</li>
                </ul>
            </div>
        </div>

        <!-- 开奖结果 -->
        <div class="result">
            <div class="title">
                <p class="mb30">开奖场次</p>
                <p>开奖结果</p>
            </div>
            <div class="datas">
                <ul>
                    <li v-for="(item, index) in awardData" :key="index">
                        <p class="mb30">{{item.order}}</p>
                        <img src="../../assets/img/purple-ball.png" alt="">
                    </li>
                </ul>
            </div>
        </div>

        <!-- 选择庄闲 -->
        <div class="select">
            <div class="bor">
                <div></div>
                <p>闲</p>
            </div>
            <div class="countDown">
                <div>9</div>
                <p>请投注</p>
            </div>
            <div class="bor">
                <div></div>
                <p>庄</p>
            </div>
        </div>

        <!-- 积分信息 -->
        <div class="integral">
            <div class="integral-info">
                <div>庄</div>
                <p>现有积分</p>
                <p>10000</p>
            </div>
            <div class="integral-code">
                <img src="../../assets/img/string.png" alt="">
                <p>dsadjaoifuaiodaofidskljl</p>
            </div>
        </div>

        <!-- 操作控制 -->
        <div class="control">
            <div class="btn">
                <div>抢庄申请</div>
                <div>取消坐庄</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "five",
    data() {
        return {
            awardData: [
                {
                    order: 11,
                    result: 1, // 1紫色, 2蓝色
                },{
                    order: 12,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 13,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 14,
                    result: 1, // 1紫色, 2蓝色
                },{
                    order: 15,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 16,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 17,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 18,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 19,
                    result: 2, // 1紫色, 2蓝色
                },{
                    order: 20,
                    result: 2, // 1紫色, 2蓝色
                }
            ], 
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
    .five{
        height: 15rem;
    }
    // 头部
	.head{
        display: flex;
        justify-content: space-between;
        height: 1.30rem;
        width: 6.88rem;
        margin: auto;

        .title{
            display: flex;
            align-items: center;
            color: #fff;

            img{
                width: 0.64rem;
                height: 0.64rem;
                margin-right: 0.20rem; 
            }
            p{
                font-size: 0.32rem;
                margin-right: 0.36rem 
            }
            div{
                width: 2.06rem;
                height: 0.42rem;
                line-height: 0.42rem;
                background: url('../../assets/img/blue-chunk.png') no-repeat;
                background-size: 100%;
                font-size: 0.24rem;
                text-align: center;
                letter-spacing: 0.02rem;
            }
        }

        .integralInfo{
            display: flex;
            color: #fff;

            img{
                width: 0.24rem;
                height: 0.24rem;
                margin-right: 0.05rem;
                margin-top: 0.32rem;
            }

            div{
                width: 1.20rem;
                text-align: center;
                font-size: 0.28rem;
                letter-spacing: 0.01rem;
                font-size: 0.28rem;    

                p{
                    margin-top: 0.28rem;
                    margin-bottom: 0.10rem
                }
            }
        }
    }

    // 码数
    .yardage{
        display: flex;
        width: 6.88rem;
        margin: auto;
        height: 3.40rem;
        margin-bottom: 0.40rem;

        .yard{
            width: 5.30rem;
            margin-right: 0.10rem;

            li{
                width: 2.58rem;
                height: 0.96rem;
                padding: 0 .10rem 0 .20rem;
                float: left;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 0.02rem solid #fff;
                border-radius: 0.15rem;
                background-image: linear-gradient(#261872, #0a003f);
                box-sizing: border-box;
                margin-bottom: 0.24rem;

                &:nth-child(2n-1){
                    margin-right: 0.10rem;
                }

                & > img{
                    width: 0.48rem;
                    height: 0.48rem;
                }

                div{
                    position: relative;
                    width: 1.02rem;
                    height: 0.70rem;

                    img{
                        width: 1.12rem;
                    }

                    span{
                        position: absolute;
                        color: #fff;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 0.24rem;
                    }
                }
            }

            
        }

        .record{
            flex: 1;
            width: 1.44rem;
            height: 3.36rem;
            background-image: linear-gradient(#4e79f9, #212560);
            border-radius: 0.15rem;
            border: 0.02rem solid #6b76be;
            text-align: center;
            padding: 0.15rem;
            color: #fff;
            opacity: 0.7;

            p{
                margin: 0;
                letter-spacing: 0.10rem;
                font-size: 0.24rem;
                margin-bottom: 0.20rem;
            }

            ul{
                height: 2.6rem;
                overflow: hidden;

                li{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 0.12rem;
                    font-size: 0.28rem;
                }
            }
        }
    }

    // 开奖结果
    .result{
        width: 6.88rem;
        height: 1.30rem;
        display: flex;
        margin: auto;
        color: #fff;
        padding: 0.15rem 0;

        .title{
            width: 1.12rem;
            font-size: 0.28rem;
            margin-right: 0.30rem;

            p{
                line-height: 0.28rem;
            }
            
        }
        .mb30{
            margin-bottom: 0.30rem;
        }

        .datas{

            ul{
                display: flex;
                text-align: center;
                font-size: 0;
                li{
                    width: .50rem;
                }
                p{
                    font-size: 0.20rem;
                }
            }

            img{
                width: 0.30rem;
            }
        }
        p{
            margin: 0;
        }
    }

    // 选择庄闲
    .select{
        width: 6.88rem;
        margin: auto;
        display: flex;
        justify-content: space-around;
        padding: 0.80rem 0 0.65rem 0;
        text-align: center;

        .bor{
            
            div{
                width: 0.90rem;
                height: 0.90rem;
                background: #FFFFFF;
                border: 0.06rem solid #C4CCFF;
                border-radius: 50%;
                line-height: 0.90rem;
                margin: 0.40rem 0;
            }

            p{
                margin: 0;
                font-size: 0.32rem;
                color: #819EFF;
            }
        }

        .countDown{

            div{
                width: 1.5rem;
                height: 1.5rem;
                background: #FFFFFF;
                border: 0.06rem solid #C4CCFF;
                border-radius: 50%;
                color: #000;
                text-align: center;
                line-height: 1.5rem;
                font-size: 0.78rem;
                margin-bottom: 0.25rem;
            }

            p{
                margin: 0;
                font-size: 0.32rem;
                color: #fff;
            }
        }
    }

    // 积分信息
    .integral{
        width: 3.52rem;
        height: 1.56rem;
        padding: 0.20rem;
        border: 0.02rem solid #C4CCFF;
        background: linear-gradient(180deg, #261772 0%, #150B47 100%);
        margin: 0 auto;
        border-radius: 0.40rem;
        color: #fff;
        p{
            margin: 0;
        }
        &-info{
            display: flex;
            align-items: center;
            justify-content: space-between;

            div{
                width: 0.48rem;
                height: 0.48rem;
                background: #FFFFFF;
                border: 0.06rem solid #C4CCFF;
                border-radius: 50%;
                color: #000;
                text-align: center;
            }
        }

        &-code{
            width: 2.4rem;
            margin: auto;
            img{
                width: 100%;
            }
            p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #C0B4FF;
            }
        }
    }

    // 操作控制
    .control{
        position: fixed;
        bottom: 0;
        width: 7.5rem;
        height: 2.3rem;
        background: url('../../assets/img/console.png') no-repeat;
        background-size: 100%;
        
        .btn{

            width: 6.10rem;
            margin: auto;
            margin-top: 0.58rem;
            display: flex;
            justify-content: space-between;

            div{

                text-align: center;
                line-height: 0.98rem;
                color: #FFFFFF;
                width: 2.58rem;
                height: 0.98rem;
                letter-spacing: 0.02rem;
                font-size: 0.24rem;
                box-shadow: 0.10rem 0.10rem 0px rgba(0, 0, 0, 0.16);
                opacity: 1;
                border-radius: 0.20rem;
            }
            div:first-child{
                background: linear-gradient(180deg, #C41AA7 0%, #530222 100%);
            }

            div:last-child{
                background: linear-gradient(180deg, #2B40FB 0%, #000E3E 100%);
            }
        }
    }

</style>
