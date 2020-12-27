<script context="module" lang="ts">
	export async function preload({ params }) {
		const res = await this.fetch(`http://localhost:3001/api/v1/contents`);
		const articles = await res.json();

		return { articles };
	}
</script>

<script lang="ts">
	import type { Articles } from '@blogchain/types/article';

	export let articles: Articles;
</script>

<svelte:head>
	<title>Welcome to Blogchain Svelte</title>
</svelte:head>

<div class='content'>
	<ul>
		{#each articles.contents as article}
			<li><a rel="prefetch" href="post/{article.id}">{article.title}</a></li>
		{/each}
	</ul>
</div>