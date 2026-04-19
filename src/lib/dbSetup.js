import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/app.db");

const db = new Database(dbPath);

db.exec(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    );

        CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        text TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
`);

// const count = db.prepare("SELECT COUNT(*) AS count FROM users").get().count;
// if (count == 0) {
//   const insert = db.prepare("INSERT INTO users (name,email) VALUES (?,?)");
//   insert.run("Alice", "alice@example.com");
//   insert.run("Bob", "bob@example.com");
//   insert.run("Charlie", "charlie@example.com");
//   console.log("(✔️ Sample users were inserted into database");
// }

export default db;
