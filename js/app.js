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

var PersonView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    template: '#person-id',
    render: function() {
        var template = _.template($(this.template).html());
        this.$el.html( template( this.model.toJSON()) )
    },
    tagName: 'li'    
})
//var person = new Person;
//var personView = new PersonView({model:person});
//
//var person2 = new Person({'name':'Petro', 'age':'11'});
//var personView2 = new PersonView({model:person2});

var people = [{name: "Nick", age: 34, job: 'pornstar'},{name: "Pedro", age: 24, job: 'driver'},{name: "Huan", age: 74, job: 'oldman'}];

var peopleCollection = new PeopleCollection(people);



//$('body').append(personView.el);
//$('body').append(personView2.el);