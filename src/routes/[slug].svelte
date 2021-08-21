<script>
    export let data = {};
    export let content;
</script>
<style>
img {
	max-width: 200px;
	height: auto;
}

:global(img.wide) {
	max-width: 400px;
}

:global(img.narrow) {
	max-width: 200px;
}

:global(img.blurred) {
	filter: blur(5px);
}
</style>

<article>
    {@html content}
	{#if data.image}
		<img src={data.image} class={data.imageClass} alt="Image for {data.title}">
	{/if}
</article>

<script context="module">
    export async function load({page, fetch}) {
        try {
            const {slug} = page.params;
            const req = await fetch(`/${slug}.json`);
            const data = await req.json();
            return {
                props: {
                    ...data
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
