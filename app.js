var express=require('express')
//路由模块
var router=require('./router')
//引入ejs
var ejs=require('ejs')
var app=express()
app.listen('3004',()=>{
  console.log('http://127.0.0.1:3004')
})

//托管静态资源
app.use('/assets',express.static('assets'))


//配置模板引擎为ejs
app.set('view engin','ejs')
//配置ejs的模板文件夹，以后ejs会自动在指定的模板下寻找文件
app.set('views',__dirname+'/view')
//使用use中间件在当前应用上挂载路由配置
app.use(router)