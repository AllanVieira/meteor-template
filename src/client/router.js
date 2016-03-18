/**
 * @file
 * Contem a configuração global de rotas.
 */
/* globals Router */

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'carregando'
});

Router.route('/', function () {
	this.render("home");
});

var requireLogin = function(){
	if(!Meteor.user()){
		if(Meteor.loggingIn()){
			this.render("carregando");
		}else{
			this.render("conta");
		}
	}else{
		this.next();
	}
}

Router.onBeforeAction(requireLogin);
