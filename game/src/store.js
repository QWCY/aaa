import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//服务器地址w
		// webPath: 'http://app.wgls.net/app/',
		//控制首页板块界面展示内容
		homeViewActive: 0,
		//用户地址
		userAddress : '',
		//初始化信息
		initInfo : {}
	},
	mutations: {
		homeViewActiveChange(state, type) {
			state.homeViewActive = type
		},
		userAddressChange(state, val){
			state.userAddress = val
		},
		initInfoChange(state, val){
			state.initInfo = val
		}
	},
	actions: {

	}
})
