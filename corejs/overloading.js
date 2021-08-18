//inheritance
//abstraction
//encapsulation
//polymorphism - 1.//overrriding 2.//overloading

// javascript doesn't have overloading but overwriting of functions
    
    treatCovidPatient("Third Param1", "Third Param2");

    function treatCovidPatient() {
        console.log("Treatment 1")
    }
    treatCovidPatient();

    function treatCovidPatient(params) {
        console.log("Treatment 2")
    }
    treatCovidPatient("second Param1");

    function treatCovidPatient(param1, param2) {
        console.log("Treatment 3")
    }

    function treatCovidPatient(params, param2, param3) {
        console.log("Treatment 4")
    }
    treatCovidPatient("4th Param1", "4th Param2", "4th Param3");