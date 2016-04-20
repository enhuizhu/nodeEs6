"use strict";

import model from "../core/model.js";

module.exports = class category extends model {
	constructor() {
		super();
		this.table = "category";
	}

	getCategory() {
		var sql = "select * from " + this.table;
		return this.db.query(sql);
	}
}