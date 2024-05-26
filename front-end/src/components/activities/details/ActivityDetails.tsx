import { Activity } from "@/app/models/activity";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Icon,
  Image,
} from "semantic-ui-react";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void
}

const ActivityDetails = ({ activity, cancelSelectActivity }: Props) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group width="2">
          <Button basic color="blue" content="Edit"></Button>
          <Button onClick={cancelSelectActivity}basic color="grey" content="Cancel"></Button>
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;