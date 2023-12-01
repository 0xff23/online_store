import React, { useContext } from "react";
import { Context } from "../index";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { STORE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
	const { user } = useContext(Context);
	console.log(user);
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: "white" }} to={STORE_ROUTE}>
					Megazone
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{ color: "orange" }}>
						<Button variant={"outline-light"} className="me-2 ms-2">
							Admin
						</Button>
						<Button
							variant={"outline-light"}
							onClick={() => user.setIsAuth(false)}
							className="ms-auto"
						>
							Logout
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{ color: "orange" }}>
						<Button
							variant={"outline-light"}
							className="me-2 ms-2"
							onClick={() => user.setIsAuth(true)}
						>
							Login
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
