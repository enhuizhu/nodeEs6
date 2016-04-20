"use strict";
export default class controller {
	constructor() {
		this.models = {};
	}

	setReqRes(req, res) {
		this.req = req;
		this.res =res;
	}

	loadModel(modelName) {
		var model = require("../models/" + modelName);
		this.models[modelName] = new model();
	}
}