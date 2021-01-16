<template>
    <div class="eight">
        <!-- 头部 -->
        <div class="head">
            <div class="title">
                <img src="../../../src/assets/img/left.png" alt="">
                <p>好友场</p>
            </div>
        </div>

        <!-- tab切换 -->
        <div class="tabs">
            <div @click="tabSwitch(1)">
                <p :class="tableIndex == 1 ? '' : 'dimColor'">创建房间</p>
                <i v-show="tableIndex == 1"></i>
            </div>
            <div @click="tabSwitch(2)">
                <p :class="tableIndex == 2 ? '' : 'dimColor'">加入房间</p>
                <i v-show="tableIndex == 2"></i>
            </div>
        </div>

        <!-- 内容区 -->
        <div class="content">
            <div class="establish" v-show="tableIndex == 1">
                <p>房间密码</p>
                <div class="inputBox">
                    <input type="text" name="" placeholder="请填写房间密码" id="">
                </div>
            </div>
            <div class="join" v-show="tableIndex == 2">
                <p>房间号码</p>
                <div class="inputBox">
                    <input type="text" name="" placeholder="请填写房间号码" id="">
                </div>
                <p>房间密码</p>
                <div class="inputBox">
                    <input type="text" name="" placeholder="请填写房间密码" id="">
                </div>
            </div>
        </div>

        <!-- 底部控制栏 -->
        <div class="control">
            <div v-show="tableIndex == 1">
                <div class="btn">确认创建</div>
            </div>
            <div v-show="tableIndex == 2">
                <div class="btn">确认加入</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "eight",
    data() {
        return {
            tableIndex: 1, // 1 创建房间， 2 加入房间
        };
    },
    computed:{
        
    },
    props:{
        
    },
    methods:{
        tabSwitch(index){
            this.tableIndex = index;
        }
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
        }
    }

    //tab切换
    .tabs{
        display: flex;
        justify-content: space-around;
        width: 6.88rem;
        margin: auto;
        
        div{
            width: 1.30rem;
            font-size: 0.28rem;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
        
            p{
                margin: 0;
            }

            i{
                display: inline-block;
                width: 0.64rem;
                height: 0.08rem;
                background: #FFFFFF;
                border-radius: 0.10rem;  
            }

            .dimColor{
                color: #5441BB;
            }
        }
    }

    // 内容区
    .content{
        height: 8rem;
        display: flex;
        align-items: center;
        

        .establish{
            margin: auto;
        }

        .join{
            margin: auto;
        }
        p{
            margin: 0;
            font-size: 0.28rem;
            font-weight: bold;
            color: #819EFF;
            margin-bottom: 0.32rem;
            text-align: center;

        }
        .inputBox{
            width: 6.86rem;
            height: 1.28rem;
            border: 0.02rem solid #C4CCFF;
            background: linear-gradient(180deg, #261772 0%, #150B47 100%);
            border-radius: 0.40rem;
            margin-bottom: 0.6rem;
        }

        input{
            width: calc(6.86rem - 0.6rem);
            border: none;
            height: 100%;
            background: 0 0;
            color: #fff;
            margin-left: 0.5rem;
        }
    }

    // 底部控制栏
    .control{
        position: fixed;
        bottom: 0;
        width: 7.5rem;
        height: 4.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, #F1F1F1 0%, #DFDFDF 100%);
        opacity: 1;
        border-radius: 1.2rem 1.2rem 0px 0px;

        .btn{
            width: 5.6rem;
            height: 1.12rem;
            line-height: 1.12rem;
            background: linear-gradient(180deg, #2B40FB 0%, #000E3E 100%, #2252EE 100%);
            box-shadow: 0.1rem 0.1rem 0px rgba(0, 0, 0, 0.16);
            border-radius: 0.20rem;
            text-align: center;
            letter-spacing: 0.02rem;
            color: #fff;
        }
    }

</style>
