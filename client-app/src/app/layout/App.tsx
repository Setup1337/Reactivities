import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  function handleSelectActivity(id: string){
      setSelectedActivity(activities.find(x => x.id === id));
  }
  
  function handleCancelSelectActivity(){
      setSelectedActivity(undefined);
  }
  
  function handleFormOpen(id?:string){
      id ? handleSelectActivity(id) : handleCancelSelectActivity();
      setEditMode(true);
  }
  function handleFormClose(){
      setEditMode(false);
  }
  
  function handleEditOrCreateActiivity(activity: Activity){
      activity.id 
          ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
          : setActivities([...activities, {...activity, id: uuid()}])
      setEditMode(false);
      setSelectedActivity(activity);
  } 
  function handleDeleteActivity(id: string){
      setActivities([...activities.filter(x => x.id !== id)])
  }
  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities").then(response => {
      setActivities(response.data);
    })
  },[])
    
  return (
    <Fragment>
      <NavBar formOpen={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
            activities={activities} 
            selectedActivity={selectedActivity} 
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            formOpen={handleFormOpen}
            formClose={handleFormClose}
            editOrCreateActivity={handleEditOrCreateActiivity}
            deleteActivity={handleDeleteActivity}
        />
      </Container>
      
    </Fragment>
  );
}

export default App;
