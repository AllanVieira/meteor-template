/**
 * @file
 * Contem a configuração de rota da pagina home.
 * Contem eventos da pagina home.
 */
/* globals Router */

Router.route('/home', function () {
  this.render('home', {
  /*data: function () { return Items.findOne({_id: this.params._id}); }*/
  });
});
