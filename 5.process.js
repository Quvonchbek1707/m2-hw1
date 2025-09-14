import os, { platform } from "os";

export function getProcessInfo(){
    return {
        pid: process.pid,
        platform: process.platform,
        nodeVersion: process.nodeVersion,
        cwd: process.cwd()
    };
}