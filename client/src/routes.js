import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import {
	ADMIN_ROUTE,
	CART_ROUTE,
	STORE_ROUTE,
	REGISTRATION_ROUTE,
	LOGIN_ROUTE,
	ITEM_ROUTE,
} from "./utils/consts";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
	{
		path: CART_ROUTE,
		Component: Cart,
	},
];

export const publicRoutes = [
	{
		path: STORE_ROUTE,
		Component: Store,
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: ITEM_ROUTE + "/:id",
		Component: ItemPage,
	},
];
