// var Song=Backbone.Model.ex

var Song = Backbone.Model.extend({
    initialize: function () {
        console.log("New Song has been Created!!!");
    }
});

var song = new Song();
