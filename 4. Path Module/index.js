import path from "path";

const basename = path.basename("c:\\nodejsapp.html"); //it gives you the end name of the path which is file name
console.log(basename);

const basenameWithoutExt = path.basename("c:\\nodejsapp.html", ".html");
// it the end of the path is file with the extension when can remove the extension just adding , " .extension" .
console.log(basenameWithoutExt);

const dirname = path.dirname("c:\\nodejsapp.html"); // It give the nearest directory from the current file or folder
console.log(dirname);

const extname = path.extname("c:\\nodejs\\app.html"); // it returns the extension of the file
console.log(extname);

const join = path.join("c:", "nodejs", "index.js"); // It safely joins multiple path segments into a single, normalized path. it helps you to avoid / \ in the path
console.log(join);

//GO level up in folder

const levelOneUp = path.join("c:", "nodejs", "index.js", ".."); // add ".." this along with the path which tell the js to give the path one level up path, means the return path will be one level before form the current file or path.
console.log(levelOneUp);

const levelTwoUp = path.join("c:", "nodejs", "index.js", "..", ".."); // it will return 2 level up from current file

const normalize = path.normalize("c:\\nodejs\\app.html"); // It clean ups the messy path

console.log("normalize", normalize);

const parsePath = path.parse("c:\\nodejs\\app.html"); // It returns the object which contains path information like eg: root, dir, base, ext, name
console.log(parsePath);
