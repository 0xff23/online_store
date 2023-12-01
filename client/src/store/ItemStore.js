import { makeAutoObservable } from "mobx";

export default class ItemStore {
	constructor() {
		this._selectedType = {};

		this._types = [
			{ id: 1, name: "iPhone" },
			{ id: 2, name: "Samsung Galaxy" },
			{ id: 3, name: "Google Pixel" },
			{ id: 4, name: "Xiaomi" },
			{ id: 5, name: "Nokia" },
			{ id: 6, name: "Sony" },
		];

		this._brands = [
			{ id: 1, name: "Apple" },
			{ id: 2, name: "Samsung" },
		];

		this._items = [
			{
				id: 1,
				name: "iPhone 15 pro Max",
				price: 1999,
				rating: 5,
				image: `https://images.macrumors.com/t/oiWkxB5isnYn8BFbcgKsnDIUOdI=/800x0/smart/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg?lossy`,
			},
			{
				id: 2,
				name: "iPhone 15 pro",
				price: 1399,
				rating: 5,
				image: `https://images.macrumors.com/t/oiWkxB5isnYn8BFbcgKsnDIUOdI=/800x0/smart/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg?lossy`,
			},
			{
				id: 3,
				name: "iPhone 15",
				price: 999,
				rating: 5,
				image: `https://images.macrumors.com/t/oiWkxB5isnYn8BFbcgKsnDIUOdI=/800x0/smart/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg?lossy`,
			},
		];
		makeAutoObservable(this);
		// This will pass object to mobx so it can observe all changes
	}

	// Actions
	setTypes(types) {
		this._types = types;
	}

	setBrand(brands) {
		this._brands = brands;
	}

	setItems(items) {
		this._items = items;
	}

	setSelected(selected) {
		this._selectedType = selected;
	}

	// getters
	get items() {
		return this._items;
	}

	get brands() {
		return this._brands;
	}

	get types() {
		return this._types;
	}

	get selectedType() {
		return this._selectedType;
	}
}
