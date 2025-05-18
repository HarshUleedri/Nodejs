import * as fs from "fs/promises";

try {
  const file = await fs.readFile("README.md", "utf-8"); // it returns Buffer of the file to convert it into text use "utf-8"
  console.log(file);
} catch (error) {
  console.log(error);
}
