import os from "os";


const args = process.argv.slice(2);

if (args.length === 1 && args[0] === "check-memory") {
    const freeMemMB = Math.round(os.freemem() / (1024 * 1024));
    console.log(`Free memory: ${freeMemMB} MB`);
} else {
    console.log("Usage: node app.js check-memory");
    process.exit(1);
}
