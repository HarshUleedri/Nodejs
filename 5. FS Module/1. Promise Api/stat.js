import * as fs from "fs/promises";

try {
  const info = await fs.stat("info.txt");
  console.log(info);
  console.log(info.isDirectory()); // it tell that is this directory or not
  console.log(info.isFile()); // it tell that is this file or not
} catch (error) {
  console.log(error);
}
