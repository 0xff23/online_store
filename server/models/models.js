const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, primaryKey: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Cart = sequelize.define("cart", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartItem = sequelize.define("cartItem", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Item = sequelize.define("item", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	rating: { type: DataTypes.INTEGER, defaultValue: 0 },
	img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rating: { type: DataTypes.INTEGER, allowNull: false },
});

const ItemInfo = sequelize.define("itemInfo", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
});

const TypeBrand = sequelize.define("typeBrand", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Relationships

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

Type.hasMany(Item);
Item.belongsTo(Type);

Brand.hasMany(Item);
Item.belongsTo(Brand);

Item.hasMany(Rating);
Rating.belongsTo(Item);

Item.hasMany(CartItem);
CartItem.belongsTo(Item);

Item.hasMany(ItemInfo, { as: "info" });
ItemInfo.belongsTo(Item);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
	User,
	Cart,
	CartItem,
	Item,
	ItemInfo,
	Type,
	Brand,
	Rating,
	TypeBrand,
};
