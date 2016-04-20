"use strict";

import controller from "../core/controller";
import {apiConfig} from "../config/apiConfig";

module.exports = class main extends controller{
   	constructor(req, res) {
		super();
		this.loadModel("products");
		this.loadModel("category");
	}

	index() {
		let _self = this;		
		this.models.products.getProducts().then(function(rows) {
			rows.map(v => {
				v.pics = apiConfig.imagePath + v.pics;
			});

			_self.res.end(JSON.stringify(rows));
		}).catch(function(err) {
			_self.res.end(err);
		});
	}
}