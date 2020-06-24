<template>
  <div id="app">
	<TheNavigation />  
    <router-view />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import {getState} from './storage'
export default {
	components:{
		TheNavigation
	},
	beforeCreate(){
		const state = JSON.parse(getState())
		this.$store.dispatch('setInitialState',state)
	}
}
</script>
