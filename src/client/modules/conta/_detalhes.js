/**
 * @file
 * Contem regras para a pagina com detalhes do usuário.
 */
/* globals Router */

Template._detalhes.events({
  'click a.sair': function(e, tpl){
		e.preventDefault();
		Meteor.logout();
	}
});
