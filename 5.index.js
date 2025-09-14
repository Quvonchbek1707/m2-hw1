import { getFreeMemory } from "./5.memory.js";
import { getProcessInfo } from "./5.process.js";
import { getSystemUptime } from "./5.uptime.js";

export function showSystemInfo() {
  console.log("=== System Information ===");
  console.log(`Free memory: ${getFreeMemory()} MB`);

  const proc = getProcessInfo();
  console.log("Process info:", proc);

  console.log(`System uptime: ${getSystemUptime()} minutes`);
}
