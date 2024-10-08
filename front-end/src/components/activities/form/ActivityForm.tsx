import { Activity } from '@/app/models/activity';
import React, { ChangeEvent, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface Props{
    activity: Activity | undefined;
    closeForm: () => void
    createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({activity: selectedActivity, closeForm, createOrEdit}: Props) => {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

  return (
    <>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
            <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
            <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
            <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
            <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
            <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
            <Button floated='right' positive type='submit' content="Submit"/>
            <Button onClick={closeForm} floated='right' type='submit' content="Cancel"/>
        </Form>
    </>
  )
}

export default ActivityForm