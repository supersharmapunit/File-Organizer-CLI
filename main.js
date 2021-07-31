let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
const help = require("./commands/help");

// main input
let inputArr = process.argv.slice(2);
let inputCommand = inputArr[0];
// console.log(inputCommand);

switch (inputCommand) {
    case "tree":
        treeObj.treefxn(inputArr[1]);
        break;
    case "help":
        console.log(helpObj.fxn());
        break;
    case "organize":
        organizeObj.organizefxn(inputArr[1]);
        break;

    default:
        console.log("please enter commmand correctly")
        break;
}


//  input -> node main.js tree "path"
// Print->tree command executed with path ""
//  input -> node main.js organize "path"
// Print ->organize command executed with path ""
//  input -> node main.js help 
    // Print -> list of all the commands
            // 1. node main.js tree "path"
            // 2. node main.js organize "path"
            // 3. node main.js help