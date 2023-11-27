require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 4000;
const models = require("./models/models");
const cors = require("cors");
const router = require("./routers/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Working!" });
});

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
