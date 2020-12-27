<script context="module" lang="ts">
	export async function preload({ params }) {
		const { id } = params;

		const res = await this.fetch(`http://localhost:3001/api/v1/content/${id}`);
		const article = await res.json();

		return { article };
	}
</script>

<script lang="ts">
	import type { Article } from '@blogchain/types/article';

	export let article: {
		content: Article
	};
</script>

<svelte:head>
	<title>{article.content.title}</title>
</svelte:head>

<h1>{article.content.title}</h1>

<div class="content">
	{@html article.content.content}
</div>
