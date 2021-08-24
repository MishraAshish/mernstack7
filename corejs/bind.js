//bind : changes the context of a function at runtime, and doesn't executes immediately but when required

var User = {
    name : "Margi",
    age : 21,
    getName : function () {                
                console.log("this "+ this.name)

                setTimeout(function () {                    
                    console.log("this - inside settimeout "+ this.name)                   
                }.bind(this), 1000)

                return this.name
            }

}

User.getName();




//html example
//<button id="newBtnBind">Practice Div</button>
var btn = document.getElementById("newBtnBind")
var onclick = function(){alert("The name is "+ this.name)}

btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global