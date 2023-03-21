<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let { code } = data;
</script>

<h1>Raw HTML</h1>

{@html code}
