//Model

var blog = Backbone.Model.extend({
    defaults: {
        Course: '',
        Author: '',
        URL: ''
    }
});


// Collection

var Blogs = Backbone.Collection.extend();


var javaBlog = new blog({
    Course: 'Java',
    Author: 'Arun',
    URL: 'www.javadoc.com'
});

var xCPBlog = new blog({
    Course: 'xCP',
    Author: 'Kalai',
    URL: 'www.knowleadge.opentext.com'
});


// Instantiate to collection object
var blogs = new Blogs([javaBlog,xCPBlog]);