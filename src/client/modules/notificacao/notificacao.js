/**
 * @file
 * Contem regras globais para o modulo de notificacao
 */
/* globals Router */
Template.notificacao.helpers({
  notificar: function(mensagem){
    let $toastContent = $('<span>'+mensagem+'</span>');
    Materialize.toast($toastContent, 5000);
  }
});
