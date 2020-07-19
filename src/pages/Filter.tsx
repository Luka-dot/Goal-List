import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/react';

import { COURSE_DATA } from './Courses';

const Filter: React.FC = () => {

  const courseFilterChangeHandler = (event: CustomEvent) => {
    console.log(event);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {COURSE_DATA.map(course => (
            <IonItem key={course.id}>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle value={course.id} onIonChange={courseFilterChangeHandler} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;


