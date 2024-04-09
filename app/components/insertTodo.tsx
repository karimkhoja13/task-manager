'use server'

import { db } from '../../db';
import { tasklist } from 'db/schema';
import { eq } from 'drizzle-orm';

export async function insertTodo(task: string) {
    
    console.log('inserted');
    var newTodo;

    newTodo = await db.insert(tasklist).values({ task: task, done: 0 });
    console.log(newTodo);
}