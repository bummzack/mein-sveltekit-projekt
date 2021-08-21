<script>
    export let data = {};
    export let content;
</script>

<article>
    {@html content}
	{#if data.image}
		<img src={data.image} alt="Image for {data.title}">
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
