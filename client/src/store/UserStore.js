import { makeAutoObservable } from "mobx";

export default class UserStore {
	constructor() {
		this._isAuth = false;
		this._user = {};
		makeAutoObservable(this);
		// This will pass object to mobx so it can observe all changes
	}

	// Actions
	setIsAuth(flag) {
		this._isAuth = flag;
	}

	setUser(user) {
		this._user = user;
	}

	// getters
	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}
}
