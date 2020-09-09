var stuff = require('./stuff');
var events = require('events');
var fs = require('fs');

///////////////////////////////////////// NODE FS MODULE///////////////////////////////////
//////////////////////////////sync mean it will read entire other file before moving on to code below (PLACEMENT MATTERS!!!)
//////////// reading a file
// let word = fs.readFileSync('readme.txt', 'utf8');
// console.log(word);

////////////////////////////sync mean it will read entire other file before moving on to code below (PLACEMENT MATTERS!!!)
////////writing to/ creating a file (name of file, content)
// fs.writeFileSync('writeme.txt', 'Add this text to the file');

///////////////////// Async request/method ... needs a callback funcion that fires once process is complete, and will not block code below
// fs.readFile('readme.txt', 'utf8', function (err, data) {
// 	fs.writeFile('writeme.txt',data)
// });

//////////////Deleting a file
// fs.unlink("filename")

/////////////Creating/deleting a Directory
// fs.mkdirSync()
// fs.rmdirSync()

//  /////////////////////////////////////////// NODE EVENTS ///////////////////////////////////////////////////////////////////////
// // Create an eventEmitter object
// var myEmitter = new events.EventEmitter();
// // Bind event(custom name/event) and event handler (call back function) as follows
// myEmitter.on('someEvent', function (mssg) {
// 	console.log(mssg);
// });
// // Fire an event (calling the event name and passing the argumets needed for the callback function)
// myEmitter.emit('someEvent', 'some event is triggered');

//////////////////////////////////////IMPORTED INFO FROM OTHER FILES/MODULES////////////////////////////////////////////

// console.log(stuff.counter(['matt', 'mike', 'jordan']));

// console.log(stuff.randomNum);
