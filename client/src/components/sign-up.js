import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div id="start-button" className="d-grid gap-2">
          <a href="/signin">
          <Button  variant="primary" size="lg">
            Click here to get started!
          </Button>
          </a>
         
        </div>
      );
    }

    export default Start
