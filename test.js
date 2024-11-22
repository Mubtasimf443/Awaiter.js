/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import { fileURLToPath } from "url";
import { waidTillFileLoad } from "./index.js";
import path, { dirname, resolve } from 'path'
let __dirname=dirname(fileURLToPath(import.meta.url))

await waidTillFileLoad({
    filePath:resolve(__dirname, './readme.md'),
    checkingTime:1000,
    maxWaitTime:8000,
});


