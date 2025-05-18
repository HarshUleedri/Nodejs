import * as fs from "fs/promises";

try {
  await fs.writeFile(
    "README.md",
    "Hello I am harsh. A web Develper and build-in designer"
  ); ///it create and write the file but it there is file already then it overwrite the content of the file with the content provided
} catch (error) {
  console.log(error);
}
