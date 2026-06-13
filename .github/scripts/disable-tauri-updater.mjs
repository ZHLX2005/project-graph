/* eslint-disable */
import { readFileSync, writeFileSync } from "fs";

const configPath = "app/src-tauri/tauri.conf.json";
const content = readFileSync(configPath, "utf8");
const config = JSON.parse(content);
config.bundle.createUpdaterArtifacts = false;
writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf8");
console.log("Disabled updater artifacts for CI");
