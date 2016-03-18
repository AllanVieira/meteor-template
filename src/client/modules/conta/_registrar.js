/**
 * @file
 * Contem regras para a pagina de registro de usuarios.
 */
/* globals Router */

Template._registrar.events({
  'submit form.registrar' : function(event){
    	event.preventDefault();
    	let email = event.target.email.value;
    	let senha = event.target.senha.value;
    	Accounts.createUser({
            email: email,
            password: senha
        });
        Session.set('emRegistro',false);
        Router.go('/');
    },
    'click button.cancelar': function(event){
    	event.preventDefault();
    	Session.set('emRegistro',false);
    }
});
