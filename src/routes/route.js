"use strict";

export default class route {
	constructor(app) {
		this.controllers = {};
		this.app = app;
		this.setRoute();
	}

	response(obj, req, res) {
		if( typeof this.controllers[ obj.controller ] == 'undefined' ) {
			var controller = require("../controllers/" + obj.controller);	
			this.controllers[ obj.controller ] = new controller(req, res);
		}
		
		this.controllers[obj.controller][obj.action]();
	}

	setRoute() {
		let that = this;
		
		this.app.get("/",  (req, res) => {
			that.response({
				controller: "main",
				action: "index"
			}, req, res);
		});

		this.app.post("/", (req, res) => {
			res.end(JSON.stringify(req.body));
		});
	}
}