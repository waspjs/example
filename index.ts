import * as wasp from "@wasp/core";

async function main() {
    const app = new wasp.Application(await wasp.config.loadFromDir(__dirname + "/config"));
    await app.server.start();
}

main().catch(console.error);
