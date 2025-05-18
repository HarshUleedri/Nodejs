import * as fs from "fs/promises";

try {
  const files = await fs.readdir("c:\\nodejs"); // It returns array of the items inside of the folder /directory
  console.log(files);
  for (let file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}
