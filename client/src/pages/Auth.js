import React from "react";
import { Container, Button, Row, Form, Col, Card } from "react-bootstrap";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "./../utils/consts";
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
	const localtion = useLocation();
	const isLogin = localtion.pathname === LOGIN_ROUTE;
	console.log(localtion);
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control className="mt-4" placeholder="Enter emails" />
					<Form.Control
						className="mt-4 align-self-end-0"
						placeholder="Enter password"
					/>
					<Row className="mt-4">
						{isLogin ? (
							<Col className="d-flex align-items-center">
								No account?&nbsp;
								<NavLink to={LOGIN_ROUTE}> Login!</NavLink>
							</Col>
						) : (
							<Col className="d-flex align-items-center">
								No account?&nbsp;
								<NavLink to={REGISTRATION_ROUTE}> Sign up!</NavLink>
							</Col>
						)}
						<Col className="d-flex justify-content-end">
							<Button variant="outline-success">
								{isLogin ? "Login" : "Sign up"}
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;
