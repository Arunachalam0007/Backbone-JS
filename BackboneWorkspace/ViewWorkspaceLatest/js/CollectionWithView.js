   
//Model
var PremierLeagueModel = Backbone.Model.extend();

//Collection
var PremierLeagueCollection = Backbone.Collection.extend({
    model: PremierLeagueModel
});

//creating object for the collections

var iplCollection = new PremierLeagueCollection([
    new PremierLeagueModel({
        teamName: 'csk',
        captianName: 'Dhoni',
        tropyWon: '3'
    }),
    new PremierLeagueModel({
        teamName: 'MI',
        captianName: 'Rohit Sharma',
        tropyWon: '3'
    }),
    new PremierLeagueModel({
        teamName: 'Delhi',
        captianName: 'Shreyas Iyer',
        tropyWon: '3'
    })
]);

var PremierLeagueView = Backbone.View.extend({
    render:function(){
        this.$el.html(this.model.get('teamName'));
        return this;
    }
});


//View with Model

var PremierLeagueViews = Backbone.View.extend({
    render: function () {
        console.log(this);
        var renderThis = this;
        debugger;
        this.model.each(function (ipl) {
            console.log(ipl);
            var iplView = new PremierLeagueView({
                model: ipl
            });
            renderThis.$el.append(iplView.render().$el);
        });

    }
});

var iplView = new PremierLeagueViews({
    el: '#container',
    model: iplCollection
});
iplView.render();
// $('#container').html(iplView.render().$el);