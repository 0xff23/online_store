import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = observer(() => {
	const { items } = useContext(Context);

	return (
		<Row className="d-flex">
			{items.items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Row>
	);
});

export default ItemList;
