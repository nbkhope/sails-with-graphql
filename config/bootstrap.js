/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  Model.destroy({})
    .then(() => {
      return Product.destroy({});
    })
    .then(() => {
      return Maker.destroy({});
    })
    .then(() => {
      return Promise.all([
        Maker.create({ name: 'Maker ' + Math.random().toFixed(2) }),
        Maker.create({ name: 'Maker ' + Math.random().toFixed(2) }),
      ]);
    })
    .then(makers => {
      return Promise.all([
        Product.create({ name: 'Product ' + Math.random().toFixed(4), maker: makers[0].id }),
        Product.create({ name: 'Product ' + Math.random().toFixed(4), maker: makers[1].id }),
        Product.create({ name: 'Product ' + Math.random().toFixed(4), maker: makers[0].id }),
        Product.create({ name: 'Product ' + Math.random().toFixed(4), maker: makers[1].id }),
      ]);
    })
    .then(products => {
      return Promise.all([
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2014-03-17', product: products[0].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2017-11-17', product: products[0].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2016-04-17', product: products[1].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2017-11-17', product: products[1].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2017-11-17', product: products[2].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2014-10-17', product: products[3].id }),
        Model.create({ name: 'Model ' + Math.random().toFixed(3), price: (Math.random() * 100).toFixed(2), releaseDate: '2016-05-17', product: products[3].id }),
      ]);
    })
    .then(() => {
      // It's very important to trigger this callback method when you are finished
      // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
      cb();
    });

};
