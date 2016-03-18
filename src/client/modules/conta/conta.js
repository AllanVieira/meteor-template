/**
 * @file
 * Contem a configuração de rota da pagina de conta.
 * Contem o controle de template ativo na página de conta
 */

Router.route('/conta',{
});

Template.conta.helpers({
  getTemplate: function(){
    if(Meteor.user()){
      return '_detalhes';
    }else if(Session.get('emRegistro')){
      return '_registrar';
    }else{
      return '_acessar';
    }
  }
});

Template.conta.onRendered(function(){
});
