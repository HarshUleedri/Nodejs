import fs from "fs";

// in sync every thing can be done same as promise but here we write Sync followed by method name like fs.mkdirSync()

fs.mkdirSync("c:\\nodejs\\test\\demo", { recursive: true });
