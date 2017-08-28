var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/articles', function (req, res, next) {
  var articles = [
    {
      title: 'first Article',
      url: 'www.poop',
      text: `lorem ipsum`
    },
    {
      title: 'second Article',
      url: 'www.poop',
      text: `lorem ipsum`
    },
    {
      title: 'third Article',
      url: 'www.poop',
      text: `lorem ipsum`
    }
  ]
  res.send(articles)
  // Article.find(function (err, articles) {
  //   if (err) return next(err);
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     articles: articles
  //   });
  // });
});
