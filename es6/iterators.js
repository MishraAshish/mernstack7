//Filter, Map, Reduce and Some - Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 5, name : "Robin Hood", savedby : "Robin"}
];

//1. List of the persons saved by IronMan

let personSavedByIronMan = personsList.filter((person)=> person.savedby === "IronMan" ? person : "")
console.log(personSavedByIronMan)
//keeps the base object intact (preserves the immutability)
//console.log(personsList)

//2. List of person names saved by CaptainAmerica
let personSavedByCA = personsList.map((person)=> 
                person.savedby === "CaptainAmerica" ? { "Person Name" : person.name +" - CA"} :"")
                .filter((name)=> name!="")
console.log(personSavedByCA)

//console.log(personsList)

//3. Is there someone saved by Robin
let anyOneSavedByRobin = personsList.some((person)=>person.savedby == "SpiderMan")
console.log(anyOneSavedByRobin)

//4. List the number of persons saved by each avenger

let personSavedByEachAvenger = personsList.reduce((perviousVal, currentVal, curentIndex, array)=>{
                            //console.log("prevValue", perviousVal)
                            //console.log("currenVal", currentVal)
                            //console.log("curentIndex", curentIndex)
                            //console.log("array", array)
                            
                            perviousVal[currentVal.savedby] = perviousVal[currentVal.savedby] ? perviousVal[currentVal.savedby] + 1 : 1;

                            return perviousVal;
                        }, new Set())


console.log(personSavedByEachAvenger)


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present