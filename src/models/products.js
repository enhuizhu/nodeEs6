"use strict";

import model from "../core/model.js";

module.exports = class products extends model {
	constructor() {
		super();
		this.table = "products";
	}

	getProducts() {
		var sql = "select a.*, b.name as cname from " + this.table + " as a";
		sql += " left join category as b";
		sql += " on a.category_id = b.id";
		// sql += " group by a.category_id";
		
		return this.db.query(sql);
	}
}