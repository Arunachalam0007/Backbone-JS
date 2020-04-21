
// View Creation

var IPL = Backbone.View.extend({
    tagName:"span",
    className: "IPL",
    id:"!234",
    attributes:{
        "SportsName":"Cricket"
    },
    render:function(){
        this.$el.html("<b>INDIAN PREMIER LEAGUE</b>");
        return this;
    }
});

var IPLTeamView = new IPL({
    // el:"#mainContainer"
});


//  IPLTeamView.render(); optional

$("#mainContainer").html(IPLTeamView.render().$el);


//222222222222222


// Assign Model to View

var IPLTeamModel = Backbone.Model.extend();

 var IPLTEAMJSON =[{
    TeamName: "CSK",
    Captain: "DHONI",
    Won: "4"
},{
    TeamName: "MI",
    Captain: "ROHIT",
    Won: "4"
},{
    TeamName: "RCB",
    Captain: "KHOLI",
    Won: "4"
},{
    TeamName: "KKR",
    Captain: "DK",
    Won: "4"
}];

var IplTeamsModel = new IPLTeamModel({
    Teams: IPLTEAMJSON
});


var IPL = Backbone.View.extend({
    tagName:"span",
    className: "IPL",
    id:"!234",
    attributes:{
        "SportsName":"Cricket"
    },
    render:function(){
        this.$el.html("<b>INDIAN PREMIER LEAGUE</b>");
        return this;
    }
});

var IPLTeamView = new IPL({
    el:"#mainContainer",
    Model: IPLTeamModel
});


 IPLTeamView.render(); optional

// $("#mainContainer").html(IPLTeamView.render().$el);