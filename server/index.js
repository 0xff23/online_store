require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 4000;
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routers/index");
const errorHandler = require("./middleware/ErrorHandling");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// Needs to be last
app.use(errorHandler);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started at ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
