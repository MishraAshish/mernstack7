// each javascript file is an indepenedent module, which can be accessed from another module
// for data to be accessed in anothe module/file we need to export it as a module

var user = {
    name : "Margi",
    age : 22,
    address : "Somewhere in new york",
    getName : function () {
        return this.name
    }
}

module.exports = user;