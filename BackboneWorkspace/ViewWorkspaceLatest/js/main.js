// Backbone Model

//way 1 

var AnimalView = Backbone.View.extend({ //Creating View
    tagName:'span',
    className:'Animal',
    id:1234,
    attributes:{
        whildAnimals:true
    },
    render:function(){
        this.$el.html('Hello This is your VIEW!!!');
        return this;
    }
});

var dogView = new AnimalView({ //Creating dogView object
    el:'#container'
});

var dogView1 = new AnimalView(); // DOM Element In Memory without Markup HTML


dogView.render(); //calling the render method

$('#container').html(dogView1.render().$el); //DOM Element In Memory with Markup HTML
