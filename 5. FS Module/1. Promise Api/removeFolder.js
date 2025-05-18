import * as fs from "fs/promises";

try {
  await fs.rmdir("c:\\nodejs");
} catch (error) {
  console.log(error);
}
