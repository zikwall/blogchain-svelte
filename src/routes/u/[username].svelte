<script context="module" lang="ts">
    export async function preload({ params }) {
        const { username } = params

        return {
            user: { username: username }
        }
    }
</script>

<script lang="ts">
    export let user: { username: string };
</script>

<svelte:head>
    <title>{user.username}</title>
</svelte:head>

<h1>Hello {user.username}</h1>
