var shopper = {
    firstName: "Leo",
    lastName: "Grocery",
    age: 70,

    grocerycart: [ "apples", "oranges", "pineapples", "pizza", "bread", "carrots"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

if("apples" === "oranges"){
    console.log("apples are oranges")
} else if("pineapples" === "pizza"){
    console.log("pineapples are pizza")
} else if("bread" === "carrots"){
    console.log("bread is not carrots")
} else {
    console.log("This is the Grocery JS assignment")
}

Name = shopper.fullName()

console.log(shopper)
