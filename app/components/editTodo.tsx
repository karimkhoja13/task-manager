'use server'

import { db } from '../../db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';

export async function editTodo(id, done) {
    
    console.log('edited successfully',id);
    var updatedTodo;

    if(done) {
      updatedTodo = await db
      .update(tasklist)
      .set({ done: 0 })
      .where(eq(tasklist.id, id));
    }
    else {
      updatedTodo = await db
      .update(tasklist)
      .set({ done: 1 })
      .where(eq(tasklist.id, id));
    }
      return updatedTodo;
}