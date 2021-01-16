import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import recharge from './views/wallet/recharge.vue'
import exchange from './views/wallet/exchange.vue'
import financialDetails from './views/wallet/financialDetails.vue'
import roomType from './views/guess/roomType.vue'
import two from './views/rests/two.vue'
import one from './views/rests/one.vue'
import three from './views/rests/three.vue'
import seven from './views/rests/seven.vue'
import four from './views/rests/four.vue'
import six from './views/rests/six.vue'
import five from './views/rests/five.vue'
import eight from './views/rests/eight.vue'


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
		{path: '/two',name: 'two',component: two,meta: {index: 20,}},
		{path: '/three',name: 'three',component: three,meta: {index: 20,}},
		{path: '/one',name: 'one',component: one,meta: {index: 20,}},
		{path: '/seven',name: 'seven',component: seven,meta: {index: 20,}},
		{path: '/four',name: 'four',component: four,meta: {index: 20,}},
		{path: '/six',name: 'six',component: six,meta: {index: 20,}},
		{path: '/five',name: 'five',component: five,meta: {index: 20,}},
		{path: '/eight',name: 'eight',component: eight,meta: {index: 20,}},

	]
})