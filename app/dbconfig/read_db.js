const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./todos.db');

let sql = `SELECT * FROM todos`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(typeof row.task + ' ' + row.done + ' ' + typeof row.id);
  });
});

// close the database connection
db.close();