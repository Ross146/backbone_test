var Person = Backbone.Model.extend({
    defaults: {
        name: 'Pidor',
        age: '100',
        job: 'cock sucker'
    }
})

var PersonView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    template: _.template( $('#person-id').html() ),
    render: function() {
//        this.$el.html(this.model.get('age'))
        this.$el.html( this.template( this.model.toJSON()) )
    },
    tagName: 'li'    
})
var person = new Person;
var personView = new PersonView({model:person});

var person2 = new Person({'name':'Petro', 'age':'11'});
var personView2 = new PersonView({model:person2});

$('body').append(personView.el);
$('body').append(personView2.el);