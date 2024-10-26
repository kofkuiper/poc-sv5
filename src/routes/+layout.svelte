<script lang="ts">
	import Footer from '$lib/compenents/Footer.svelte';
	import Navbar from '$lib/compenents/Navbar.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import authenState from '../states/authen.state';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
	let token = $state<string | null>(null);

	$effect(() => {
		token = authenState.get();
	});
</script>

<!-- {#snippet navbar()} // inline component
	<Navbar bind:token />
{/snippet}

{#snippet footer()}
	<Footer />
{/snippet} -->

<Navbar bind:token />

{@render children()}
