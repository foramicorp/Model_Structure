const Router = require("express");
const { getAll } = require("../Controller/model.controller");
const { create } = require("../Model/Property.model");
const userRouter = Router()


userRouter.get("/getall", getAll);
userRouter.post("/create", create);

module.exports = userRouter;

