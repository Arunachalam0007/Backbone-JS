
//Model

var PremierLeagueModel = Backbone.Model.extend();

var iplModel = new PremierLeagueModel({
        teamName:'csk',
        captianName: 'Dhoni',
        tropyWon:'3'
    });

//View

var PremierLeagueView = Backbone.View.extend({
    render:function(){
        this.$el.html(this.model.get('teamName'));
    }
});

var iplView = new PremierLeagueView({
    el:'#container',
    model:iplModel
});

iplView.render();

