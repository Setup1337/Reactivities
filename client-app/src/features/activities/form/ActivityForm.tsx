import React, { useState } from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';
import {
    ChangeEvent
} from "../../../../../../../../../Program Files/JetBrains/JetBrains Rider 2021.3.2/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";


interface Props {
    activity: Activity | undefined;
    formClose: () => void;
    editOrCreateActivity: (activity: Activity) => void;
}
export default function ActivityForm({activity: selectedActivity, formClose, editOrCreateActivity} : Props){
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: '',
    }
    
    const [activity, setActivity] = useState(initialState);
    
    function handleSubmit (){
        editOrCreateActivity(activity);
    }
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }
    return (
        <Card className="mt-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control as="input" value={activity.title} name="title" onChange={handleInputChange} className="mb-3" placeholder="Title"  />
                        <Form.Control as="textarea" value={activity.description} name="description" onChange={handleInputChange} className="mb-3" placeholder="Description" />
                        <Form.Control as="input" value={activity.category} name="category" onChange={handleInputChange} className="mb-3" placeholder="Category" />
                        <Form.Control as="input" value={activity.date} name="date" onChange={handleInputChange} className="mb-3" placeholder="Date" />
                        <Form.Control as="input" value={activity.city} name="city" onChange={handleInputChange} className="mb-3" placeholder="City" />
                        <Form.Control as="input" value={activity.venue} name="venue" onChange={handleInputChange} className="mb-3" placeholder="Venue" />
                        <Button className="float-end ms-1" type="submit" variant="success">Submit</Button>
                        <Button onClick={() => formClose()} className="float-end" variant="light">Cancel</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
           
        </Card>
    )
}