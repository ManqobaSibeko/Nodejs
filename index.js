//1 const person = require('./person.js');

// console.log(person);
// console.log('');
// console.log(person.name);

//----------------------------------------------------------------------------------------------------------------


//2 const Person = require('./person.js');

// const person1 = new Person('John Dee', 30)

// person1.greeting();

//----------------------------------------------------------------------------------------------------------------

// // Path Module
// const path = require('path');

// // Base file name
// console.log(__filename);
// console.log(path.basename(__filename)); //

//directory name
// console.log(path.dirname(__filename)); //

//file extention
// console.log(path.extname(__filename)); //

// //create path object
// console.log(path.parse(__filename).base ); 

//concentenate path create a new path from _dirname (current directory)
//console.log(path.join(__dirname, 'test', 'hello.html'));

//----------------------------------------------------------------------------------------------------------------

//
const fs = require('fs');
const path = require('path');



//create a folder = fs.mkdir
// fs.mkdir(path.join(__dirname,'./tes'),{},(err)=>{
//     if(err) throw err;
//     console.log('folder created...')
// });

// create and write on the file =fs .writeFile(overrides what is in there) then use appendFile then check errors
// fs.writeFile(path.join(__dirname,'./test','hello.txt'),'this is the sentence found in the hello.txt file',(err)=>{
//     if(err) throw err;
//     console.log('file created...');

//     //appendfile 
//     fs.appendFile(path.join(__dirname,'./test','hello.txt'),'.......this is the appended sentence',(err)=>{
//         if(err) throw err;
//         console.log('appended');
//     });

// }); 

//readFile 

// fs.readFile(path.join(__dirname,'./test','hello.txt'),'utf8',(err,data)=>{
// if (err) throw err;
// console.log(data);
// });

//rename

// fs.rename(path.join(__dirname,'./test','hello.txt'),'utf8',(err,data)=>{
// if (err) throw err;
// console.log(data);
// });
//----------------------------------------------------------------------------------------------------------------

//URL

const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log('');
//Serial URL 
console.log("href:  "+ myUrl.href);
console.log('');

//Get the host
console.log("host:  " + myUrl.hostname)
console.log('');

//Get the pathname
console.log("pathname:  " + myUrl.pathname)
console.log('');

//Get the serialized query
console.log("search:    "+ myUrl.search)
console.log('');

//Get the params object
console.log("params:  " + myUrl.searchParams)
console.log('');
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------



