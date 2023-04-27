

import React from "react";
import Card from 'react-bootstrap/Card';
import Digory from "../assets/Dig1.jpg";
// import Digory from "../assets/Dig1.jpg";
// import Digory from "../assets/Dig1.jpg";
// import Digory from "../assets/Dig1.jpg";


import CardGroup from 'react-bootstrap/CardGroup';
        
        function OurStory() {
          return (
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={Digory} alt="Photo of a child" />
        <Card.Body>
          <Card.Title>Ryan Childers</Card.Title>
          <Card.Text>
          I have a child with Autism.  His name is Digory.  We were suspicious of his condition at a very early age.  We then had him diagnosed, and proceeded to find him the best possible therapies and educational environment possible for him.  It has been difficult, but our love for him and hope for his future grows every day.  It is my goal with this site to be able share and support one another through our struggles and victories and people with special needs.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Digory} alt="Photo of a child" />
        <Card.Body>
          <Card.Title>Colton Taylor-Ortiz</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Digory} alt="Photo of a child" />
        <Card.Body>
          <Card.Title>Ashley Arena</Card.Title>
          <Card.Text>
            Insert Bio
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Digory} alt="Photo of a child" />
        <Card.Body>
          <Card.Title>Johann Kubeja</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    
            
          );
        }
        
        
        export default OurStory;
    
