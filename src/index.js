//-------------------------------------------------------------------------------
//------------------------Requirements-------------------------------------------
const express = require('express'); //Import the express dependency
const bodyParser = require("body-parser"); //Body parser dependency
const morgan = require('morgan'); //Import morgan dependency     
// const hbs = require('express-handlebars')     //Import express handlebars dependency
const path = require('path');
const port = 3000;               //Port 3000  


const app = express();   
//-----------------------EoR-----------------------------------------------------


app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname+'/views/home.html'));;   
});

app.get('/getCourse', (req, res) => { 
    var course = [
        {'id': 1,
        'name': 'Kiến thức cơ bản, tổng quan cho người mới bắt đầu',
        'description': 'Kiến thức cơ bản dành cho người mới bắt đầu, không phân biệt bạn theo FE hay BE'},
        {'id': 2,
        'name': 'Xây dựng web với NodeJS và ExpressJS',
        'description': 'Xây dựng web thực tế với NodeJS & ExpressJS với cách chia sẻ chi tiết, tận tâm, dễ hiểu'},
    ]
    res.send(course);   
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
