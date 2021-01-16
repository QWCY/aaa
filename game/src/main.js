import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {PullRefresh} from 'vant';
import 'vant/lib/index.css';
import VueCookies from 'vue-cookies'
import VueClipboard from 'vue-clipboard2'
import VueI18n from 'vue-i18n';
Vue.use(VueClipboard)
Vue.use(VueCookies)
Vue.use(PullRefresh);
Vue.use(VueI18n);
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh-HK',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-HK': require('./common/lang/cn'),   // 中文语言包
    'zh-EN': require('./common/lang/en')    // 英文语言包
  }
})

const mainVue = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//初始化

import { staticWeb3 } from '../public/static/getWeb3.js'
import { defaultAbi,addressWGLS,addressWGL,addressWGX } from '../public/static/abi.js'

//定义合约
function contractInit(){
	//wgls
	window.wglsContract = new web3js.eth.Contract(defaultAbi,addressWGLS);
	//wgl
	window.wglContract = new web3js.eth.Contract(defaultAbi,addressWGL);
	//wgx
	window.wgxContract = new web3js.eth.Contract(defaultAbi,addressWGX);
}

//获取web3

let intva = ''
window.web3js = staticWeb3() ;
if(window.web3js == 'nan'){
	var count = 0 ; 
		intva = setInterval(()=>{
		if(count == 20){
			clearInterval(intva);   
			return ;
		}
		if(window.web3js == 'nan' ){
			window.web3js =staticWeb3() ;
			count ++ ;
		}else{
			web3.eth.getCoinbase(function(err,result){ 
				// console.log(result);
				document.cookie="userAddress="+result;
				contractInit()
				//启动APP
				mainVue.$mount('#app')
			});
			clearInterval(intva);
		}
	},1000)
}else{
	web3.eth.getCoinbase(function(err,result){ 
		// console.log(result);
		document.cookie="userAddress="+result;
		contractInit()
		//启动APP
		mainVue.$mount('#app')
	});
}