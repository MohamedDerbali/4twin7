const fs = require("fs");
try{
// fs.readFile("message.txt", {encoding: "utf-8"}, (err, content)=>{
//     console.log(content);
// })
// const content = fs.readFileSync("message.txt", {encoding: "utf-8"});
// console.log(content)
// console.log("hello la classe");
const printHelloMessage = (message) => {
    for(let i = 0 ; i<5 ; i++){
        console.log(message);
    }
}
// setTimeout(printHelloMessage, 5000)
const arr = ["hello", "hey"];
arr&&arr.map((item)=>{
    printHelloMessage(item);
})
// console.log("hello")
}catch(err){
    console.log(err);
}