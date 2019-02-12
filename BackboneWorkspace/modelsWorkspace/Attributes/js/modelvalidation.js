var Song = Backbone.Model.extend({
    validate:function(attr){ // it will check the validation attribute fields
        if(!attr.songName){
            return "Song Name Required for Song"
        }
    }
});

var song= new Song();
console.log(song.isValid()+" "+song.validationError);