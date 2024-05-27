import { Activity } from '@/app/models/activity';
import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

interface Props{
    activity: Activity | undefined;
    closeForm: () => void
}

const ActivityForm = ({activity: selectedActivity, closeForm}: Props) => {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        console.log(activity);
    }

  return (
    <>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title} name='title'/>
            <Form.TextArea placeholder='Description' />
            <Form.Input placeholder='Category' />
            <Form.Input placeholder='Date' />
            <Form.Input placeholder='City' />
            <Form.Input placeholder='Venue' />
            <Button floated='right' positive type='submit' content="Submit"/>
            <Button onClick={closeForm} floated='right' type='submit' content="Cancel"/>
        </Form>
    </>
  )
}

export default ActivityForm