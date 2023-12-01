const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Cart } = require("../models/models");

const generateJWT = (id, email, role) => {
	return jwt.sign({ id: id, email, role }, process.env.SECRET_KEY, {
		expiresIn: "24h",
	});
};

class UserController {
	async registration(req, res, next) {
		const { email, password, role } = req.body;
		if (!email || !password) {
			return next(ApiError.badRequest("Invalid email or password"));
		}

		const existingUser = await User.findOne({ where: { email } });
		if (existingUser) {
			return next(ApiError.badRequest("User already exists"));
		}

		const hashPassword = await bcrypt.hash(password, 7);
		const user = await User.create({ email, role, password: hashPassword });
		const cart = await Cart.create({ userId: user.id });

		const token = generateJWT(user.id, user.email, user.role);

		return res.json({ token });
	}

	async login(req, res, next) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return next(ApiError.internal("User not found"));
		}

		let isValidPassword = bcrypt.compareSync(password, user.password);
		if (!isValidPassword) {
			return next(ApiError.internal("Invalid password"));
		}

		const token = generateJWT(user.id, user.email, user.rele);
		return res.json({ token });
	}

	async check(req, res, next) {
		const token = generateJWT(
			req.params.user.id,
			req.params.user.email,
			req.params.user.role
		);
		res.json({ token });
	}
}

module.exports = new UserController();
