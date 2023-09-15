export async function get({ params }) {
    // get todos from database using an ORM like Prisma
    const todos = [
        {id: 1, title: 'Finish Svelte Screencast', isComplete: false},
        {id: 2, title: 'Take over world', isComplete: false},
    ];

    return {
        status: 200,
        body: todos
    };
}