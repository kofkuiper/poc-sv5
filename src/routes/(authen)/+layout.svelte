<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="bg-gray-50 dark:bg-gray-900">
	{@render children()}
</main>
