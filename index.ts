import * as wasp from "@wasp/core";
import DatabasePlugin from "@wasp/db-typeorm";
import * as models from "./models";
import * as typeorm from "typeorm";

async function main() {
    // execute endpoint registration logic
    await wasp.require.fromDir(__dirname + "/endpoints", true);
    const app = new wasp.Application(await wasp.config.loadFromDir(__dirname + "/config"), [
        new DatabasePlugin(Object.values(models), typeorm.getConnectionManager())
    ]);
    await app.start();
}

main().catch(console.error);
