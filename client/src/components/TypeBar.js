import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
	const { items } = useContext(Context);
	return (
		<ListGroup>
			{items.types.map((type) => (
				<ListGroup.Item
					active={type.id === items.selectedType.id}
					onClick={() => items.setSelected(type)}
					key={type.id}
				>
					{type.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
});

export default TypeBar;
