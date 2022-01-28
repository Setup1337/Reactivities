import React from 'react';
import {Badge, Button, ListGroup} from "react-bootstrap";
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}


export default function ActivityList({activities,selectActivity, deleteActivity}: Props){
    return (
        <ListGroup>
            {activities.map(activity =>
                <ListGroup.Item key={activity.id} >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold fs-4">{activity.title}</div>
                        <div>{activity.date}</div>
                        <div className="fs-6">
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </div>
                        
                        <div>
                            <Button onClick={() => selectActivity(activity.id)} className="float-end ms-1" >View</Button>
                            <Button onClick={() => deleteActivity(activity.id)} className="float-end" variant="danger" >Delete</Button>
                            <Badge bg="light" text="dark">
                                {activity.category}
                            </Badge>
                        </div>
                    </div>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}