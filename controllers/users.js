module.exports.controller = (app) => {
  // Get user infomation
  app.get('/users', (req, res) => {
    res.render('user', {title: 'Users', description: 'This is the description of all the users'});
  });
}