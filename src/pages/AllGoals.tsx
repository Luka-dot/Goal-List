import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonLabel,
  IonItem
} from '@ionic/react';

import { COURSE_DATA } from './Courses';

const AllGoals: React.FC = () => {

  const goals = COURSE_DATA.map( course => {
    return course.goals.map(goal => {
      return { id: goal.id, text: goal.text, courseTitle: course.title };
    });
  }).reduce((goalArr, nestedGoals) => {
    let updatedGoalArray = goalArr;
    for (const goal of nestedGoals) {
      updatedGoalArray = updatedGoalArray.concat(goal);
    }
    return updatedGoalArray;
  }, []);

  console.log(goals)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map(goal => (
            <IonItem key={goal.id}>
              <IonLabel>
                <h2>{goal.text}</h2>
                <p>{goal.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
