<script>
    import {page} from "$app/stores";

    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${$page.params.id}`);
        if (!response.ok) throw new Error('Something went wrong')
        return await response.json();
    }

</script>

{#await getPost()}
    <p>Loading...</p>
{:then post}
    <h2>{post.title}</h2>
    <div>{post.body}</div>
{:catch error}
    <div>{error}</div>
{/await}