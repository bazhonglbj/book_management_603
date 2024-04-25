const express = require('express');
const template = require('art-template');
const app = express();
//set templet route
app.set('views', path.join(__dirname, 'views'));

//set templet engine
app.set('view engine', 'art');

//express fits art-template
app.engine('art', require('express-art-template'));

app.get('/list', (req, res) => {
  let data = {
    title:"shuiguo",
    list: ['apple', 'banana', 'orange']
  }
  //参数1 模板名称 参数2 数据
  res.render('list',data)
});

app.listen(3000, () => {
  console.log('server is running');
});