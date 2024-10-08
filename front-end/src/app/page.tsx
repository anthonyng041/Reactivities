"use client";

import { Activity } from "./models/activity";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { Container, List } from "semantic-ui-react";
import ActivityDashboard from "@/components/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';
import agent from "./api/agent";
import LoadingComponent from "@/components/LoadingComponent";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Activities.list()
      .then((response) => {
        let activities: Activity[] =[];
        response.forEach(activity => {
          activity.date = activity.date.split('T')[0];
          activities.push(activity);
        })
        setActivities(response);
        setLoading(false);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x=>x.id === id))
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id 
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);;
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  if (loading) return <LoadingComponent content='Loading App' />

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}
