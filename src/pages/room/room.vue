<template>
  <div class="room">
    <div class="tv">
      <div class="poster" @click="playIt" v-show="paused"></div>
      <video src="http://downloadf.dewmobile.net/daren/9501fc93d9b5c9988bae0102a5ecdc83-151349.mp4" id="movieItem" @click="playIt"></video>
    </div>
    <div class="btns">
      <div class="repick" @click="repick"></div>
      <div class="invite" @click="inviteShow"></div>
      <div class="fresh" @click="fresh"></div>
    </div>
    <div class="bigMask" v-show="invite || install" @click="hideIt">
      <div class="inviteNotice" v-show="invite"></div>
      <div class="installNotice" v-show="install"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'room',
    mounted () {
    },
    computed: mapState({

    }),
    data () {
      return {
        paused: true,
        invite: false,
        install: false
      }
    },
    methods: {
      playIt: function () {
        const videoItem = document.getElementById('movieItem')
        if (videoItem.paused) {
          this.paused = false
          videoItem.play()
        } else {
          this.paused = true
          videoItem.pause()
        }
      },
      repick: function () {
      },
      inviteShow: function () {
        this.invite = true
      },
      fresh: function () {
//        判断STORE里的人数是否够，需要重新发送请求，如不够出弹窗
      },
      hideIt: function () {
        let hide = this.invite || this.install
        if (hide) {
          this.invite = false
          this.install = false
        }
      },
      setCookie: function (name, value) {
        let Days = 30
        let exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
      },
      deleteCookie: function () {
        let exp = new Date()
        exp.setTime(exp.getTime() - 1)
        let cval = this.getCookie(name)
        if (cval !== null) {
          document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
        }
      }
    }
  }

</script>

<style scoped>
  .room{
    width: 100%;
    height: 12.8rem;
    background: url("../../assets/imgs/beijing.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 1.53rem;
  }
  .tv{
    position: relative;
    width: 6.17rem;
    text-align: center;
    margin: 0 auto;
  }
  video{
    position: absolute;
    height: 3.6rem;
    width: 6.17rem;
    top:0;
    left: -.3%;
  }
  .poster{
    position: absolute;
    height: 3.58rem;
    width: 100%;
    background: url("../../assets/imgs/dianshi.png") no-repeat;
    background-size: 100% 100%;
    z-index: 9;
  }
  .btns{
    width: 5.44rem;
    height: 3.88rem;
    position: absolute;
    bottom: 0;
    left: 11%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .invite{
    height: 48%;
    width: 33%;
    float: left;
    margin-bottom: 2rem;
    opacity: .2;
  }
  .repick{
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 60%;
    width: 33%;
    float: left;
    opacity: .2;
  }
  .fresh{
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 60%;
    width: 33%;
    float: left;
    opacity: .2;
  }
  .bigMask{
    position: fixed;
    width: 100%;
    height: 12.8rem;
    background-color: rgba(0,0,0,.8);
    top:0;
    z-index: 99;
  }
</style>
