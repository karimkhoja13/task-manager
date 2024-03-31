
import { db } from 'db';
import React from 'react'
import { tasklist } from 'db/schema';

export default async function page() {

    const data1:any = await db.select().from(tasklist)

    console.log(data1);

  return (
    <div>page</div>
  )
}
