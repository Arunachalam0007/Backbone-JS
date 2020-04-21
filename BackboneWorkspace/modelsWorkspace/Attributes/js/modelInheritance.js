
// Parent Class

var Animal = Backbone.Model.extend({
    walk:function(){
        console.log('Animal walking...........');
    }
});

// Child Class

var Dog = Animal.extend({
    walk:function(){
        console.log(this);
        Animal.prototype.walk.apply(this); // prototype like (Super or Base)  this will call the base class object
        console.log('Dog Walking.............')
    }
});

var dogObj = new Dog();

dogObj.walk();