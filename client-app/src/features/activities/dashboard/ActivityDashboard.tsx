import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    formOpen: (id: string) => void;
    formClose: () => void;
    editOrCreateActivity: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}


export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, 
                                              formOpen, formClose, editOrCreateActivity, deleteActivity }: Props){
    return (
        <Container>
            <Row>
                <Col><ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/></Col>
                <Col>
                    <Row>
                        <Col>
                            {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} 
                                                                   cancelSelectActivity={cancelSelectActivity} 
                                                                   formOpen={formOpen}/>}
                        </Col>
                    </Row>
                    <Row>
                        <Col> {editMode && <ActivityForm activity={selectedActivity} formClose={formClose} editOrCreateActivity={editOrCreateActivity}/> }</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}