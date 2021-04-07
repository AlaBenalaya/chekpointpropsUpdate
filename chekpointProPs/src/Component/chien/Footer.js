import React from 'react'
import {Card,Button} from "react-bootstrap"
import "../chien/Footer.css"
const Footer = () => {
    return (
        <div>
            <Card className="text-center">
  <Card.Body>
    <Card.Title className="footr">this web page is created by ksaier rami</Card.Title>
    <Card.Text className="footr">
    “No matter how you're feeling, a little dog gonna love you.” 
    </Card.Text>
    <Button variant="primary">note us </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Footer
