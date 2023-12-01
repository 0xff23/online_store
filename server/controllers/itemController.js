const { Item } = require("../models/models");
const { ItemInfo } = require("../models/models");
const ApiError = require("../error/apiError");
const uuid = require("uuid");
const path = require("path");

class ItemController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body;
			const { image } = req.files;
			let fileName = uuid.v4() + ".jpg";

			image.mv(path.resolve(__dirname, "../", "static", fileName));

			const item = await Item.create({
				name,
				price,
				brandId,
				typeId,
				img: fileName,
			});

			return res.json({ item });
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res, next) {
		try {
			let { brandId, typeId, limit, page, info } = req.query;
			page = page || 1;
			limit = limit || 10;
			let offset = page * limit - limit;
			let items;

			if (!brandId && !typeId) {
				items = await Item.findAndCountAll({ limit, offset });
			}

			if (brandId && !typeId) {
				items = await Item.findAndCountAll({
					where: { brandId },
					limit,
					offset,
				});
			}

			if (!brandId && typeId) {
				items = await Item.findAndCountAll({
					where: { typeId },
					limit,
					offset,
				});
			}

			if (brandId && typeId) {
				items = await Item.findAndCountAll({
					where: { typeId, brandId },
					limit,
					offset,
				});
			}

			if (info) {
				info = JSON.parse(info);
				info.forEach((element) => {
					ItemInfo.create({
						title: element.title,
						description: element.description,
						deviceId: element.deviceId,
					});
				});
			}

			return res.json({ items });
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}

	async getItem(req, res) {
		const { id } = req.params;
		const item = await Item.findOne({
			where: { id },
			include: [{ model: ItemInfo, as: "info" }],
		});

		return res.json({ item });
	}
}

module.exports = new ItemController();
