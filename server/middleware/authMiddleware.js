const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	if (req.method === "OPTIONS") {
		next();
	}

	try {
		const token = req.headers.authorization.split(" ")[1]; // Bearer token
		if (!token) {
			return res.status(401).json({ message: "Unauthrized user" });
		}

		const decodedJwt = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decodedJwt;
		next();
	} catch (error) {
		res.status(401).json({ message: "Unauthrized user" });
	}
};
