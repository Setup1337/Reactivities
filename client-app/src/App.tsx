import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Container, ListGroup, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PeopleFill } from 'react-bootstrap-icons';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:5001/api/activities").then(response => {
      console.log(response);
      setActivities(response.data);
    })
  },[])
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <PeopleFill/>
            Reactivities
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <ListGroup>
        {activities.map((activity:any) => 
          <ListGroup.Item> 
            {activity.title}
          </ListGroup.Item>
          )}
      </ListGroup>
    </div>
  );
}

export default App;
