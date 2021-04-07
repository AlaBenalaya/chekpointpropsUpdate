import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Chien.css";

const chien = (props) => {
  return (
    <div className="cards">
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={props.chien.image} alt="image1" />
        <Card.Body>
          <Card.Title className="title1">{props.chien.name}</Card.Title>
          <Card.Text className="title">{props.chien.couleur}</Card.Text>
          <Card.Text>
            <p className="title1">{props.chien.price}</p>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() =>
              props.handelData(props.chien.name, props.chien.price)
            }
          >
            see detaill
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
chien.defaultProps = {
  chiens: {
    name: "inconnu",
    image: "nthg",
    price: 0,
    couleur: "il nya pas",
  },
};

chien.propTypes = {
  chien: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  couleur: PropTypes.string,
};
export default chien;
