

import React from "react";
import Card from 'react-bootstrap/Card';
import Digory from "../assets/Dig1.jpg";
import Colton from "../assets/Colton1.jpg";
import Ashley from "../assets/Ashley1.webp";
import Johann from "../assets/Johann1.jpg";


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
        <Card.Img variant="top" src={Colton} alt="Photo of a Lynx" />
        <Card.Body>
          <Card.Title>Colton Taylor-Ortiz</Card.Title>
          <Card.Text>
            I am part of the development team in the Takiwatanga website, and I am very excited on creating an interactive and user-friendly website that is supportive of people or for families of people that have someone with special needs. I have an older brother named Noah that has Autism, and he used to have very severe symptoms, but has come so far from that point and is now doing very well! Although he contiunes to struggle with many things, it is amazing how much a great support system can do to help! I think it is not only important, but vital to to have a safe place for anyone to talk about their experiences!{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Ashley} alt="Photo of a Rocks and water" />
        <Card.Body>
          <Card.Title>Ashley Arena</Card.Title>
          <Card.Text>
            As part of the Development Team, I am passionate about creating a safe and respective place to share and lean on others for support and encouragement. This project has been such a rewarding experience to work and collaborate on. I hope you will find this app to be the missing piece of support you need to keep being the amazing parent you already are.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Johann} alt="Photo of an octopus" />
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
    
