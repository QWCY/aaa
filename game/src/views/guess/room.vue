<template>
    <div class="room">
		<div class="room_top">
			<div class="room_name">100積分場</div>
			<div class="room_num">房間號：324</div>
			<div class="my_jf">
				<img src="../../assets/img/guess/lanxx.png" /> 我的積分
				<span>3653</span>
			</div>
		</div>
    </div>
</template>

<script>
	import Bus from "@/components/bus.js";
	import Vue from "vue";
	import {
		Icon,Popup 
	} from "vant";
	Vue.use(Icon).use(Popup);
	
	import headers from '../../components/module/header.vue'
	export default {
		name: "room",
		components: {headers},
		data() {
			return {
				
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
	
</style>