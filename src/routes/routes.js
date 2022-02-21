const express = require("express");

const routes = new express.Router();

const get_service = require("./../controllers/get_service");

routes.get("/get/playlist", get_service.Get);

module.exports = routes;
