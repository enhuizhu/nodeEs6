"use strict";

import database from "../libs/database";
import {dbConfig} from "../config/dbConfig";

export default class model {
	constructor() {
		this.db = new database(dbConfig.HOST, dbConfig.USER, dbConfig.PASSWORD, dbConfig.DATABASE);
	}
}


