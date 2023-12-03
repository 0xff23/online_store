import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeBar from "./../components/TypeBar";
import BrandBar from "./../components/BrandBar";
import ItemsList from "./../components/ItemsList";

const Store = () => {
	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<ItemsList />
				</Col>
			</Row>
		</Container>
	);
};

export default Store;
