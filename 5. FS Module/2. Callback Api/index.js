import fs from "fs";

// in callback every thing can be done same as promise but here we write call in the method instead of try catch

fs.mkdir("c:\\nodejs", (error) => {
  if (error) throw error;
  console.log("Directory Created...");
});
