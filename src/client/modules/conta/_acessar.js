/**
 * @file
 * Contem regras para a pagina de acesso ao sistema.
 */
/* globals Router */

Template._acessar.events({
  'submit form.acessar': function(event){
    event.preventDefault();
    let email = event.target.email.value;
    let senha = event.target.senha.value;
    Meteor.loginWithPassword(email, senha,function(error){
      if(error){
        if(error.reason === "User not found"){
          Blaze.renderWithData(Template.notificacao, {mensagem:"Usuário não encontrado!"}, document.body);
        }else if(error.reason === "Incorrect password"){
          Blaze.renderWithData(Template.notificacao, {mensagem:"Senha incorreta!"}, document.body);
        }
      }else{
        Router.go('/');
      }
    });
  },
  'click button.registrar': function(event){
    event.preventDefault();
    Session.set('emRegistro',true);
  }
});
