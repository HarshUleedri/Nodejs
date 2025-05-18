import * as fs from "fs/promises";

//creating Directory / folder
try {
  await fs.mkdir("c:\\nodejs"); // it create folder only if the previous folder exist
  await fs.mkdir("c:\\nodejs\\course\\tailwindcss", { recursive: true }); // if your not confirm that previous folder does exist or not then use { recursive: true} what does is it just create the folder if folder does not exist in the path
  console.log("folder created...");
} catch (error) {
  console.log(error);
}
