

// Creating Models

var Song = Backbone.Model.extend({
    initialize:function(){
        console.log("A New Song has been created by ArunSha !!!");
    },
    defaults:{
        MusicDirector:'Arunsha'
    }
}); // Creating Song Model

var song = new Song({
    MovieName:'petta',
    SongName:'PettaParak',
    HeroName:'Rajini'
}); //instantiate the Song Model


//Attribute Operations

song.set('HeroName','Thalapathy');
var HeroName = song.get('HeroName');
var hasTitle = song.has('MusicDirector');
song.unset('Heroame');
song.clear();

console.log(HeroName+" "+hasTitle);