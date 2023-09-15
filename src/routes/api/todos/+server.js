export const GET = async (event) => {
    // get todos from database using an ORM like Prisma
    const todos = [
        {id: 1, title: 'Finish Svelte Screencast', isComplete: false},
        {id: 2, title: 'Take over world', isComplete: false},
    ];

    return new Response(JSON.stringify(todos));
}