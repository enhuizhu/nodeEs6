"use strict";
export default class controller {
	constructor() {
		this.models = {};
	}

	loadModel(modelName) {
		var model = require("../models/" + modelName);
		this.models[modelName] = new model();
	}
}