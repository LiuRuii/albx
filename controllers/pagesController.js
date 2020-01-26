var fs = require('fs')

//返回前台页面
exports.getIndexPage = (req, res) => {
  fs.readFile(__dirname + '/../view/index.html', (err, data) => {
    // res.end(data)
    if(err){
      console.log(err)
      res.end(err)
    }else{
      res.end(data)
    }
  })
} 
exports.getDetailPage = (req, res) => {
  fs.readFile(__dirname + '/../view/index.html', (err, data) => {
    // res.end(data)
    if(err){
      console.log(err)
      res.end(err)
    }else{
      res.end(data)
    }
  })
} 
exports.getAdminPage = (req, res) => {
  fs.readFile(__dirname + '/../view/admin/index.html', (err, data) => {
    // res.end(data)
    if(err){
      console.log(err)
      res.end(err)
    }else{
      res.end(data)
    }
  })
} 
exports.getListPage = (req, res) => {
  fs.readFile(__dirname + '/../view/index.html', (err, data) => {
    // res.end(data)
    if(err){
      console.log(err)
      res.end(err)
    }else{
      res.end(data)
    }
  })
} 
//获取后台首页
exports.getAdminPage = (req, res) => {
  res.render('admin/index.ejs')
} 
exports.getCategoriesPage = (req, res) => {
  res.render('admin/categories.ejs')
} 
exports.getCommentsPage = (req, res) => {
  res.render('admin/comments.ejs')
} 
exports.getNavMenusPage = (req, res) => {
  res.render('admin/nav-menus.ejs')
} 
exports.getPasswordResetPage = (req, res) => {
  res.render('admin/password-reset.ejs')
} 
exports.getPostAddPage = (req, res) => {
  res.render('admin/post-add.ejs')
} 
exports.getPostsPage = (req, res) => {
  res.render('admin/posts.ejs')
} 
exports.getProfilePage = (req, res) => {
  res.render('admin/profile.ejs')
} 
exports.getSettingsPage = (req, res) => {
  res.render('admin/settings.ejs')
} 
exports.getSlidesPage = (req, res) => {
  res.render('admin/slides.ejs')
} 
exports.getUserssersPage = (req, res) => {
  res.render('admin/users.ejs')
} 
exports.getLoginPage = (req, res) => {
  res.render('admin/login.ejs')
} 