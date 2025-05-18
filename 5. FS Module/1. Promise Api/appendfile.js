import * as fs from "fs/promises";

try {
  await fs.appendFile("README.md", "Love development interactive websites");
} catch (error) {
  console.log(error);
}
