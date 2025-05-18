// (function (exports, require, module, __filename, __dirname) {
//   console.log(__filename);
// })();

// Even the __dirname and __filename is not diclare still we can access because the code in  file is wrappred with IIFE function who has this two variable along with export, require, module.

console.log(__dirname); //this give the top folder name (directive name)
console.log(__filename); // this gives the file where it is written like index.js
