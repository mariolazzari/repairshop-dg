import { db } from ".";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "src/db/mirations" });
    console.log("Migration completed");
  } catch (ex) {
    console.error("Migration error", ex);
    process.exit(1);
  }
};

main();
