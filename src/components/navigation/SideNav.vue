<template>
	<div id="side-nav">
		<button class="closebtn">x</button>
		<button
			v-for="item in sidebarItems"
			:key="item.text"
			@click="item.onClick">
			{{ item.text }}
		</button>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	props: {
		links: {
			type: Array,
			required: false,
		}
	},
	data: () => ({
		sidebarItems: [
			{ onClick: () => console.log('ITEM 1'), text: 'Item 1'},
			{ onClick: () => console.log('ITEM 2'), text: 'Item 2'},
			{ onClick: () => console.log('ITEM 3'), text: 'Item 3'},
			{ onClick: () => console.log('ITEM 4'), text: 'Item 5'},
		]
	})
})
</script>

<style scoped>
.side-nav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

</style>