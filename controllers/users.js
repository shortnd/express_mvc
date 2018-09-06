module.exports.controller = (app) => {
  // Get user infomation
  app.get('/users', (req, res) => {
    res.render('index', {title: 'Users'});
  });
}