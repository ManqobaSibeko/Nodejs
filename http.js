 //--------------------------------------------------------------------
 // basic 
 
//  const http = require('http');

//  //create a server object// when we get a request we want to write a response

//  http.createServer((req,res)=>{
//     //write a response ( //write something out to the browser)
//     res.write('hello World');
//     res.end();
//  })

//it must listen to a port in order for it to work
//  .listen(5000, ()=> console.log('server running....'));

  //--------------------------------------------------------------------
const http = require('http');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     //checking the url if its slash 
//     if (req.url === '/'){
        
//         //read the file 
//         fs.readFile(path.join(__dirname, './','about.html'),
//         (err,content) => {

//             //check for an error
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             //write something out to the browser
//             res.write(content);
//         });

//     }

// });
// const Port = process.env.Port || 5000;

// server.listen(Port, () => console.log(`Server running on port ${Port}`));



//--------------------------------------------------------------------
//Build file path

 
