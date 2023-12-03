import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
	const { items } = useContext(Context);

	return (
		<Row className="d-flex">
			{items.brands.map((brand) => (
				<Card
					style={{ cursor: "pointer", width: "20%" }}
					key={brand.id}
					className="p-3 m-1"
					onClick={() => items.setSelectedBrand(brand)}
					border={brand.id === items.selectedBrand.id ? "danger" : "light"}
				>
					{brand.name}
				</Card>
			))}
		</Row>
	);
});

export default BrandBar;
