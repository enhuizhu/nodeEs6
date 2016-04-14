"use strict";

import controller from "../core/controller";

module.exports = class main extends controller{
   	constructor(req, res) {
		super();
		this.req = req;
		this.res = res;
		this.loadModel("products");
	}

	index() {
		let _self = this;		
		
		this.models.products.getProducts().then(function(rows) {
			console.info("here!");
			console.info("rows", rows);
			_self.res.end(JSON.stringify(rows));
		}).catch(function(err) {
			console.info("fail");
			console.info(err);
			_self.res.end(err);
		});
	}
}