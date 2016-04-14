"use strict";

import model from "../core/model.js";

module.exports = class products extends model {
	constructor() {
		super();
		this.table = "products";
	}

	getProducts() {
		var sql = "select * from " + this.table;
		return this.db.query(sql);
	}
}