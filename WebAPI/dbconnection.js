var mysql = require('mysql');  
var connection = mysql.createPool({  
    host: 'mysql-rds-ce.ctdmlply4hpa.ap-south-1.rds.amazonaws.com',  
    user: 'aaron_pandi',  
    password: 'Administrator1',  
    database: 'QuizApplication_Dev'  
});  
module.exports = connection;  