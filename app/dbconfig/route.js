// import sqlite3 from "sqlite3";
// import { open } from "sqlite";

// // Let's initialize it as null initially, and we will assign the actual database instance later.
// let db = null;

// // Define the GET request handler function
// export async function GET(req, res) {
//   // Check if the database instance has been initialized
//   if (!db) {
//     // If the database instance is not initialized, open the database connection
//     db = await open({
//       filename: "../dbconfig/mydb.db", // Specify the database file path
//       driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
//     });
//   }

//   // Perform a database query to retrieve all items from the "items" table
//   const items = await db.all("SELECT * FROM todos");

//   // Return the items as a JSON response with status 200
//   return new Response(JSON.stringify(items), {
//     headers: { "Content-Type": "application/json" },
//     status: 200,
//   });
// }









const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./todos.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        done BOOLEAN NOT NULL
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created todos table.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM todos`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("All rows deleted from todo table.");

        // Insert new data into the products table
        const values1 = [
          "task 1",
          false,
        ];
        const values2 = [
          "task 2",
          false,
        ];

        const values3 = [
          "task 3",
          false,
        ];

        const values4 = [
          "task 4",
          false,
        ];

        const insertSql = `INSERT INTO todos(task, done) VALUES(?, ?)`;
        const selectSql = `SELECT * FROM todos`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values3, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values4, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        let sql = `SELECT * from todos`;

        db.all(sql, [], (err, rows) => {
          if (err) {
            throw err;
          }
          rows.forEach((row) => {
            console.log(row.name);
          });
        });
        

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the connection.");
        });
      });
    }
  );
});

// export async function GET(req, res) {
  // Check if the database instance has been initialized
  // if (!db) {
  //   // If the database instance is not initialized, open the database connection
  //   db = open({
  //     filename: "./todos.db", // Specify the database file path
  //     driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
  //   });
  // }

  // // Perform a database query to retrieve all items from the "items" table
  // const items = db.all("SELECT * FROM todos");

  // JSON.stringify(items);
  // Return the items as a JSON response with status 200
  // return new Response(JSON.stringify(items), {
  //   headers: { "Content-Type": "application/json" },
  //   status: 200,
  // });
// }