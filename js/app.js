
var template = function(id) {
    return _.template($('#' + id).html());
}




var Person = Backbone.Model.extend({
    defaults: {
        name: 'Pidor',
        age: '100',
        job: 'cock sucker'
    }
});


var PeopleCollection = Backbone.Collection.extend({
    model: Person,
});

var PeopleView = Backbone.View.extend({
    tagName: 'ul',
    
    initialize: function() {
        this.render();
    },
    
    render: function() {
        /*for(var i = 0; i<this.collection.length; i++) {
            console.log(person);
        }*/
        
        this.collection.each(function(person) {
            var personView = new PersonView({model: person});
//            console.log(personView);
            this.$el.append(personView.el);
        },this)
    
    }
});

var PersonView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    template: template('person-id'),
    render: function() {
//        var template = _.template(template('person-id'));
        this.$el.html( this.template( this.model.toJSON()) )
    },
    tagName: 'li'    
})
var person = new Person;
var personView = new PersonView({model:person});
//
//var person2 = new Person({'name':'Petro', 'age':'11'});
//var personView2 = new PersonView({model:person2});

var people = [{name: "Nick", age: 34, job: 'pornstar'},{name: "Pedro", age: 24, job: 'driver'},{name: "Huan", age: 74, job: 'oldman'}];

var peopleCollection = new PeopleCollection(people);

var peopleView = new PeopleView({collection: peopleCollection});



$('body').append(peopleView.el);
