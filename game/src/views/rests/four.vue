<template>
  <div class="content">
    <headers titleText="多人搶莊">
      <div class="right_top">
        <p>遊戲玩法</p>
        <img src="../../assets/img/main/wf.png" />
      </div>
    </headers>
    <div class="sortType">
      <div class="fontTitle">
        多人搶莊
        <img
          src="../../assets/img/header/iconfxin.png"
          alt=""
          class="iconfxin"
        />
      </div>
      <p>
        <img src="../../assets/img/header/qqq4.png" alt="" class="righticon" />
      </p>
    </div>
    <div class="sortType">
      <p class="fontTitle">
        好友約戰
        <img
          src="../../assets/img/header/iconfxin.png"
          alt=""
          class="iconfxin"
        />
      </p>
      <p>
        <img src="../../assets/img/header/qqq4.png" alt="" class="righticon" />
      </p>
    </div>
  </div>
</template>
<script>
import headers from "../../components/module/header.vue";
export default {
  components: { headers },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.right_top {
  display: flex;
  align-items: center;
  height: 0.36rem;
  p {
    width: 0.96rem;
    height: 0.34rem;
    font-size: 0.24rem;
    font-weight: 400;
    color: #ffffff;
    opacity: 1;
    margin-right: 0.17rem;
  }
  img {
    width: 0.3rem;
    height: 0.36rem;
  }
}
.content {
  padding: 0 0.32rem;
}
.sortType {
    margin-top: .4rem;
  width: 6.86rem;
  height: 2rem;
  background: linear-gradient(180deg, #2b40fb 0%, #000e3e 100%, #2252ee 100%);
  opacity: 1;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  .fontTitle {
    font-size: 0.36rem;
    font-weight: bold;
    width: 3rem;
    line-height: 0.26rem;
    color: #ffffff;
    text-shadow: 0.04rem 0.04rem 0rem rgba(0, 0, 0, 0.2);
    letter-spacing: 0.1rem;
    margin-right: 2.3rem;
    margin-left: 0.54rem;
    .iconfxin {
      width: 0.37rem;
      height: 0.37rem;
    }
  }
  .righticon {
    height: 0.34rem;
    margin-right: 0.16rem;
  }
}
</style>