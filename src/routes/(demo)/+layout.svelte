<script lang="ts">
	import Footer from '$lib/compenents/Footer.svelte';
	import Navbar from '$lib/compenents/Navbar.svelte';
	import authenState from '../../states/authen.state';
	import '../../app.css';

	let { children } = $props();
	let token = $state<string | null>(null);

	$effect(() => {
		token = authenState.get();
	});
</script>

{@render children()}
