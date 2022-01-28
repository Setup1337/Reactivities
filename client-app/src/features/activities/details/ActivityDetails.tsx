import React from 'react';
import {Button, Card, Col, Row } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';


interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    formOpen: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, formOpen}:Props) {
    return (
        <Card>
            <Card>
                <Card.Img variant="top" src={`/assets/categoryImages/${activity.category}.jpg`} />
                <Card.Body>
                    <Card.Title>{activity.title}</Card.Title>
                    <Card.Subtitle className="text-muted">{activity.date}</Card.Subtitle>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Row>
                        <Col className="d-grid"><Button onClick={() => formOpen(activity.id)} variant="outline-primary" size="lg">Edit</Button></Col>
                        <Col className="d-grid"><Button onClick={() => cancelSelectActivity()} variant="outline-secondary" size="lg">Cancel</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Card>
    )
}