import { Activity } from '@/app/models/activity';
import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void
    cancelSelectActivity: () => void
    editMode: boolean
    openForm: (id: string) => void
    closeForm: () => void
}

const ActivityDashboard = ({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm}: Props) => {
  return (
    <Grid>
        <Grid.Column width='10'>
            <ActivityList activities={activities} selectActivity={selectActivity}/>
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails openForm = {openForm} activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
            {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
        </Grid.Column>
    </Grid>
  )
}

export default ActivityDashboard