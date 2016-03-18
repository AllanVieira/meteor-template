
Template._header.onRendered(function(){

});

Template._header.events({
	'click a.entrar': function(event){
		event.preventDefault();
		Router.go('conta')
	}
});
