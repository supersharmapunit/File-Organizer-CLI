function help101() {
    let dirPath = "Directory Path"
    return `List of all commands:-
    node main.js tree ${dirPath}
    node main.js organize ${dirPath}
    node main.js help`;
}


module.exports = {
    fxn : help101
};