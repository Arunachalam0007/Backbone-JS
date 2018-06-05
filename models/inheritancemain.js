var Animal = Backbone.Model.extend({
    walk: function () {
        console.log("Animal is walking...");
    }
});

var Dog = Animal.extend({
    walk: function () {
        Animal.prototype.walk.apply(this); // this will call the animal call walk method
        console.log("Dog is walking...");
    }
});

var dog = new Dog();
dog.walk();