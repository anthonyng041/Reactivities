("use client");

import { Activity } from "./models/activity";
import NavBar from "@/components/NavBar";

import { useEffect, useState } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}
