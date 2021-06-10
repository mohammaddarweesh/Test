const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'store',
    host: 'localhost',
    multipleStatements: true
});
connection.connect((err)=>
{
    if (err) { 
        console.log('connection failed');
        connection.query('CREATE DATABASE IF NOT EXIST store', (err) => {
            if (err) {
                console.log(err)
            }else{
                connection.query("CREATE TABLE `categories` (`id` int NOT NULL AUTO_INCREMENT,  `name` varchar(45) NOT NULL,  `img` varchar(100) DEFAULT NULL,  `storeid` int DEFAULT NULL,  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;",()=>{})
                connection.query("CREATE TABLE `products` (  `id` int NOT NULL AUTO_INCREMENT,  `name` varchar(45) NOT NULL,  `img` varchar(100) DEFAULT NULL,  `price` float DEFAULT NULL,  `categoryid` int NOT NULL,  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;", ()=>{})
                connection.query("CREATE TABLE `stores` (  `id` int NOT NULL AUTO_INCREMENT,  `name` varchar(45) NOT NULL,  `logo` varchar(100) DEFAULT NULL,  PRIMARY KEY (`id`)) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;", ()=>{})
            }
        })
        console.log(err);
    }else{
        console.log('connection successed');
    }
})

module.exports = connection;