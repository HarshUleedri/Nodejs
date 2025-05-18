import { URL } from "url";

const myUrl = new URL("http://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.port);
console.log(myUrl.href);
console.log(myUrl.protocol);
console.log(myUrl.search);
console.log(myUrl.searchParams);

console.log(myUrl.toString);
console.log(myUrl.toJSON);
