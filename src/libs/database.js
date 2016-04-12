import mysql from "mysql";

export default class database {
	constructor(HOST, USER, PASSWORD, DATABASE) {
		this.connection = mysql.createConnection({
		  host     : HOST,
		  user     : USER,
		  password : PASSWORD,
		  database : DATABASE
		});
	}

	
}

