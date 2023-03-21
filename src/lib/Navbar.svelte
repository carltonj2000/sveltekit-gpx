<script lang="ts">
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Raw HTML', href: '/raw' },
		{ name: 'Utilities', href: '/utils' }
	];
	import { page } from '$app/stores';
</script>

<nav>
	{#each links as { href, name }}
		<a {href} class:active={$page.url.pathname === href}>{name}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: 1rem;
		background: hsl(var(--copy-base-color));
		padding: 1rem 2rem;
	}
	a {
		text-decoration: none;
		background: hsl(var(--surface-1-color));
		padding: 0.5rem 1rem;
		border-radius: 2rem;
	}
	.active {
		background: hsl(var(--surface-2-color));
		border: 2px solid hsl(var(--emphasis-color));
	}
</style>
