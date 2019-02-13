
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
// add based on index
Dogs.add(new AnimalsModel({
    dogName:'Puge',
    color:'brown'
}),{at:0}); 


// get the models in the collecion object

var dog1 = Dogs.at(0);

var dog2 = Dogs.get("c2"); // we can also get using backbone ID

// remove the models in the collecion object
Dogs.remove(dog1);

//push insert the object into last index of the array
Dogs.push(new AnimalsModel({
    dogName: "Golden",
    color: "Gold"
}));

//Pop remove last indexo of an array
Dogs.pop();


var object = Dogs.where({ color: "White" }); // It returns Array 
console.log(object);

var firstObject = Dogs.findWhere({ color: "White" }); // It returns first instance
console.log(firstObject);


//Filter method we can creat a custom functions

var filderDogName = Dogs.filter(function(dog){
    console.log(dog);
    return dog.get("dogName")===('Puge');
});

console.log(filderDogName);