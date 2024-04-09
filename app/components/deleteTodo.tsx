'use server'

import { db } from '../../db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';

export async function deleteTodo(id: number | null) {
    if (id === null) {
        console.log('Invalid ID provided.');
        return;
    }

    console.log('Deleting todo with ID:', id);
    try {
        // Perform the deletion operation
        const deletedTodo = await db.delete(tasklist).where(eq(tasklist.id, id));
        console.log('Deleted todo:', deletedTodo);
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}