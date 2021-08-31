//classes :  classes with syntax similar to java, .net 
//are special type of functions in javascript that give us desired behaviour

class Vaccination 
{
    constructor(name, date, place) {
        this.name = name;
        this.date = date;
        this.place = place;
    }

    getSchedule(){
        return {
            name : this.name,
            location : this.place,
            date : this.date
        }
    }
}

let VccnObj = new Vaccination("Saranya", (new Date()).toDateString(), "7th Street New York City" )

console.log(VccnObj.getSchedule())