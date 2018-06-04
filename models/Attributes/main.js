//MODELS ATTRIBUTES

var Song = Backbone.Model.extend({
    defaults: {
        model: "AttributeModles"
    },
    initialize: function () {
        console.log("New Song has been Created!!!");
    }
});

var song = new Song();

// accessing the attributes in an model

//set  Attributes
song.set("WithoutJSONValue"); // set the key value
song.set({
    id: 1,
    name: "arun",
    "key": "value"
}); // this will override the previous one... This set for key and values pair

//get Attributes
var name = song.get('name');
console.log(name);// arun

//delete one i.e unset
song.unset('name');

//delete all the attributes using clear
// song.clear();
