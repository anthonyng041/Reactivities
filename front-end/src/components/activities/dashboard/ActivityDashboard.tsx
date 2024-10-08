import { Activity } from '@/app/models/activity';
import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

const ActivityDashboard = ({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) => {
  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails openForm = {openForm} activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
            {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
        </Grid.Column>
    </Grid>
  )
}

export default ActivityDashboard