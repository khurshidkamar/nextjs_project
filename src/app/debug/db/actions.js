"use server";

import db from "@/lib/dbSetup";

export async function getDatabaseContents() {
  try {
    const tables = db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`,
      )
      .all();
    const result = {};

    for (const t of tables) {
      const rows = db.prepare(`SELECT * FROM ${t.name}`).all();
      result[t.name] = rows;
    }

    return result;
  } catch (error) {
    console.log("DB debug error:", error);
    throw new Error("Failed to fetch databse info");
  }
}
