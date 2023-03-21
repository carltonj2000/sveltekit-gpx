<script>
	import '../reset.css';
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<div>
	<slot />
</div>

<style>
	div {
		padding: 1rem 2rem;
	}
</style>
