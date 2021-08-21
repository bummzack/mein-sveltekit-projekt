<script>
	export let pages = [];
</script>
<style>
	:global(html, body) {
		margin: 0;
	}

	main, nav {
		font-family: Helvetica, sans-serif;
	}
</style>
<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		{#each pages as page}
			<li>
				<a href="/{page.slug}">{page.title}</a>
			</li>
		{/each}
	</ul>
</nav>
<main>
	<slot></slot>
</main>
<script context="module">
	export async function load({fetch}) {
		try {
			const req = await fetch(`/pages.json`);
			const pages = await req.json();
			return {
				props: {
					pages
				}
			}
		} catch (error) {
			return {
				status: 500,
				error
			}
		}
	}
</script>
