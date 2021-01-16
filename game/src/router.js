import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import recharge from './views/wallet/recharge.vue'
import exchange from './views/wallet/exchange.vue'
import financialDetails from './views/wallet/financialDetails.vue'
import roomType from './views/guess/roomType.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
    routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				index: 5,
			}
		},
		{path: '/recharge',name: 'recharge',component: recharge,meta: {index: 20,}},
		{path: '/exchange',name: 'exchange',component: exchange,meta: {index: 20,}},
		{path: '/financialDetails',name: 'financialDetails',component: financialDetails,meta: {index: 20,}},
		{path: '/roomType',name: 'roomType',component: roomType,meta: {index: 20,}},
	]
})