<script>
    const getPosts = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        if (!response.ok) throw new Error('Something went wrong')
        return await response.json();
    }
</script>

<h2>Posts</h2>

<div>Posts go here</div>

<div>
    <ul>
        {#await getPosts()}
            <p>Loading...</p>
        {:then posts}
            {#each posts as post}
                <ul>
                    <li><a href={`/posts/${post.id}`}>{post.title}</a></li></ul>
            {/each}
            {:catch error}
            <div>{error}</div>
        {/await}
    </ul>
</div>