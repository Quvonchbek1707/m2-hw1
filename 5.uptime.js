import { maxHeaderSize } from "http";
import os from "os";

export function getSystemUptime(){
    return Math.floor(os.uptime()/60)
}