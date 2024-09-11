import { defineConfig } from "drizzle-kit";
import { env } from "./source/env";

export default defineConfig({
    schema: "./schema.ts",
    out: "./.migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
