# npm Awaiter.js 
<p> this npm package is stop the javascript code execution </p>

## Awaiter
```
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
import Awaiter from "Awaiter.js";

await Awaiter(1000)
//It will stop the node.js code for 1000 mili seconds or 1 seconds
await Awaiter(3000)
//It will stop the node.js code for 3000 mili seconds or 3 seconds
await Awaiter(5000)
//It will stop the node.js code for 5000 mili seconds or 5 seconds
```

## waidTillFileLoad
```
import { fileURLToPath } from "url";
import { waidTillFileLoad } from "./index.js";
import path, { dirname, resolve } from 'path'
let __dirname=dirname(fileURLToPath(import.meta.url))

await waidTillFileLoad({
    filePath:resolve(__dirname, './readme.md'),
    checkingTime:1000,
    maxWaitTime:8000,
});


```
