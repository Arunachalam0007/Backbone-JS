
var AnimalsModel = Backbone.Model.extend(); //creating model

var AnimalsCollection = Backbone.Collection.extend({ // creating collection(have group of model values)
    model: AnimalsModel // assign the model into the collection
});

// They are two types to add the modules values

//way 1 while instantiate the collection itself

var Dogs = new AnimalsCollection([
    new AnimalsModel({
        dogName: "puppie1",
        color: "White"
    }),
    new AnimalsModel({
        dogName: "puppie2",
        color: "White"
    }),
    new AnimalsModel({
        dogName: "puppie3",
        color: "White"
    })
]);


// way 2 using add method

Dogs.add(
    new AnimalsModel({
        dogName: "puppie4",
        color: "White"
    })
);


// get the models in the collecion object

var dog1 = Dogs.at(0);

var dog2 = Dogs.get("c2"); // we can also get using backbone ID
// console.log("Dog 1 and 2 is :");
// console.log(dog1);
// console.log(dog2);
// remove the models in the collecion object
Dogs.remove(dog1);
// console.log(Dogs);


//Underscore methods 

//push 
//pop

var object = Dogs.where({ color: "White" });
console.log(object);

var firstObject = Dogs.findWhere({ color: "White" });
console.log(firstObject);