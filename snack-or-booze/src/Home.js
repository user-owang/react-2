import React from "react";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

async function Home({snacks,drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Snack or Booze! We currently are serving an ever expanding menu consisting of {drinks.length} drink choices and {snacks.length} snack options!
            </h3>
          </CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            <NavLink to="/snacks">Snack Menu</NavLink>
          </ListGroupItem>
          <ListGroupItem>
          <NavLink to="/drinks">Drink Menu</NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/new-item-form">Add a new menu item</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </section>
  );
}

export default Home;
