var Task = {
    TaskName: "OpenText",
    taskStart: function (){
        console.log("You're in TaskStart Functions");
        this.trigger("advanceSearchBox",{
            test1: "addedPerspectiveManager",
            test2: 22
        });
    }
}

_.extend(Task,Backbone.Events);

Task.on("advanceSearchBox",function(myArgs){
    console.log("You're started the OpenText Task");
    console.log("You're Action is "+myArgs)
});

Task.taskStart();